import os

import firebase_admin
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

    firebase_admin.initialize_app(
        options={
            "type": settings.type,
            "project_id": settings.project_id,
            "private_key_id": settings.private_key_id,
            "private_key": settings.private_key,
            "client_email": settings.client_email,
            "client_id": settings.client_id,
            "auth_uri": settings.auth_uri,
            "token_uri": settings.token_uri,
            "auth_provider_x509_cert_url": settings.auth_provider_x509_cert_url,
            "client_x509_cert_url": settings.client_x509_cert_url,
            "databaseURL": settings.firebase_realtime_database_url
        }
    )
