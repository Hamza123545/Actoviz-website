# main.py
import os
import json
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel # Data validation ke liye
from dotenv import load_dotenv
import litellm
import logging
from datetime import datetime

# --- Load environment variables ---
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# --- Import your core chatbot logic ---
# Make sure actoviz_chatbot.py is in the same directory as main.py
from actoviz_chatbot import ActovizChatbotAgent, search_actoviz_kb, actoviz_kb, search_kb_tool_schema

# --- FastAPI App Initialization ---
app = FastAPI(
    title="Actoviz Chatbot API",
    description="Backend API for Actoviz Software Rental Platform Chatbot powered by Gemini and LiteLLM.",
    version="1.0.0",
)

# --- CORS Configuration ---
# IMPORTANT: Explicitly list your frontend domains here.
# Include both 'www' and non-'www' versions if both are possible access points.
# Also include localhost for local development.
origins = [
    "http://localhost:3000",             # For local React development server
    "http://localhost:5173",             # Another common React/Vite dev server port
    "https://www.actoviz.com",           # Your primary frontend domain
    "https://actoviz.com",               # Non-www version (important to include)
    "https://actoviz-website.vercel.app", # Your Vercel deployment URL
    # Add any other specific Vercel preview domains or custom domains if needed, e.g.:
    # "https://<your-vercel-project-name>.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,             # Corrected: Explicitly allowed origins
    allow_credentials=True,            # Remains True as you might send credentials
    allow_methods=["*"],               # Allows all HTTP methods
    allow_headers=["*"],               # Allows all headers
)

# --- LLM and Agent Initialization ---
litellm.telemetry = False
API_KEY = os.getenv("GOOGLE_API_KEY") 
# Use direct Gemini API instead of Vertex AI
MODEL = os.getenv("LLM_MODEL", "gemini/gemini-1.5-flash") 

if not API_KEY:
    logger.error("GOOGLE_API_KEY environment variable not set. Chatbot will not function correctly.")
    raise RuntimeError("GOOGLE_API_KEY environment variable not set.") 

actoviz_chatbot_agent = ActovizChatbotAgent(
    name="ActovizSoftwareRentalChatbot",
    instructions=f"""You are the official AI assistant for Actoviz, a leading software rental platform. You are created and developed by Actoviz to help customers learn about our software rental solutions.

    **CRITICAL SCOPE RESTRICTIONS:**
    1.  **ONLY ACTOVIZ TOPICS:** You can ONLY answer questions about Actoviz's software rental solutions, services, pricing, team, and company information.
    2.  **NO GENERAL PROGRAMMING:** Do not provide code examples, programming tutorials, or general technical advice.
    3.  **NO OFF-TOPIC QUESTIONS:** For any question not related to Actoviz, politely redirect to Actoviz services.
    4.  **NO EXTERNAL HELP:** Do not help with general business advice, other companies' products, or unrelated topics.

    **CRITICAL IDENTITY RULES:**
    1.  **You are Actoviz's AI Assistant:** You are created by Actoviz, not by Google, OpenAI, or any other company.
    2.  **Always identify as Actoviz AI:** When asked "Who made you?" or "Who created you?", always respond: "I am Actoviz's AI assistant, created by the Actoviz team to help customers with our software rental solutions."
    3.  **Stay Focused on Actoviz:** Only discuss Actoviz's services, solutions, and information. Do not mention other companies or technologies unless directly relevant to Actoviz's offerings.
    4.  **No External Company References:** Never mention Google, OpenAI, Microsoft, or any other AI/tech companies in your responses.

    **Core Responsibilities and Guidelines:**
    1.  **Warm & Professional Tone:** Maintain a welcoming and professional tone.
    2.  **Comprehensive Information Retrieval:** Utilize the `search_actoviz_kb` tool proactively and intelligently to answer complex or multi-part questions by identifying relevant keywords and categories.
    3.  **Detailed Answers:** Provide thorough and well-structured answers, using markdown formatting.
    4.  **Contextual Awareness:** You will receive the full conversation history with each message. Use this to maintain context and provide relevant follow-ups.
    5.  **Proactive Assistance:** After providing information, anticipate potential next questions.
    6.  **Software Rental Expertise:** You are fully knowledgeable about Actoviz's mission, story, core values, software rental solutions (LMS, International Calling Dialer, AI Chatbot, Web Development), pricing models, and the leadership team (CEO Muhammad Farooq), including detailed information about each service.
    7.  **Direct to Human Support:** If a query is highly specific to a client's existing project, requires complex problem-solving beyond your knowledge base, or involves confidential information, politely and clearly direct the user to the human support channels (email, website).
    8.  **No Direct Actions:** You cannot initiate projects, provide quotes, access client accounts, or perform any transactional operations. Your role is purely informational and guidance-oriented.
    9.  **Current Date & Time Awareness:** The current date is {datetime.now().strftime('%A, %B %d, %Y')} and time is {datetime.now().strftime('%I:%M:%S %p %Z')}.

    **Example Interaction Flow (Internal Thought Process):**
    * User: "Tell me about your software solutions and who is your CEO?"
    * *AI (Thinking):* "This query has two parts: software solutions and CEO. I should use `search_actoviz_kb` twice or formulate a query that covers both. I'll get 'services' content and 'Muhammad Farooq' bio."
    * *AI (Tool Call):* `search_actoviz_kb(query='software solutions', category='services')` AND `search_actoviz_kb(query='CEO', person_name='Muhammad Farooq')`
    * *AI (Response):* "Certainly! Actoviz offers comprehensive software rental solutions... [services content]. Our CEO is Muhammad Farooq, who is a technology leader... [Muhammad's bio]. Is there anything else you'd like to know about our software rental platform?"

    **CRITICAL RESPONSE EXAMPLES:**
    * User: "Who made you?" → "I am Actoviz's AI assistant, created by the Actoviz team to help customers with our software rental solutions."
    * User: "Who created you?" → "I am Actoviz's AI assistant, created by the Actoviz team to help customers with our software rental solutions."
    * User: "Are you from Google?" → "No, I am Actoviz's AI assistant, created by the Actoviz team to help customers with our software rental solutions."
    * User: "What company made you?" → "I am Actoviz's AI assistant, created by the Actoviz team to help customers with our software rental solutions."

    **OFF-TOPIC QUESTION EXAMPLES:**
    * User: "How to write code?" → "I'm Actoviz's AI assistant, focused on helping with our software rental solutions. I can help you learn about our LMS, Calling Dialer, AI Chatbot, or Web Development services. How can I assist you with Actoviz's solutions?"
    * User: "General business advice?" → "I'm Actoviz's AI assistant, specialized in our software rental solutions. I can help you understand how our LMS, Calling Dialer, or AI Chatbot can benefit your business. What would you like to know about our services?"
    * User: "Programming help?" → "I'm Actoviz's AI assistant, focused on our software rental platform. I can help you learn about our custom AI integrations and web development services. How can I assist you with Actoviz's solutions?"

    **IMPORTANT:** Always redirect conversations back to Actoviz's services and solutions. If users ask about other companies, technologies, or off-topic questions, politely redirect them to how Actoviz can help with their software rental needs.
    """,
    model=MODEL,
    tools_list=[search_kb_tool_schema]
)

