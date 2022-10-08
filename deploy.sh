#!/usr/bin/env sh

set -e
pnpm install

# 构建
pnpm build:docs

# 进入生成的构建文件夹
cd play

cd dist

# read name

git init
git add -A
git commit -m "h-chart"

git push -f git@github.com:hz199/hcharts.github.io.git master

cd -