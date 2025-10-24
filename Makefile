REGISTRY ?= crpi-rxzdkxf96xqy38sp.cn-chengdu.personal.cr.aliyuncs.com
REPOSITORY ?= letoai/leto_website
TAG ?= latest
IMAGE := $(REGISTRY)/$(REPOSITORY):$(TAG)

USERNAME ?= baili00429
NPM_REGISTRY ?= https://registry.npmmirror.com
NEXT_FONT_GOOGLE_URL ?= https://fonts.googleapis.cn
PLATFORM ?= linux/amd64

.PHONY: docker-build docker-run compose-up compose-down docker-push docker-login

docker-build:
	docker buildx build \
		--platform $(PLATFORM) \
		--build-arg NPM_REGISTRY=$(NPM_REGISTRY) \
		--build-arg NEXT_FONT_GOOGLE_URL=$(NEXT_FONT_GOOGLE_URL) \
		-t $(IMAGE) \
		--load \
		.

docker-run: docker-build
	docker run --rm \
		--platform $(PLATFORM) \
		-p 3000:3000 \
		-e NEXT_FONT_GOOGLE_URL=$(NEXT_FONT_GOOGLE_URL) \
		$(IMAGE)

compose-up:
	IMAGE=$(IMAGE) PLATFORM=$(PLATFORM) NEXT_FONT_GOOGLE_URL=$(NEXT_FONT_GOOGLE_URL) docker compose up

compose-down:
	docker compose down

docker-push:
	docker buildx build \
		--platform $(PLATFORM) \
		--build-arg NPM_REGISTRY=$(NPM_REGISTRY) \
		--build-arg NEXT_FONT_GOOGLE_URL=$(NEXT_FONT_GOOGLE_URL) \
		-t $(IMAGE) \
		--push \
		.

docker-login:
	@if [ -z "$(USERNAME)" ]; then \
		echo "Please provide USERNAME=<your-registry-username> make docker-login"; \
		exit 1; \
	fi
	docker login --username=$(USERNAME) $(REGISTRY)
