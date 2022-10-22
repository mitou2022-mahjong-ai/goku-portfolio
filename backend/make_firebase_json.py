import json
import os


def make_firebase_json() -> None:
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
    with open(os.getenv("GOOGLE_APPLICATION_CREDENTIALS"), "w") as f:
        json.dump(json_dict, f)
        print(f"done!: {os.getenv('GOOGLE_APPLICATION_CREDENTIALS')}")
        print(json_dict)
