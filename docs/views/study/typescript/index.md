---
title: typescript
date: 2022-05-25
tags:
  - typescript
categories:
  - typescript
---

# typescript 学习笔记

### 几种数据类型

``` ts
// 元祖数据类型
let arr: [number, string] = [2, '1']

// 枚举数据类型
enum ColorList {
    red = 3,
    green,
    blue
}

console.log('color', ColorList.red) // color 3

// void never undefined

// void 类型是定义函数返回值的类型， 没有这个数据类型
// never 没有执行完这个函数体
// undefined 类型

// any 和 unknow

// any 类型 任意类型
// unknow 未知类型，使用数据时需要进行数据类型判断

// implements 
interface IProps {
    getName : () => void
}
// Props类 实现 IProps 接口
class Props implements IProps {

}


// 函数声明
const fn = (a: number, b: number): void => {
    let result = a + b
    console.log('a+b', result)
}

const fun: (a: number, b: number) => number = (a: number, b: number): number => {
    let result = a + b
    return result
}

// 接口定义函数
interface IProps {
    fn: (a: number, b: number) => void
}


// type 

type Point = {
  a: number
  b: number
} 

type Fn = (a: number, b: number) => void

```