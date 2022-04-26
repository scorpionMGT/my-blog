---
title: js常用设计模式
date: 2022-04-25
tags:
  - 设计模式
categories:
  - 设计模式
---

## 前端开发中常用的设计模式

在开发中，我们经常要进行模块的拆分，组合等工作，设计模式可以帮我们组织模块，提高代码质量，通过设计模式，编写高可用，可维护，更优雅的代码

_设计模式遵循的原则：_

1. 闭开原则： 对程序扩展开发，对程序的修改要关闭，我们的程序要给具体使用的时候扩展的接口，但是在具体使用的时候不能让其修改我们的源码， 也就是说我们不用修改源码就能扩展功能，像 vue，react 等都有扩展的接口。vue.use()

2. 单一职责原则： 一个模块只做一件事，模块越简单化越好

3. 依赖倒置原则： 上层的模块不要依赖下层的具体模块，应该依赖下层模块的抽象层

4. 里氏替换原则：它主要关注于继承，它的意义是任何使用父类的地方都可以用子类去替换，直白的说我们子类继承父类的时候，我们的子类必须完全保证继承父类的属性和方法，这样的话父类使用的地方，子类可以进行替换

### 1. 工厂模式

目的：方便我们大量创建对象

应用场景：当某一个对象需要经常创建的时候

实例：如 vue 中有大量的组建，因此 vue 中可以使用工厂模式创建组建，如有多个弹窗组建可以创建多个弹窗组建

### 2. 单例模式

目的：需要确保全局只有一个对象

应用场景：为了避免重复新建，避免多个对象存在相互干扰

实例： 如 vuex 中的 store， vue-router 只能有一个 router

### 3. 装饰者模式

目的： 不重写方法不修改原方法，在原方法上做扩展

应用场景：放一个方法需要扩展，但是又不好去修改方法

实例: vue 中的数组的监听

需求：vue 中利用 defineProperty 可以监听对象，那么数组怎么办

```js
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = [
  "push",
  "pop",
  "unshift",
  "shift",
  "splice",
  "resverse",
  "sort",
];

// 装饰者模式，拿到老方法，调用老方法，组成新方法
methodsToPatch.forEach((method) => {
  var original = arrayMethods[method];
  object.defineProperty(arrayMethods, method, {
    value(...args) {
      const result = original.apply(this, args);
      dep.notify();
      return result;
    },
  });
});
```

### 4. 适配器模式

适配器模式的作用是解决两个软件实体间的接口不兼容的问题。使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作。

### 5. 迭代器模式

迭代器模式是指一个方法顺序访问一个集合内的各个元素，不暴露该集合的内部的表示，使用者不需要知道集合的内部结构（封装）

```js
class Iterator {
  constructor(container) {
    this.list = container.list;
    this.index = 0;
  }
  next() {
    if (this.hasNext()) {
      return this.list[this.index++];
    }
    return null;
  }

  hasNext() {
    if (this.index >= this.list.length) {
      return false;
    }
    return true;
  }
}

class Container {
  constructor(list) {
    this.list = list;
  }
  getIterator() {
    return new Iterator(this);
  }
}

//测试
let arr = [1, 2, 3, 4, 5];
let container = new Container(arr);
let result = container.getIterator();

while (result.hasNext()) {
  console.log(result.next());
}
```

### 6. 策略模式

策略模式一般用来优化多个 if 的情况

```js

let obj = {
  a: () => {

  }
  b: () => {

  }
  c: () => {

  }
}

const exector = obj[flag]

```

### 7. 发布订阅模式或者叫观察者模式

```js
function observe {
  this.message={}
}

observe.prototype.regist=function(type,fn) {
  this.message[type]=fn
}

observe.prototype.fire=function(type){
  this.message[type]()
}

observe.prototype.remove=function(type){
  this.message[type]=null
}

```

### 8. 享元模式

目的：减少对象/代码数量

应用场景：当代码中创建了大量类似对象和类似的代码块

```js
// 有一百种不同文字的弹窗，每种弹窗行为相同，但是文字和样式不同，我们没必要新间一百个弹窗对象
    function Pop(){
    }
    // 保留同样的行为
    Pop.prototype.action=function(){}
    //显示
    Pop.prototype.show=function(){}
    // 提取出每个弹窗不同的部分作为一个外部数组
    var popArr=[
        {text:"window1",style:[400,400]}
        {text:"window2",style:[400,200]}
    ]

    var poper=new Pop()

    for(var i=0;i<100;i++){
        poper.show(popArr[i])
    }

```

