# src/aahin_chatbot.py (or just aahin_chatbot.py if directly in src)

import os
import json
import litellm
import logging
from datetime import datetime

# --- Configuration and Logging ---
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler() # Keep stream handler for Render logs
    ]
)
logger = logging.getLogger(__name__)

litellm.telemetry = False # Disable LiteLLM telemetry for production

# --- Knowledge Base ---
actoviz_kb = {
    "company_overview": {
        "title": "Company Overview",
        "content": "Actoviz is a leading software rental platform that democratizes access to premium business applications. We believe that every business, regardless of size, should have access to enterprise-grade software solutions without the burden of heavy upfront costs or long-term commitments. Our flexible subscription model makes cutting-edge technology accessible to businesses of all sizes.",
        "keywords": ["about us", "company", "actoviz", "who are you", "software rental", "platform"]
    },
    "ai_assistant": {
        "title": "Actoviz AI Assistant",
        "content": "I am Actoviz's AI assistant, created by the Actoviz team to help customers learn about our software rental solutions. I am designed to provide information about Actoviz's services, pricing, and solutions. I am not created by Google, OpenAI, or any other external company - I am exclusively Actoviz's AI assistant.",
        "keywords": ["who made you", "who created you", "ai assistant", "chatbot", "who are you", "made by", "created by", "google", "openai"]
    },
    "mission": {
        "title": "Our Mission",
        "content": "Our mission is to empower businesses through accessible software solutions. We're committed to making enterprise-grade software accessible to businesses of all sizes through our innovative rental platform. We believe in democratizing access to premium business applications and helping companies scale efficiently without large upfront investments.",
        "keywords": ["mission", "goal", "objective", "aim", "empower businesses"]
    },
    "story": {
        "title": "Our Story",
        "content": "Actoviz began its journey with a vision to transform how businesses access and use software. Founded by technology leaders passionate about making enterprise-grade solutions accessible, we set out to create a platform that eliminates the barriers of expensive software licenses and complex implementations. Our story is about democratizing technology and helping businesses grow with the right tools at the right time.",
        "keywords": ["story", "history", "founded", "began", "journey"]
    },
    "core_values": {
        "title": "Our Core Values",
        "content": """Our core values are:
- **Innovation First:** We continuously innovate our software solutions to meet evolving business needs, ensuring our clients always have access to cutting-edge technology.
- **24/7 Support:** Our dedicated support team is available around the clock to ensure your software runs smoothly and your business operations never stop.
- **Flexible Solutions:** We believe in providing flexible software rental options that scale with your business. No long-term commitments, just the solutions you need when you need them.
- **Customer Success:** Your success is our priority. We work closely with clients to ensure they maximize the value of our software solutions and achieve their business goals.""",
        "keywords": ["values", "principles", "beliefs", "culture", "innovation", "support", "flexibility"]
    },
    "services": {
        "title": "Our Software Solutions",
        "content": "We offer a comprehensive range of software rental solutions including Learning Management Systems (LMS), International Calling Dialers, Custom Chatbot AI Integrations, Web Development, Mobile App Development, and Enterprise Resource Planning solutions. All our software is available through flexible subscription models with no upfront costs.",
        "keywords": ["services", "solutions", "what do you do", "offerings", "software rental", "lms", "calling dialer", "ai chatbot"]
    },
    "team_muhammad_farooq": {
        "name": "Muhammad Farooq",
        "role": "CEO & Technology Leader",
        "bio": "Muhammad Farooq is the driving force behind Actoviz, serving as the CEO and is a recognized technology leader in the software rental industry. With an unwavering commitment to innovation and excellence, Muhammad brings extensive experience and expertise to democratizing access to enterprise-grade software solutions through flexible rental models. He has been active in the software rental landscape since 2019, accumulating invaluable experience in making enterprise software accessible through innovative rental models and business solutions.",
        "linkedin": "https://www.linkedin.com/in/muhammad-farooq-actoviz/",
        "keywords": ["muhammad farooq", "ceo", "founder", "technology leader"]
    },
    "team_general": {
        "title": "Our Leadership Team",
        "content": "Our leadership team is led by **Muhammad Farooq**, our CEO and Technology Leader. He brings extensive experience in the software rental industry and is dedicated to making enterprise-grade software accessible to businesses through our innovative rental platform. I can provide more details about our leadership if you'd like!",
        "keywords": ["team", "management", "leadership", "who is in charge", "muhammad farooq"]
    },
    "lms_solution": {
        "title": "Learning Management System (LMS)",
        "content": "Our Quran Tutor Management System is a comprehensive e-learning platform designed specifically for Islamic educational institutions and Quran centers. Key features include:\n\n**Core Features:**\n- Complete student management system\n- Tutor management and assignment\n- Class scheduling and attendance tracking\n- Financial management and invoicing\n- Progress tracking and analytics\n- Mobile app and web access\n- Multi-currency payment support\n\n**Pricing:**\n- Monthly Plan: 170 PKR per student per month\n- Annual Plan: 1,700 PKR per student per year (Best value with 2 months free)\n\n**Perfect for:**\n- Quran centers and Islamic schools\n- Educational institutions\n- Corporate training programs\n- Online learning platforms\n\n**Benefits:**\n- Streamlined operations\n- Better student engagement\n- Comprehensive reporting\n- Easy financial management\n- Scalable solution",
        "keywords": ["lms", "learning management system", "e-learning", "education", "training", "courses", "quran tutor", "islamic education", "student management", "tutor management", "170 pkr", "1700 pkr"]
    },
    "calling_dialer": {
        "title": "International Calling Dialer",
        "content": "Our Actoviz Web Dialer is a professional cloud-based calling solution for sales teams, customer support, and business operations. Key features include:\n\n**Core Features:**\n- Web-based dialer interface\n- Call recording and analytics\n- Multi-user management\n- Pay-per-minute billing\n- Global calling support (190+ countries)\n- CRM integration\n- Advanced call reporting\n- Real-time dashboards\n- Enterprise security\n\n**Pricing:**\n- Admin Account Fee: $10 per admin per month\n- International Calling Rates:\n  * United States: $0.04/min\n  * United Kingdom: $0.06/min\n  * Canada: $0.05/min\n  * Australia: $0.08/min\n  * Germany: $0.07/min\n  * India: $0.02/min\n  * Pakistan: $0.02/min\n  * UAE: $0.05/min\n\n**Perfect for:**\n- Sales teams\n- Customer support\n- Real estate professionals\n- Healthcare providers\n- International businesses\n\n**Benefits:**\n- No hardware required\n- Scalable solution\n- Competitive rates\n- Professional features\n- Easy integration",
        "keywords": ["calling dialer", "international calling", "phone system", "crm integration", "call recording", "web dialer", "actoviz dialer", "10 dollar", "admin fee", "calling rates", "global calling"]
    },
    "ai_chatbot": {
        "title": "Custom Chatbot AI Integrations",
        "content": "Our intelligent conversational AI solutions are tailored to your business needs. Key features include:\n\n**Core Features:**\n- Natural Language Processing\n- Multi-platform Integration\n- Custom Training Models\n- Real-time Analytics\n- 24/7 Customer Support\n- Multi-language Support\n- Lead Generation\n- Automated Business Processes\n\n**Pricing:**\n- Starting from $299/month\n\n**Perfect for:**\n- Customer support automation\n- Lead generation\n- Sales assistance\n- FAQ handling\n- Business process automation\n\n**Benefits:**\n- Reduced support costs\n- Improved customer experience\n- 24/7 availability\n- Scalable solution\n- Custom training on your data",
        "keywords": ["ai chatbot", "artificial intelligence", "conversational ai", "customer support", "automation", "299 dollar", "custom chatbot", "ai integration"]
    },
    "web_development": {
        "title": "Web Development Services",
        "content": "We offer comprehensive web development services to help your business establish a strong online presence. Our services include:\n\n**Web Development:**\n- Responsive Design\n- SEO Optimization\n- Fast Loading Speed\n- Content Management System\n- Cross-browser Compatibility\n- Mobile-first Approach\n- Starting from $199/month\n\n**Complex Web App Development:**\n- Scalable Architecture\n- Database Integration\n- API Development\n- User Authentication\n- Real-time Features\n- Cloud Deployment\n- Starting from $599/month\n\n**Database Management & Integration:**\n- Database Design & Optimization\n- Data Migration Services\n- API Integration\n- Data Security & Backup\n- Performance Monitoring\n- Cloud Database Setup\n- Starting from $399/month\n\n**Mobile App Development:**\n- iOS & Android Development\n- Cross-platform Solutions\n- App Store Optimization\n- Push Notifications\n- Offline Functionality\n- App Analytics Integration\n- Starting from $799/month\n\n**Cloud Infrastructure & DevOps:**\n- Cloud Architecture Design\n- CI/CD Pipeline Setup\n- Container Orchestration\n- Monitoring & Logging\n- Auto-scaling Solutions\n- Security Implementation\n- Starting from $499/month\n\n**Benefits:**\n- Modern, responsive designs\n- SEO optimized\n- Fast loading speeds\n- Scalable solutions\n- Professional support",
        "keywords": ["web development", "website", "responsive design", "seo", "cms", "web app", "mobile app", "database", "cloud", "devops", "199 dollar", "599 dollar", "399 dollar", "799 dollar", "499 dollar"]
    },
    "pricing": {
        "title": "Pricing & Subscription Plans",
        "content": "Our software rental model offers flexible pricing with no upfront costs. Here are our current pricing options:\n\n**Learning Management System (LMS):**\n- Monthly Plan: 170 PKR per student per month\n- Annual Plan: 1,700 PKR per student per year (Best value with 2 months free)\n- Features: Complete student management, tutor management, class scheduling, financial management, progress tracking, email support, complete web application access\n- Annual plan includes: Advanced analytics, priority support, custom reporting, enhanced reporting features\n\n**International Calling Dialer:**\n- Admin Account Fee: $10 per admin per month\n- International Calling Rates:\n  * United States: $0.04/min\n  * United Kingdom: $0.06/min\n  * Canada: $0.05/min\n  * Australia: $0.08/min\n  * Germany: $0.07/min\n  * India: $0.02/min\n  * Pakistan: $0.02/min\n  * UAE: $0.05/min\n- Features: Complete administrative access, user management, advanced analytics, priority support, web-based application access\n- Rates available to 190+ countries\n\n**Custom Services:**\n- AI Chatbot Integration: Starting from $299/month\n- Web Development: Starting from $199/month\n- Complex Web App Development: Starting from $599/month\n- Database Management & Integration: Starting from $399/month\n- Mobile App Development: Starting from $799/month\n- Cloud Infrastructure & DevOps: Starting from $499/month\n\nAll plans include 24/7 technical support, automatic updates, and free consultation. Contact us at hello@actoviz.com for custom enterprise solutions.",
        "keywords": ["pricing", "subscription", "cost", "plans", "rental model", "no upfront cost", "lms pricing", "calling dialer pricing", "chatbot pricing", "web development pricing", "170 pkr", "1700 pkr", "10 dollar", "admin fee"]
    },
    "contact": {
        "title": "Contact Information",
        "content": "You can reach us through multiple channels:\n\n**Email:**\n- General inquiries: hello@actoviz.com\n- Legal matters: legal@actoviz.com\n- Support: support@actoviz.com\n\n**Physical Address:**\n651 North Broad Street, Suite 201, Middletown, Delaware 19709, United States\n\n**Website:** actoviz.com\n\n**Free Consultation:** We offer free consultations to help you choose the right software solutions for your business needs. You can schedule one through our website or contact us directly.\n\n**Customer Support:** For immediate assistance, you can also use our contact form on the website or reach out via email.",
        "keywords": ["contact", "email", "reach us", "get in touch", "consultation", "support", "address", "hello@actoviz.com", "legal@actoviz.com", "support@actoviz.com", "delaware", "middletown"]
    },
    "website": {
        "title": "Official Website",
        "content": "Our official website is **actoviz.com**. You can find detailed information about our software rental solutions, pricing plans, case studies, and how to get started with our services. The website includes:\n\n- Complete service descriptions\n- Detailed pricing information\n- Customer testimonials\n- Free consultation booking\n- Contact information\n- Blog with industry insights\n\nVisit actoviz.com to explore our full range of software rental solutions and start your free consultation today.",
        "keywords": ["website", "web address", "url", "actoviz.com", "visit website", "online"]
    },
    "consultation": {
        "title": "Free Consultation",
        "content": "We offer free consultations to help you understand how our software rental solutions can transform your business operations. Our expert consultants will help you identify the best software solutions for your needs and provide guidance on implementation and setup.",
        "keywords": ["consultation", "free consultation", "project discussion", "new project", "start a project"]
    },
    "support": {
        "title": "24/7 Support & Training",
        "content": "We provide comprehensive support to ensure you get the most out of our software solutions:\n\n**Support Channels:**\n- Email: support@actoviz.com\n- General inquiries: hello@actoviz.com\n- Phone support available\n- Live chat on our website\n- Contact form on actoviz.com\n\n**Support Services:**\n- 24/7 technical support\n- Comprehensive onboarding\n- Training materials and documentation\n- Setup and configuration assistance\n- Troubleshooting and issue resolution\n- Regular system updates\n- Performance monitoring\n\n**Response Times:**\n- Critical issues: Within 2 hours\n- General support: Within 24 hours\n- Email inquiries: Within 4 hours\n\n**Training & Onboarding:**\n- Free consultation and setup\n- Comprehensive training materials\n- Video tutorials\n- User guides and documentation\n- Regular training sessions\n- Best practices guidance\n\n**Escalation:**\nIf you need immediate assistance or want to speak with our customer support team directly, please:\n1. Call our support line\n2. Email support@actoviz.com\n3. Use our contact form on actoviz.com\n4. Request a callback through our website\n\nOur support team is dedicated to ensuring your success with our software solutions.",
        "keywords": ["support", "help", "training", "24/7", "technical support", "onboarding", "support@actoviz.com", "hello@actoviz.com", "customer support", "escalation", "phone support", "live chat"]
    },
    "getting_started": {
        "title": "How to Get Started",
        "content": "Getting started with Actoviz is simple:\n\n1. **Free Consultation**: Contact us at info@actoviz.com or visit actoviz.com to schedule a free consultation\n2. **Choose Your Plan**: Based on your needs, we'll recommend the best software solutions and pricing plan\n3. **Quick Setup**: Our team handles the complete setup and configuration\n4. **Training & Support**: We provide comprehensive training and 24/7 support\n5. **Go Live**: Start using your software rental solutions immediately\n\nNo upfront costs, no long-term commitments, and full support throughout your journey with us.",
        "keywords": ["getting started", "how to start", "begin", "setup", "onboarding", "process"]
    },
    "rental_model": {
        "title": "Software Rental Model Benefits",
        "content": "Our software rental model offers several advantages:\n\n**Cost-Effective**: No large upfront investments, pay monthly or annually\n**Flexible**: Scale up or down based on your business needs\n**Always Updated**: Automatic software updates and latest features\n**Full Support**: 24/7 technical support and training included\n**No Maintenance**: We handle all technical maintenance and updates\n**Quick Deployment**: Get started in days, not months\n**Risk-Free**: Try before you commit with our flexible terms\n\nThis model allows businesses to access enterprise-grade software without the traditional barriers of high upfront costs and complex implementations.",
        "keywords": ["rental model", "benefits", "advantages", "why rent", "cost effective", "flexible"]
    },
    "customer_support_escalation": {
        "title": "Customer Support Escalation",
        "content": "I understand you'd like to speak with our customer support team directly. Here are the best ways to reach our support team:\n\n**Immediate Support:**\n- **Email**: support@actoviz.com\n- **General Inquiries**: hello@actoviz.com\n- **Phone Support**: Available during business hours\n- **Live Chat**: Available on our website actoviz.com\n- **Contact Form**: Use our contact form on actoviz.com\n\n**Response Times:**\n- Critical issues: Within 2 hours\n- General support: Within 24 hours\n- Email inquiries: Within 4 hours\n\n**What to Include in Your Message:**\n- Your name and contact information\n- Description of your inquiry or issue\n- Any relevant account information\n- Preferred contact method\n\n**Free Consultation:**\nIf you're interested in our services, you can also schedule a free consultation to discuss your needs with our expert team.\n\n**Physical Address:**\n651 North Broad Street, Suite 201, Middletown, Delaware 19709, United States\n\nOur support team is dedicated to helping you succeed with our software solutions. They'll be able to provide more detailed assistance than I can offer here.",
        "keywords": ["customer support", "support team", "human support", "speak to someone", "contact support", "escalate", "support@actoviz.com", "hello@actoviz.com", "phone support", "live chat", "contact form", "free consultation"]
    }
}

