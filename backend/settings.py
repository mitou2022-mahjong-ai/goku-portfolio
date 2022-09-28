from functools import lru_cache

from pydantic import BaseSettings


class Settings(BaseSettings):
    google_application_credentials: str
    firebase_realtime_database_url: str
    table_name: str

    class Config:
        env_file = ".env"


@lru_cache
def get_settings() -> Settings:
    return Settings()
