import firebase_admin
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from make_firebase_json import make_firebase_json
from routers import game_stats_router, health_router
from settings import get_settings

app = FastAPI()

origins = ["*"]

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
    make_firebase_json()

    firebase_admin.initialize_app(
        options={"databaseURL": settings.firebase_realtime_database_url}
    )
