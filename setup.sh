#!/usr/bin/env bash

os="$(uname -s)"
echo ${os}

if [ ${os} == "Darwin" ]; then
	brew cask install java
    brew install swagger-codegen
elif [ ${os} == "Linux" ]; then
	echo "You need to install: "
	echo "-Java"
	echo "-swagger-codegen"
fi

# install node packages listed in package.json
npm install
