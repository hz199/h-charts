#!/usr/bin/env sh

set -e

npm run build

npm adduser

npm publish

cd -