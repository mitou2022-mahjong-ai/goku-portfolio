from fastapi import FastAPI
import firebase_admin
from fastapi.middleware.cors import CORSMiddleware
from routers import game_stats_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origin_regex="(https://.*\.d21sd1q32x07x\.amplifyapp\.com|http://localhost:3000)",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(game_stats_router)

from settings import get_settings

@app.on_event("startup")
def start_up():
    settings = get_settings()
    firebase_admin.initialize_app(
        options={"databaseURL": settings.firebase_realtime_database_url}
    )