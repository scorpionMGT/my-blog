---
title: javascript 内存机制
date: 2022-04-20
tags:
  - javascript 内存机制
categories:
  - javascript 内存机制
---

# javascript 内存机制

## js 内存的机制，内存空间：栈内存 stack、堆内存 heap

1. 所有原始变量都保存在栈内存中，删除一个栈的原始数据遵循，先进后出原则

![栈内存](https://s1.ax1x.com/2022/04/22/LgwJFP.png)

2. 引用类型会在堆内存开辟一个空间，并且会分配一个 16 进制的内存地址，在栈内存中声明的变量的值就是 16 进制的内存地址

![引用类型的空间分配](https://s1.ax1x.com/2022/04/22/LgDEon.png)

3. 函数也是引用类型，我们定义一个函数类型变量，会在堆内存中开辟一个空间，以字符串的形式存储到堆内存中。

![函数类型的存储方式](https://s1.ax1x.com/2022/04/22/LgyW6K.png)

```
function fn() {
  var i = 10
  var j = 10
  console.log(i + j)
}
// 我们直接打印fn会出现一段字符串
console.log(fn)
// 打印结果
/*
  f fn() {
     var i=10;
     var j=10;
     console.log(i+j)
 }
*/

// 加上括号才执行里面的代码
fn() // 20

```

## 垃圾回收

js 使用的垃圾回收机制来自动管理内存，垃圾回收是把双刃剑；垃圾回收是不可见的，js 中的垃圾回收，开发者无法控制，没有对外暴露垃圾回收的 API
浏览器的垃圾回收机制有两种： 一种是引用计数法，还有一种是标记清除法

1. 引用计数法：被跟踪的值的引用次数累积为 0 则释放该值的内存空间

引用计数法会出现一个 bug 就是循环引用，早期的浏览器会出现，现在浏览器不会出现这个 bug

2. 标记清除法，当变量进入环境时，这个变量标记为进入环境，当这个变量离开环境时则标记为离开环境，最后垃圾回收器清理内存，清理那些带标记的值，并释放其内存空间

### V8 内存管理机制

V8 限制内存的原因是：V8 引擎最初是为浏览器设计的，因此不大可能遇到较大内存的使用场景，防止因为垃圾回收所导致的线程暂停执行的时间过长

**V8 的回收策略分为两种： 一种是新生代，一种是老生代，针对新生代和老生代的回收使用不同的算法来提升回收效率**

## 提高代码的可靠性，编写可维护的代码

- _纯函数_：如果函数调用的参数相同，那么返回的结果永远相同，它不依赖程序外部的任何状态或者数据的变化

```js
// 纯函数
const calculatePrice=（price，discount）=> price * discount
let price = calculatePrice（200，0，8）
console.log(price)

// 不纯函数
const calculatePrice=（price，discount）=>{
      const dt= new Date().toISOString()
        console.log(`${dt}:${something}`)
        return something
 }
foo('hello')
```

- _函数的副作用_ 当调用函数时，除了返回函数值外，还会产生附加的影响（如修改了外部环境的变量，或者修改了参数）称之为函数的副作用

```js
//函数外a被改变，这就是函数的副作用
let a = 5;
let foo = () => (a = a * 10);
foo();
console.log(a); // 50

let arr = [1, 2, 3, 4, 5, 6];
arr.slice(1, 3); //纯函数，返回[2,3],原数组不改变
arr.splice(1, 3); // 非纯函数，返回[2,3,4],原数组被改变
arr.pop(); // 非纯函数，返回6，原数组改变

//通过依赖注入，对函数进行改进，所谓的依赖注入就是把不纯的部分作为参数传入，把不纯的代码提取出来；远离父函数；同时这么做不是为了消除副作用
//主要是为了控制不确定性
const foo = (d, log, something) => {
  const dt = d.toISOString();
  return log(`${dt}:${something}}`);
};
const something = "你好";
const d = new Date();
const log = console.log.bind(console);
foo(d, log, something);
```

_函数的副作用的可变性和不可变性_

- 可变性是指一个变量创建以后可以任意修改
- 不可变性是指一个变量一旦被创建，就永远不可能被改变，不可变性是函数变成的核心概念。

---

- _高阶函数_ 高阶函数是对其他函数进行操作的函数，可以将它们作为参数或返回它们，简单讲就是函数可以作为函数参数，也可以返回函数

```js
// 参数为函数的高阶函数
function foo(f) {
  // 判断是否为函数
  if (typeof f === 'function') {
    f()
  }
}
foo(function() {})

// 回值为函数的高阶函数
  function foo (f){
    rerutn function(){}
  }
  foo()
```

- _memozition 缓存函数_
  缓存函数含义是：将上次计算的结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据
  _原理：将参数和计算的结果存储在一个变量中，当下次调用使用相同参数时直接返回计算结果_

```js
// 缓存函数
let memoize = (func) => {
  let cache = {};
  return function(key) {
    if (!cache[key] || (typeof cache[key] === "number" && !!cache[key])) {
      cache[key] = func.apply(this, arguments);
    }
    return cache[key];
  };
};
```

- _curry 化函数： 柯里化函数是将 一个使用多个参数的函数 转换为 一系列使用一个参数函数的技术_

```js

 // 没有柯里化的函数
 function girl(name,age,single) {
   return `${name}${age}${single}`
 }
  girl('张三'，180，'单身')
  // 柯里化的函数
  function girl(name) {
    return function (age){
       return function (single){
         return `${name}${age}${single}`
      }
    }
  }
  girl('张三')(180)('单身')

```

## 节流和防抖

_区别：_

1. 防抖 debounce： 出发多次事件，最后一次执行事件函数
2. 节流 throttle: 隔一段时间执行一次事件处理函数

### 防抖 debounce

含义：当持续触发事件时，一定时间段内没有触发事件，时间函数才会执行一次，如果设定时间到来之前，又触发事件，又重新开始计算延时，“防抖”关键在于一个动作发生在一定时间之后才会特定执行的事件

案例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      #content {
        width: 200px;
        height: 200px;
        line-height: 200px;
        background-color: #ccc;
        margin: 0 auto;
        font-size: 60px;
        text-align: center;
        color: #000;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="content"></div>
    <script>
      /*
      连续onmousemove在最后一次触发changeNum函数，
      多余的处理函数的都会被clearTimeout掉
      */
      let num = 1;
      let oDiv = document.getElementById("content");

      let changeNum = function() {
        oDiv.innerHTML = num++;
      };

      let deBounce = function(fn, delay) {
        let timer = null;
        return function(...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            fn(...args);
          }, delay);
        };
      };
      oDiv.onmousemove = deBounce(changeNum, 500);
      // or
      let _deBounce = deBounce(changeNum, 500);
      oDiv.onmousemove = function() {
        _deBounce();
      };
    </script>
  </body>
