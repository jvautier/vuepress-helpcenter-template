#!/usr/bin/env sh
# https://vuepress.vuejs.org/guide/deploy.html#github-pages
set -e
sudo chown -R ${USER}:${USER} public/
cd public
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:jvautier/vuepress-helpcenter-template.git master:gh-pages
cd -