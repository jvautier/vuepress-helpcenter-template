.DEFAULT_GOAL:=help
SHELL:=/bin/bash

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

setup: ## Run Setup
	yarn install

dev: ## Run Development
	yarn docs:dev

build: ## Build artifact
	yarn docs:build

deploy: ## Build artifact
	./scripts/deploy.sh

clean: ## Clean
	@echo "clean"
	rm -rf ./node_modules
	rm -rf ./public
	rm -rf yarn.lock