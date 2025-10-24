# Leto Website

This is the marketing site for LetoAI, built with Next.js 15, TypeScript, and Tailwind CSS.

## Getting Started
- Install dependencies with `npm install`.
- Run the local dev server with `npm run dev` and visit `http://localhost:3000`.

## Docker
- Build the image with `docker buildx build --platform linux/amd64 --load -t leto-website .`。
- Run the container with `docker run --rm -p 3000:3000 leto-website` and visit `http://localhost:3000`。
- 构建过程默认配置 `NPM_REGISTRY=https://registry.npmmirror.com` 与 `NEXT_FONT_GOOGLE_URL=https://fonts.googleapis.cn`，可通过 `docker buildx build --build-arg` 覆盖。

## Makefile
- Use `make docker-build TAG=v1` to构建镜像，镜像名默认为`crpi-rxzdkxf96xqy38sp.cn-chengdu.personal.cr.aliyuncs.com/letoai/leto_website:v1`。
- 使用`make docker-login USERNAME=<你的账号>`登录远程仓库，随后执行`make docker-push TAG=v1`推送镜像。
- 通过`make compose-up`和`make compose-down`管理Docker Compose服务。 
- 可通过 `NPM_REGISTRY=<镜像源> make docker-build` 或 `NEXT_FONT_GOOGLE_URL=<字体源>` 等方式覆盖默认镜像配置。
- 当需要针对特定架构构建镜像时，追加 `PLATFORM=linux/amd64`（默认值）或 `PLATFORM=linux/arm64` 等参数，例如 `PLATFORM=linux/amd64 make docker-push TAG=v1`。

## Contributor Onboarding
Review [AGENTS.md](./AGENTS.md) for the complete contributor guidelines, including project structure, coding standards, and pull request expectations.

## Content Updates
Marketing copy lives in `config/text.ts`; see [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for field-level references when updating text.
