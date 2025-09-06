# Actoviz Chatbot API

A sophisticated AI chatbot backend for Actoviz, a leading software rental platform. This chatbot is powered by Google's Gemini API through LiteLLM and provides comprehensive information about Actoviz's software rental solutions.

## Features

- **Intelligent Knowledge Base**: Comprehensive information about Actoviz's software rental platform
- **Multi-Service Support**: Detailed information about LMS, International Calling Dialer, AI Chatbot, and Web Development services
- **CEO Information**: Detailed information about Muhammad Farooq, CEO and Technology Leader
- **Flexible Pricing**: Information about subscription models and pricing plans
- **24/7 Support**: Information about support and training services
- **Free Consultation**: Details about consultation services

## Software Solutions Covered

1. **Learning Management System (LMS)**
   - Course creation and management
   - Student progress tracking
   - Assessment tools
   - Video conferencing integration

2. **International Calling Dialer**
   - Global calling capabilities
   - Call recording and analytics
   - CRM integration
   - Multi-language support

3. **Custom Chatbot AI Integrations**
   - Natural Language Processing
   - Multi-platform Integration
   - Custom Training Models
   - Real-time Analytics

4. **Web Development**
   - Responsive Design
   - SEO Optimization
   - Fast Loading Speed
   - Content Management System

## Technology Stack

- **FastAPI**: Modern, fast web framework for building APIs
- **LiteLLM**: Unified interface for multiple LLM providers
- **Google Gemini**: Advanced AI model for natural language processing
- **Python 3.8+**: Core programming language

## Setup Instructions

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Environment Variables**
   Create a `.env` file with:
   ```
   GOOGLE_API_KEY=your_gemini_api_key_here
   LLM_MODEL=gemini/gemini-1.5-flash-latest
   ```

3. **Run the Application**
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

## API Endpoints

- `GET /`: Health check endpoint
- `POST /chat`: Main chat endpoint for interacting with the chatbot
- `GET /docs`: Interactive API documentation (Swagger UI)

## Chat Request Format

```json
{
  "message": "Tell me about your LMS solution",
  "history": []
}
```

## Response Format

```json
{
  "response": "Our LMS is a complete e-learning platform...",
  "history": [
    {
      "role": "user",
      "content": "Tell me about your LMS solution"
    },
    {
      "role": "assistant", 
      "content": "Our LMS is a complete e-learning platform..."
    }
  ]
}
```

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (Local development)
- `http://localhost:5173` (Vite dev server)
- `https://www.actoviz.com`
- `https://actoviz.com`
- `https://actoviz-website.vercel.app`

## Knowledge Base Categories

The chatbot can answer questions about:
- Company overview and mission
- Software rental solutions
- Pricing and subscription plans
- Team and leadership (CEO Muhammad Farooq)
- Contact information and consultation
- Support and training services

## Deployment

This API can be deployed on various platforms:
- **Render**: Easy deployment with automatic scaling
- **Railway**: Simple deployment with environment management
- **Heroku**: Traditional PaaS deployment
- **AWS/GCP/Azure**: Cloud platform deployment

## Support

For technical support or questions about the chatbot:
- Email: info@actoviz.com
- Website: actoviz.com

## License

This project is proprietary to Actoviz Software Rental Platform.
