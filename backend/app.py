import firebase_admin
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from firebase_json import download_firebase_json_from_s3
from routers import game_stats_router, health_router
from settings import get_settings

app = FastAPI(docs_url=None, redoc_url=None, openapi_url=None)

origins = [
    "http://localhost:3000",
    "https://goku-mahjong-ai-*.web.app",
    "https://goku-mahjong-ai.web.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(game_stats_router)
app.include_router(health_router)


@app.on_event("startup")
def start_up():
    settings = get_settings()
    download_firebase_json_from_s3()

    firebase_admin.initialize_app(
        options={"databaseURL": settings.firebase_realtime_database_url}
    )