只需一个类，不需要 new 一百次弹窗
这个类只保留所有弹窗共有的，每个弹窗不同的部分留作为一个公共享元

### 9. call, apply, bind 的原理

call, apply, bind 都是改变内部 this 的方法

call 参数是平铺的多个参数

apply 第二个参数是一个数组

bind 返回的是一个函数

#### call 的实现

```js
const call = function() {
  "use strict";
  // 手动实现apply 和 call
  Function.prototype.newCall = function() {
    let context = arguments[0];
    let args = Array.from(arguments).slice(1);
    let symbol = Symbol("context");
    let self = this;
    if (context === null || context === undefined) {
      self(...args);
    } else {
      context[symbol] = self;
      context[symbol](...args);
    }
  };

  let obj = {};

  function getUserName(a, b) {
    console.log("newCall", a, b);
  }
  console.log("===================================");
  getUserName.newCall(obj, "guo", "tao");
  getUserName.newCall(null, "guo", "tao");
};
```

#### apply 的实现

```js
const apply = function() {
  "use strict";
  let hasStrictMode = (function() {
    // 判断当前环境是否处于严格模式下
    return this == undefined;
  })();
  // 手动实现apply 和 call
  Function.prototype.newApply = function() {
    //使用symbol数据类型可以避免和外部的context的属性有冲突
    let context = arguments[0];
    let arg = arguments[1];
    let symbol = Symbol("temp");
    let self = this;
    if (context === null || context === undefined) {
      self(...arg);
    } else {
      context[symbol] = self;
      context[symbol](...arg);
    }
  };

  let symbol = Symbol("temp");
  let obj = {
    [symbol]: "test",
  };

  function getUserName(a, b) {
    console.log("newApply", a, b);
  }
  console.log("===================================");
  getUserName.newApply(obj, ["guo", "tao"]);
  getUserName.newApply(null, ["guo", "tao"]);
  getUserName.newApply(undefined, ["guo", "tao"]);
  // getUserName.apply(obj, ['guo', 'tao'])
  // getUserName.apply(null, ['guo', 'tao'])
  // getUserName.apply(undefined, ['guo', 'tao'])
};
```

#### bind 原理

```js
const bind = function() {
  Function.prototype.newBind = function() {
    let context = arguments[0];
    let args = Array.from(arguments).slice(1);
    let self = this;
    let symbol = Symbol("bind");
    if (context === null || context === undefined) {
      context = self;
      return function() {
        args = args.concat(Array.from(arguments));
        context(...args);
      };
    } else {
      context[symbol] = self;
      return function() {
        args = args.concat(Array.from(arguments));
        context[symbol](...args);
      };
    }
  };
  let obj = {};
  function getUserName(a, b) {
    console.log("newBind", a, b, arguments);
  }
  console.log("===================================");
  let getuserInfo = getUserName.newBind(obj, "mao", "tao");
  getuserInfo("guo");
  let getuserInfo1 = getUserName.newBind(null, "mao", "tao");
  getuserInfo1("111");
};
```

### 10. new 继承的实现

```js
// new命令 的实现原理
export function newFactory() {
  let obj = {};
  // 创建一个新的空对象
  let context = Array.prototype.shift.call(arguments);
  // 空对象的隐式原型指向构造函数原型
  obj.__proto__ = context.prototype;
  // 将空对象的指向构造函数的this, 即将构造函数的内部this, 改为你创建的obj
  let result = context.apply(obj, arguments);
  // 如果构造函数有返回一个对象，则直接返回这个对象
  if (typeof result === "object" && result !== null) return result;
  return obj;
}
export function PersonList(username, zone, address) {
  this.username = username;
  this.zone = zone;
  this.address = address;
  return { test: "test" };
}

// new.target 属性，在执行函数是如果使用的是new 命令调用该函数，则new.target 指向的是原函数
// 如果是创建直接使用函数的话，则new.target为undefined

// Object.create() // 现有的对象作为模板，生成新的实例对象

let a = {
  username: "travel_xcc",
};
let b = Object.create(a); // 实际上是 b.__proto__ === a
// 等于a的原型赋值给b的隐式原型
```