</html>
```

```js
// debounce 核心代码

// 创建一个闭包，设置一个定时器的缓存timer
let debounce = (fn, delay) => {
  let timer = null; //
  return (args) => {
    if (timer) clearTimeout(timer); // 在这段时间内就清除事件
    timer = setTimeout(() => {
      fn(args);
    }, delay);
  };
};
```

### 节流函数 throttle

_含义： 当持续触发事件时，保证一段时间内只执行一次函数_

例子：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
  <button>点击</button>
  <script>
    /*
     * 连续点击只会1000执行一次btnClick函数
     */
    let obutton = document.getElementsByTagName("button")[0];
    //  如果用箭头函数，箭头函数没有arguments，也不能通过apply改变this指向
    function btnClick() {
      console.log("我响应了");
    }
    /*
            方法1: 定时器方式实现
            缺点：第一次触发事件不会立即执行fn，需要等delay间隔过后才会执行
         */
    let throttle = (fn, delay) => {
      let flag = false;
      return function(...args) {
        if (flag) return;
        flag = true;
        setTimeout(() => {
          fn(...args);
          flag = false;
        }, delay);
      };
    };
    /*
            方法2:时间戳方式实现
            缺点：最后一次触发回调与前一次的触发回调的时间差小于delay，则最后一次触发事件不会执行回调
          */
    // let throttle = (fn, delay) => {
    //   let _start = Date.now()
    //   return function(...args) {
    //     let _now = Date.now(),
    //       that = this
    //     if (_now - _start > delay) {
    //       fn.apply(that, args)
    //       start = Date.now()
    //     }
    // }
    // }

    // 方法3:时间戳与定时器结合
    // let throttle = (fn, delay) => {
    //   let _start = Date.now()
    //   return function(...args) {
    //     let _now = Date.now(),
    //       that = this,
    //       remainTime = delay - (_now - _start)
    //     if (remainTime <= 0) {
    //       fn.apply(that, args)
    //     } else {
    //       setTimeout(() => {
    //         fn.apply(that, args)
    //       }, remainTime)
    //     }
    //   }
    // }
    /*
         方法4:requestAnimationFrame实现
         优点：由系统决定回调函数的执行机制，60Hz的刷新频率，每次刷新都会执行一次回调函数，不
         会引起丢帧和卡顿
         缺点：1.有兼容性问题2.时间间隔有系统决定
        */

    // let throttle = (fn, delay) => {
    //   let flag
    //   return function(...args) {
    //     if (!flag) {
    //       requestAnimationFrame(function() {
    //         fn.apply(that, args)
    //         flag = false
    //       })
    //     }
    //     flag = true
    //   }
    // }

    obutton.onclick = throttle(btnClick, 1000);
  </script>
</html>
```

```js
// 节流throttle 函数的核心
let throttle = (fn, delay) => {
  let flag = false;
  return (...args) => {
    if (flag) return;
    flag = true;
    setTimeout(() => {
      fn(...args);
      flag = false;
    }, delay);
  };
};
```

## 深浅拷贝

1. 浅拷贝：只复制一层对象，当对象的属性是引用类型时，实质复制的是其引用，当引用值发生改
2. 深拷贝：深拷贝是另外申请了一块内存，内容和原来一样，更改原对象，拷贝对象不会发生改变
3. for-in 循环会枚举对象原型链上的可枚举属性，而 Object.keys 不会

### 浅拷贝实现

- 使用 for-in 遍历实现

```js
 let shallCopy => obj=>{
      let rst={}
      for(let key in obj){
        //只复制本身的属性（非继承过来的属性）枚举属性
        if(obj.hasOwnProperty(key)){
          rst[key]=obj[key]
        }
      }
      return rst
    }

```

- 使用 Object.assign(target,source)
- 扩展运算符...

### 深拷贝

- JSON.parse(JSON.stringify(obj))，使用 JSON 解析会有几个问题 1. 当属性值为 undefined 或函数，则序列化的结果会把函数或 undefined 丢失 2. 对象中存在循环引用的情况也无法正确实现深拷贝 3. Symbol,不能被 JSON 序列化 4. RegExp、Error 对象，JSON 序列化的结果将只得到空对象 5. 会丢失对象原型

- 递归实现拷贝

```js
let deepClone = (obj) => {
  let newObj = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          newObj[key] = deepClone(obj[key]);
        } else {
          // 如果不是对象直接拷贝
          newObj[key] = obj[key];
        }
      }
    }
  }
  return newObj;
};
```
