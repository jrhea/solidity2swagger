#!/usr/bin/env bash

os="$(uname -s)"
echo ${os}

if [ ${os} == "Darwin" ]; then
    command -v java >/dev/null 2>&1 || { brew cask install java; }
    command -v swagger-codegen >/dev/null 2>&1 || { brew install swagger-codegen; }
elif [ ${os} == "Linux" ]; then
    echo "You need to install: "
    echo "-Java"
    echo "-swagger-codegen"
fi

# install node packages listed in package.json
npm install
