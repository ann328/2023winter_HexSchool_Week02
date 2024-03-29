#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://ann328.github.io
# git push -f git@github.com:ann.328/ann.328.github.io.git main

# if you are deploying to https://ann328.github.io/2023winter_HexSchool_Week02
git push -f https://github.com/ann328/2023winter_HexSchool_Week02.git main:gh-pages

cd -