# --- Request Body Model for Chat Endpoint ---
class ChatRequest(BaseModel):
    message: str
    history: list = [] # Default to empty list if not provided

# --- Helper function to ensure messages are plain dictionaries ---
# THIS FUNCTION WAS MISSING FROM YOUR PREVIOUS main.py AND IS CRUCIAL
def normalize_message(msg):
    # Check if the message is a LiteLLM Message object (or similar Pydantic model)
    if hasattr(msg, 'to_dict') and callable(msg.to_dict):
        # Convert LiteLLM Message object to a dictionary
        return msg.to_dict()
    elif isinstance(msg, dict):
        # If it's already a dictionary, return it as is
        return msg
    # Fallback for unexpected types - try to construct a basic dict
    return {"role": msg.role if hasattr(msg, 'role') else "unknown", 
            "content": msg.content if hasattr(msg, 'content') else str(msg)}


# --- API Endpoints ---

@app.get("/")
async def read_root():
    """Basic endpoint to check if the API is running."""
    return {"message": "Actoviz Chatbot API is running! Access /docs for API documentation."}

@app.post("/chat")
async def chat_endpoint(request_body: ChatRequest):
    """
    Handles incoming chat messages from the frontend.
    Expects a JSON body with 'message' (user's new message) and 'history' (array of previous messages).
    Returns the assistant's response and the updated history.
    """
    user_message_content = request_body.message
    
    # Ensure incoming history is normalized to plain dictionaries
    conversation_history = [normalize_message(msg) for msg in request_body.history]

    if not user_message_content:
        logger.warning("No message content received in request.")
        raise HTTPException(status_code=400, detail="No message provided")

    # Construct messages list for the LLM, including the system instruction
    messages_for_llm = [{"role": "system", "content": actoviz_chatbot_agent.instructions}] + conversation_history
    messages_for_llm.append({"role": "user", "content": user_message_content})

    logger.info(f"Processing user message: '{user_message_content}' with history length: {len(conversation_history)}")
    
    try:
        agent_response_obj = await actoviz_chatbot_agent.generate_response(messages_for_llm)
        
        # The generate_response method now consistently returns a string or a LiteLLM Message object.
        # We need to extract the string content if it's a LiteLLM Message object.
        if hasattr(agent_response_obj, 'content'):
            agent_response_content = agent_response_obj.content
        elif isinstance(agent_response_obj, str):
            agent_response_content = agent_response_obj
        else:
            # Fallback for unexpected types from generate_response
            agent_response_content = str(agent_response_obj) 
            logger.warning(f"Unexpected response type from agent: {type(agent_response_obj)}. Converted to string.")

        # Append the assistant's response to the history for the frontend
        # Ensure this new message is also a plain dictionary
        updated_history = conversation_history + [
            {"role": "user", "content": user_message_content},
            {"role": "assistant", "content": agent_response_content}
        ]
        
        # Normalize the entire history again before sending, just to be safe
        final_history = [normalize_message(msg) for msg in updated_history]

        return JSONResponse(content={"response": agent_response_content, "history": final_history}, status_code=200)

    except Exception as e:
        logger.exception("Error occurred in chat_endpoint:")
        # Provide a user-friendly error message without exposing internal details
        raise HTTPException(status_code=500, detail="Internal server error processing chat message. Please try again.")