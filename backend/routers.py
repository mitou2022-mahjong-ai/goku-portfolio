from datetime import datetime
from typing import Dict, List

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
    obj: Dict[str, dict] = ref.child(settings.table_name).get()
    overall_game_stats: List[Stats] = []
    for _, game_stats in obj.items():
        if (
            "prototype" not in game_stats["ai_type"]
            and "baseline" not in game_stats["ai_type"]
            and "test" not in game_stats["ai_type"]
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
                    round_num=game_stats.get("round_num", 0),
                    riichi_cnt=game_stats.get("riichi_cnt", 0),
                    meld_cnt=game_stats.get("meld_cnt", 0),
                    double_meld_cnt=game_stats.get("double_meld_cnt", 0),
                    tsumo_cnt=game_stats.get("tsumo_cnt", 0),
                    agari_cnt=game_stats.get("agari_cnt", 0),
                    houju_cnt=game_stats.get("houju_cnt", 0),
                    ryuukyoku_cnt=game_stats.get("ryuukyoku_cnt", 0),
                    ave_agari=game_stats.get("ave_agari", 0),
                    ave_houju=game_stats.get("ave_houju", 0),
                    ryuukyoku_tenpai_percentage=game_stats.get(
                        "ryuukyoku_tenpai_percentage", 0
                    ),
                )
            )

    return overall_game_stats
