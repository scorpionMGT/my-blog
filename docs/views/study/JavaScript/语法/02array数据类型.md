---
title: array 数据类型
date: 2019-12-15
tags:
 - js
categories: 
 - js
---

# array数据类型

## 删除数据可以通过length属性

``` js
let a = [1,2,3]
a.length = 1
a // [1]
```

## 类数组对象, 类似数组的对象，有属性从0到n,和length属性，但是没有数组的特有方法

``` js
let obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}
```

## 数组的slice方法可以将类数组转换为真正数组

``` js
let arrayLike = {
    0: 'mao',
    1: 'guo',
    2: 'tao',
    length: 3
}
let arr = Array.prototype.slice.call(arrayLike)
arr // ['mao', 'guo', 'tao']

```