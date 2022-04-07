#!/bin/bash
echo "清除scorpionMGT.github.io文件"
echo "当前目录"
pwd

cd ../scorpionMGT.github.io
shopt -s extglob 
rm -rf !(.git)
cd ../my-blog
cp -rf public/*  ../scorpionMGT.github.io

# 部署到github上
# cd  ../scorpionMGT.github.io
# git add .
# git commit -m "deploy test"
# git push