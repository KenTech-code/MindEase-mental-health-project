from fastapi import FastAPI
from app.routers import chat, mood, journal

app = FastAPI()

# Include routers for modularity
app.include_router(chat.router)
app.include_router(mood.router)
app.include_router(journal.router)

@app.get("/")
def read_root():
    return {"message": "MindEase Backend is running"}
