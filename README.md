# Vuepress help-center template

> A template for creating a help-center with [vuepress](https://vuepress.vuejs.org/).

See on [github pages](https://jvautier.github.io/vuepress-helpcenter-template/)


![screenshot-002](assets/img/screenshot-002.png)

## Requirements

- [yarn](https://yarnpkg.com/)

or
- [docker-compose](https://docs.docker.com/compose/)

or
- [devcontainer](https://code.visualstudio.com/docs/remote/containers)

## Setup

```sh
make setup
```

_With `docker-compose` there is no setup phase_

## Development setup

```sh
make dev
```
or
```sh
docker-compose up -d --build
```

## Build

```sh
make build
```
or
```sh
docker-compose build
docker-compose run app yarn docs:build
```

## Deploy

```sh
make deploy
```
or
```sh
./scripts/deploy.sh
```

## License

Licensed under the MIT License. See [LICENSE](LICENCE).