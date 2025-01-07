from fastapi import APIRouter
from transformers import pipeline

router = APIRouter()

# Load Hugging Face's BLOOM model
chatbot = pipeline("text-generation", model="bigscience/bloom", tokenizer="bigscience/bloom")

@router.post("/chat/")
async def chat(user_input: str):
    response = chatbot(user_input, max_length=200, num_return_sequences=1)
    return {"response": response[0]['generated_text']}
