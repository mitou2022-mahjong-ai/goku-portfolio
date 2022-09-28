import json

from app import app

print(json.dumps(app.openapi(), indent=2, ensure_ascii=False))
