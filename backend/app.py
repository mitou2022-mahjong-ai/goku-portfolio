from fastapi import FastAPI

from routers import game_stats_router

app = FastAPI()
app.include_router(game_stats_router)
