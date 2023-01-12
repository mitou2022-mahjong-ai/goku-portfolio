from datetime import datetime
from typing import List

from pydantic import BaseModel


class Stats(BaseModel):
    datetime: datetime
    url: str
    rank: int
    player_id: int
    points: List[int]
    ai_type: str
    round_num: int
    riichi_cnt: int
    meld_cnt: int
    double_meld_cnt: int
    tsumo_cnt: int
    agari_cnt: int
    houju_cnt: int
    ryuukyoku_cnt: int
    ave_agari: float
    ave_houju: float
    ryuukyoku_tenpai_percentage: float