# --- Tool Function ---
def search_actoviz_kb(query: str, category: str = None, person_name: str = None) -> str:
    """
    Searches Actoviz's knowledge base for specific information.
    
    Args:
        query (str): The customer's question or keywords.
        category (str, optional): An optional specific category to narrow the search (e.g., 'team', 'services', 'mission').
        person_name (str, optional): An optional team member's name (e.g., 'Muhammad Farooq') for detailed bios.
        
    Returns:
        str: The relevant information from the knowledge base or a "not found" message.
    """
    logger.info(f"Tool called: search_actoviz_kb(query='{query}', category='{category}', person_name='{person_name}')")
    query_lower = query.lower()
    
    # Prioritize direct person_name search
    if person_name:
        for key, info in actoviz_kb.items():
            if key.startswith("team_") and info["name"].lower() == person_name.lower():
                return f"**{info['name']} ({info['role']}):** {info['bio']}\nLinkedIn: {info['linkedin']}"

    # Prioritize category search
    if category:
        # Check if the category matches any direct key or keywords within entries
        for key, info in actoviz_kb.items():
            if key == category or (isinstance(info, dict) and 'keywords' in info and category in info['keywords']):
                # If it's a general 'team' category, return team_general
                if category == "team_general":
                    return actoviz_kb["team_general"]["content"]
                # For other categories or specific team members from category, return their content
                if "name" in info: # It's a specific team member
                    return f"**{info['name']} ({info['role']}):** {info['bio']}\nLinkedIn: {info['linkedin']}"
                elif "title" in info:
                    return f"**{info['title']}:**\n{info['content']}"
        # If a category was specified but not found
        return f"I couldn't find information under the '{category}' category. Please try a different query."


    # Fallback to general keyword search across all categories if no specific category or person was identified
    found_info_titles = set()
    relevant_contents = []

    for key, info in actoviz_kb.items():
        if isinstance(info, dict) and 'keywords' in info:
            if any(k_word in query_lower for k_word in info['keywords']) or \
               (isinstance(info.get('name'), str) and info['name'].lower() in query_lower) or \
               (isinstance(info.get('role'), str) and info['role'].lower() in query_lower):
                
                if key.startswith("team_") and "team" in query_lower and "team_general" not in found_info_titles:
                    # If 'team' is queried generally, add the general team info
                    if "team_general" in actoviz_kb and actoviz_kb["team_general"]["content"] not in relevant_contents:
                        relevant_contents.append(actoviz_kb["team_general"]["content"])
                        found_info_titles.add("team_general")
                elif key.startswith("team_") and info.get('name') and info['name'].lower() in query_lower and info.get("title") not in found_info_titles: # Added .get("title") for safety
                    # If a specific team member is mentioned in the query
                    content_to_add = f"**{info['name']} ({info['role']}):** {info['bio']}\nLinkedIn: {info['linkedin']}"
                    if content_to_add not in relevant_contents:
                        relevant_contents.append(content_to_add)
                        # Use key for team member titles as 'title' might not exist directly
                        found_info_titles.add(key) 
                elif "title" in info and info["title"] not in found_info_titles: # Avoid duplicates
                    content_to_add = f"**{info['title']}:**\n{info['content']}"
                    if content_to_add not in relevant_contents:
                        relevant_contents.append(content_to_add)
                        found_info_titles.add(info["title"])
    
    if relevant_contents:
        return "\n\n---\n\n".join(relevant_contents) + "\n\nIs there anything else I can help you with regarding Actoviz?"
    else:
        return (
            "I couldn't find specific information about that in our knowledge base. "
            "Perhaps you could try rephrasing your question, or focus on topics like our software rental solutions, "
            "team members, mission, or values. "
            "For more detailed inquiries or to discuss your software needs, "
            "please contact our team directly:\n\n"
            "* **Email:** `info@actoviz.com`\n"
            "* **Website:** `actoviz.com`\n\n"
            "You can also schedule a free consultation to discuss your software rental needs!"
        )


