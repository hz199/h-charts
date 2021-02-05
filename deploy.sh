#!/usr/bin/env sh

set -e
yarn build

cd examples

# 构建
yarn run build

# 进入生成的构建文件夹
cd dist

# read name

git init
git add -A
git commit -m "h-chart"

git push -f git@github.com:hz199/hcharts.github.io.git master

cd -