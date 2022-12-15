lint:
	pipenv run isort . && pipenv run black . && pipenv run flake8 && pipenv run mypy .

deploy:
	docker compose build goku-backend && \
	docker tag backend-goku-backend:latest gcr.io/suzaku-342806/goku-portfolio-server:latest && \
	docker push gcr.io/suzaku-342806/goku-portfolio-server:latest && \
	gcloud run deploy goku-portfolio-server --image gcr.io/suzaku-342806/goku-portfolio-server:latest \
		--concurrency 1 \
		--ingress all \
		--cpu 1 \
		--max-instances 50 \
		--memory 256Mi \
		--min-instances 0 \
		--timeout 3000 \
		--region asia-northeast1 \
		--port 8000