# --- TOOL SCHEMA ---
search_kb_tool_schema = {
    "type": "function",
    "function": {
        "name": "search_actoviz_kb",
        "description": "Finds detailed information about Actoviz, including its company overview, AI assistant information, mission, origin story, core values, software rental solutions (LMS, International Calling Dialer, AI Chatbot, Web Development), specific leadership team members' bios (CEO Muhammad Farooq), contact details, official website, pricing and subscription plans, consultation process, and support services. Use this tool for almost any factual query about Actoviz and its software rental platform.",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string", 
                    "description": "The customer's original question or key phrases about Actoviz, its software rental solutions, or specific personnel. Examples: 'what software do you offer', 'who made you', 'who created you', 'tell me about Muhammad Farooq', 'what's your mission', 'how do I get a consultation', 'what is your pricing', 'tell me about your LMS'"
                },
                "category": {
                    "type": "string",
                    "enum": [
                        "company_overview", "ai_assistant", "mission", "story", "core_values", 
                        "services", "lms_solution", "calling_dialer", "ai_chatbot", 
                        "web_development", "pricing", "team_general", "contact", 
                        "website", "consultation", "support", "getting_started", "rental_model", "customer_support_escalation"
                    ],
                    "description": "Optional: A specific category of information to search within if the user's intent is very clear (e.g., 'services' for 'what do you do', 'mission' for 'what is your goal', 'lms_solution' for 'tell me about your LMS'). If unsure, rely on the 'person_name' or just the 'query'."
                },
                "person_name": {
                    "type": "string",
                    "enum": [
                        "Muhammad Farooq"
                    ],
                    "description": "Optional: The full name of a specific team member if the query is about an individual (e.g., 'Muhammad Farooq' for 'who is the CEO')."
                }
            },
            "required": ["query"]
        }
    }
}

