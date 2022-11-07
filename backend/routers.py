from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends
from firebase_admin import db

from schemas import Stats
from settings import Settings, get_settings

game_stats_router = APIRouter()
health_router = APIRouter()


@health_router.get("/", response_model=str)
def health_check() -> str:
    return "ok"


@game_stats_router.get("/game_stats/overall", response_model=List[Stats])
def get_overall_gamestats(settings: Settings = Depends(get_settings)) -> List[Stats]:

    ref = db.reference("restricted_access/secret_document")
    obj: dict = ref.child(settings.table_name).get()
    overall_game_stats: List[Stats] = []
    for _, game_stats in obj.items():
        if (
            "prototype" not in game_stats["ai_type"]
            and "baseline" not in game_stats["ai_type"]
        ):
            overall_game_stats.append(
                Stats(
                    datetime=datetime.strptime(
                        game_stats["datetime"].split(".")[0], "%Y-%m-%d %H:%M:%S"
                    ),
                    url=game_stats["url"],
                    rank=game_stats["rank"],
                    player_id=game_stats["player_id"],
                    points=game_stats["points"],
                    ai_type=game_stats["ai_type"],
                )
            )

    return overall_game_stats
