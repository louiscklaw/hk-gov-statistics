#!/usr/bin/env bash

set -ex

rm -rf build

yarn

yarn build