class ActovizChatbotAgent:
    def __init__(self, name: str, instructions: str, model: str, tools_list: list):
        self.name = name
        self.instructions = instructions
        self.model = model
        self._callable_tools = {
            "search_actoviz_kb": search_actoviz_kb
        }
        self.litellm_tools_config = tools_list
        logger.info(f"Agent '{self.name}' initialized with {len(self._callable_tools)} tools.")

    def _filter_external_companies(self, text: str) -> str:
        """Filter out mentions of external companies and off-topic content, redirect to Actoviz identity."""
        external_companies = [
            "Google", "OpenAI", "Microsoft", "Meta", "Facebook", "Amazon", "Apple",
            "ChatGPT", "Bard", "Claude", "Gemini", "GPT", "LLM", "language model"
        ]
        
        off_topic_keywords = [
            "code", "programming", "python", "javascript", "java", "html", "css",
            "todo list", "write code", "coding", "developer", "programming help",
            "general business", "business advice", "marketing", "finance",
            "weather", "news", "sports", "entertainment", "cooking", "recipe"
        ]
        
        text_lower = text.lower()
        
        # Check for external company mentions
        for company in external_companies:
            if company.lower() in text_lower:
                # If it's a question about who made the AI, provide the correct response
                if any(phrase in text_lower for phrase in ["who made", "who created", "made by", "created by"]):
                    return "I am Actoviz's AI assistant, created by the Actoviz team to help customers with our software rental solutions."
                # Otherwise, redirect to Actoviz services
                return "I am Actoviz's AI assistant, focused on helping you with our software rental solutions. How can I assist you with our LMS, Calling Dialer, AI Chatbot, or Web Development services?"
        
        # Check for off-topic content
        for keyword in off_topic_keywords:
            if keyword in text_lower:
                return "I'm Actoviz's AI assistant, specialized in our software rental solutions. I can help you learn about our LMS, Calling Dialer, AI Chatbot, or Web Development services. How can I assist you with Actoviz's solutions?"
        
        return text

    async def generate_response(self, messages: list[dict]) -> str:
        try:
            # Pre-process the last user message to check for off-topic content
            if messages and messages[-1].get("role") == "user":
                user_message = messages[-1].get("content", "").lower()
                
                # Check for off-topic keywords in user input
                off_topic_keywords = [
                    "code", "programming", "python", "javascript", "java", "html", "css",
                    "todo list", "write code", "coding", "developer", "programming help",
                    "general business", "business advice", "marketing", "finance",
                    "weather", "news", "sports", "entertainment", "cooking", "recipe",
                    "how to", "tutorial", "learn", "teach me", "help me with",
                    "write a code", "give me code", "code example", "programming tutorial"
                ]
                
                # Specific check for the exact question pattern
                if "write a code" in user_message or "give me code" in user_message or "code example" in user_message:
                    return "I'm Actoviz's AI assistant, specialized in our software rental solutions. I can help you learn about our custom AI integrations and web development services. How can I assist you with Actoviz's solutions?"
                
                # Check if the message contains off-topic keywords
                for keyword in off_topic_keywords:
                    if keyword in user_message:
                        return "I'm Actoviz's AI assistant, specialized in our software rental solutions. I can help you learn about our LMS, Calling Dialer, AI Chatbot, or Web Development services. How can I assist you with Actoviz's solutions?"
            
            response = await litellm.acompletion(
                model="gemini/gemini-1.5-flash",  # Use direct Gemini API instead of Vertex AI
                messages=messages,
                api_key=os.getenv("GOOGLE_API_KEY"), # Get API key here
                tools=self.litellm_tools_config,
                tool_choice="auto",
                temperature=0.7,
                max_tokens=500
            )

            message_response = response.choices[0].message
            content = message_response.content

            if hasattr(message_response, "tool_calls") and message_response.tool_calls:
                tool_outputs = []
                for tool_call in message_response.tool_calls:
                    func_name = tool_call.function.name
                    args = tool_call.function.arguments 
                    
                    if func_name in self._callable_tools:
                        try:
                            parsed_args = json.loads(args)
                            logger.info(f"Executing tool: {func_name} with parsed_args: {parsed_args}")
                            output = self._callable_tools[func_name](
                                query=parsed_args.get('query', ''), 
                                category=parsed_args.get('category'), 
                                person_name=parsed_args.get('person_name')
                            )
                            tool_outputs.append({
                                "tool_call_id": tool_call.id,
                                "name": func_name,
                                "content": output
                            })
                            logger.info(f"Tool '{func_name}' output: {output[:100]}...")
                        except json.JSONDecodeError as json_err:
                            logger.error(f"JSON Decode Error for tool arguments: {json_err} - Args: {args}", exc_info=True)
                            tool_outputs.append({
                                "tool_call_id": tool_call.id,
                                "name": func_name,
                                "content": f"Error parsing tool arguments: {json_err}"
                            })
                        except Exception as tool_err:
                            logger.error(f"Error executing tool {func_name}: {tool_err}", exc_info=True)
                            tool_outputs.append({
                                "tool_call_id": tool_call.id,
                                "name": func_name,
                                "content": f"Error executing tool: {tool_err}"
                            })
                    else:
                        logger.warning(f"Tool '{func_name}' not found in callable tools.")
                        tool_outputs.append({
                            "tool_call_id": tool_call.id,
                            "name": func_name,
                            "content": "Tool not available."
                        })
                
                # Append the assistant's tool_calls message and then the tool outputs
                messages.append(message_response) # This message is a LiteLLM object
                for output in tool_outputs:
                    messages.append({ # This should be a plain dict
                        "role": "tool",
                        "content": output["content"],
                        "name": output["name"],
                        "tool_call_id": output["tool_call_id"]
                    })
                
                logger.info("Making follow-up LLM call with tool output...")
                follow_up_response = await litellm.acompletion(
                    model=self.model,
                    messages=messages, # Now messages contains tool outputs as well
                    api_key=os.getenv("GOOGLE_API_KEY"),
                    temperature=0.7,
                    max_tokens=500
                )
                content = follow_up_response.choices[0].message.content
            
            # Post-process to ensure no external company mentions
            if content:
                content = self._filter_external_companies(content)
            
            return content if content else "I'm sorry, I couldn't generate a clear answer. Can you please rephrase your question or ask about a different topic?"

        except litellm.exceptions.BadRequestError as e:
            logger.error(f"LiteLLM BadRequestError: {e.response.text}", exc_info=True)
            return f"I'm experiencing a temporary issue. My apologies. Please try again shortly."
        except Exception as e:
            logger.error(f"An unexpected error occurred in generate_response: {e}", exc_info=True)
            return f"Oops! Something unexpected happened on our end. Please try again or contact our support team directly via email at info@actoviz.com or visit our website at actoviz.com."