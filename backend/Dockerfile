FROM python:3.8

WORKDIR /app

COPY . .

RUN pip install --upgrade pip && \
    pip install pipenv && \
    pipenv install --system

ENV GOOGLE_APPLICATION_CREDENTIALS firebase_key.json

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--reload", "--port", "8000"]