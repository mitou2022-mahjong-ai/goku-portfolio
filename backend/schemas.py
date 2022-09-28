from pydantic import BaseModel
from datetime import datetime
from typing import List


class Stats(BaseModel):
    datetime: datetime
    url: str
    rank: int
    player_id: int
    points: List[int]
    ai_type: str
    url: str
    