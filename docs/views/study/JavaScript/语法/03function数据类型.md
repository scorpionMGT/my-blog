---
title: function 数据类型
date: 2019-12-15
tags:
 - js
categories: 
 - js
---

## 三种声明方式, function命令，函数表达式， Function构造函数

``` js
// function 命令
function print(s) {
  console.log(s)
}

// 函数表达式
let f = function () {}

```

## 函数的属性和方法，name. length, toString()

``` js

// name 返回函数的名称
let f = function () {}
f.name // 'f'

// length 返回函数参数的个数， 默认参数不在计算之中
let f = function (a, b) {}
f.length // 2

// 函数的toString方法返回一个字符串，内容是函数的源码
function f() {
  a();
  b();
  c();
}

f.toString()
// function f() {
//  a();
//  b();
//  c();
// }

```

## 函数参数传递方式

基本数据类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）函数体内修改参数值，不会影响到函数外部。

如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。

## arguments 属性对象

arguments 包含了函数运行时的所有参数，在非严格模式下可以修改arguments，但是在严格模式下修改无效
arguments 只是类数组，arguments.callee 属性，返回对应的原函数

``` js

// arguments属性对象可以通过slice转为真正数组
let arrs = Object.prototype.slice.call(arguments)

```

## 立即调用函数IIFE (Immediately-Invoked Function Expression)，有两种形式，都不能删除;

``` js
// 情况1
(function () {}());

// 情况2
(function () {})();

```