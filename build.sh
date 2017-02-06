#!/bin/bash

echo Removing files from previous builds
rm -rf ./server/public/assets
rm -f ./server/views/index.html

echo Copying static assets to public folder
cp -r ./client/build/static ./server/public

echo Copying index file
cp ./client/build/index.html ./server/views

exit 0