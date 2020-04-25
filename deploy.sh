#!/bin/bash
echo "Hello World !"
echo "当前目录"
pwd

echo $1

if test -n $1
then
    cd ../site
    git add .
    git commit -m "$1"
    echo $1
    git push
fi
#  echo '请在 yarn deploy 之后填写 commit 描述信息'