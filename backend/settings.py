from functools import lru_cache

from pydantic import BaseSettings


class Settings(BaseSettings):
    table_name: str
    firebase_realtime_database_url: str

    class Config:
        env_file = ".env"


@lru_cache
def get_settings() -> Settings:
    return Settings()
