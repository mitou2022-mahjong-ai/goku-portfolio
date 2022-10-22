import json
import os
from pathlib import Path

curpath = Path(os.path.abspath(os.curdir))
os.makedirs(curpath / ".firebase", exist_ok=True)
json_dict = {
    key: os.getenv(key)
    for key in [
        "type",
        "project_id",
        "private_key_id",
        "private_key",
        "client_email",
        "client_id",
        "auth_uri",
        "token_uri",
        "auth_provider_x509_cert_url",
        "client_x509_cert_url",
    ]
}
with open(curpath / os.getenv("GOOGLE_APPLICATION_CREDENTIALS"), "w") as f:
    json.dump(json_dict, f)
