---
title: object 数据类型
date: 2019-12-15
tags:
 - js
categories: 
 - js
---

# object 数据类型

## delete 用于删除对象的属性

``` js

let a = {name: 'maoguotao'}

delete a.name // true

```

## for ... in, 遍历对象所有可遍历（enumerable）的属性，跳过不可遍历的对象，它不仅遍历对象自身属性还会遍历对象继承的属性

``` js

let obj = {a: 1, b: 2, c: 3};

for (let i in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
// toString 属性没有遍历，因为toString被继承但是他是不可遍历的

// 如果我们要遍历对象自身的属性还需要用hasOwnProperty() 过滤下

for (let k in obj) {
    if (obj.hasOwnProperty(k)) console.log('key' , k)
}


```
