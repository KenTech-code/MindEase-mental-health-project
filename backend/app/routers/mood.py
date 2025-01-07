from fastapi import APIRouter
from sqlalchemy.orm import Session
from app.models import MoodEntry, SessionLocal

router = APIRouter()

@router.post("/mood/")
async def add_mood(mood: str):
    session = SessionLocal()
    new_mood = MoodEntry(mood=mood)
    session.add(new_mood)
    session.commit()
    session.close()
    return {"message": "Mood entry saved"}
