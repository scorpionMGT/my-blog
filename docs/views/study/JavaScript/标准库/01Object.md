---
title: Object 标准库
date: 2019-12-15
tags:
 - js
categories:
 - js
---

## Object原生分为两类，一个是Object对象本身的属性和方法，另一个是Object的实例的属性和方法

### Object对象分身方法和属性

``` js

Object.a = 1

Object.fn = () => {}

```

### Object实例的方法和属性

``` js

Object.prototype.print = () => console.log('实例的方法和属性')

let obj = new Object()

obj.print()


```

### Object 本身也是一个函数, 可以当做工具方法使用，将任意值转为对象

``` js

let obj = Object()
// 等同于
let obj = Object(undefined)
let obj = Object(null)

obj instanceof Object // true

```

如果是基本数据类型，如果参数是原始类型的值，Object方法将其转为对应的包装对象的实例

``` js

let n = Object(1) // Number{1}

let s = Object('mao') //String{'mao'}

let b = Object(false) // Boolean{false}

```

如果Object方法的参数是一个对象，它总是返回该对象，即不用转换

``` js

let n = Object({}) // {}

let s = Object([]) //  []

let b = Object(fn) // fn

```

### Object 构造函数, 构造函数首要是用来生成实例对象

``` js

let obj = new Object()
// 等于
let obj = {}

```

## Object 的静态方法，静态方法就是Object的自身方法

### 遍历对象属性的方法 Object.keys() 和 Object.getOwnPropertyNames()

其中 Object.keys() 获取对象自身的可枚举的属性， 但是Object.getOwnPropertyNames() 获取对象自身属性还包括不可枚举的属性

``` js

let obj = ['mao', 'guo', 'tao']

Object.keys(obj) // [ '0', '1', '2' ]

Object.getOwnPropertyNames(obj) // [ '0', '1', '2', 'length' ]

// 可以通过Object.keys()方法获取对象属性的个数

```

## 对象属性模型的相关方法 