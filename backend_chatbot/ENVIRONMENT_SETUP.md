# Environment Setup for Actoviz Chatbot

## Quick Fix for Gemini API Authentication

The error you're seeing is because the backend was trying to use Google's Vertex AI (which requires complex authentication), but we've now fixed it to use the direct Gemini API which is much simpler.

## Required Environment Variables

Create a `.env` file in your `backend_chatbot` directory with:

```env
# Gemini API Key (Required)
GOOGLE_API_KEY=your_gemini_api_key_here

# Optional: Override the model (default is gemini/gemini-1.5-flash)
LLM_MODEL=gemini/gemini-1.5-flash
```

## How to Get Your Gemini API Key

1. **Go to Google AI Studio**: https://aistudio.google.com/
2. **Sign in** with your Google account
3. **Click "Get API Key"** in the left sidebar
4. **Create a new API key** or use an existing one
5. **Copy the API key** and paste it in your `.env` file

## Example .env File

```env
GOOGLE_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
LLM_MODEL=gemini/gemini-1.5-flash
```

## Testing the Setup

1. **Start your backend**:
   ```bash
   cd backend_chatbot
   python -m uvicorn chat_bot.main:app --reload --host 0.0.0.0 --port 8000
   ```

2. **Test the API**:
   ```bash
   curl -X POST "http://localhost:8000/chat" \
        -H "Content-Type: application/json" \
        -d '{"message": "Hello, what services does Actoviz offer?"}'
   ```

3. **Check your frontend**: Visit your website and try the chatbot widget

## Troubleshooting

### If you still get authentication errors:
- Make sure your `.env` file is in the `backend_chatbot` directory
- Verify your API key is correct (starts with `AIzaSy`)
- Restart your backend server after adding the environment variable

### If the chatbot doesn't respond:
- Check that your backend is running on port 8000
- Verify your frontend is configured to connect to `http://localhost:8000`
- Check the browser console for any connection errors

## Production Deployment

For production, set the environment variable in your hosting platform:
- **Vercel**: Add `GOOGLE_API_KEY` in your project settings
- **Railway**: Add in your environment variables
- **Heroku**: Use `heroku config:set GOOGLE_API_KEY=your_key`

## Security Notes

- Never commit your `.env` file to version control
- Keep your API key secure and don't share it publicly
- Consider using different API keys for development and production
