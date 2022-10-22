import os

import boto3

from settings import get_settings


def download_firebase_json_from_s3() -> None:
    settings = get_settings()
    client = boto3.client(
        "s3",
        aws_access_key_id=settings.aws_access_key_id,
        aws_secret_access_key=settings.aws_secret_access_key,
    )
    client.download_file(
        "goku-portfolio",
        "firebase_key.json",
        os.getenv("GOOGLE_APPLICATION_CREDENTIALS"),
    )


if __name__ == "__main__":
    download_firebase_json_from_s3()
