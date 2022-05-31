// let arr : [number, string] = [2, '1'] 

// enum ColorList {
//     red = 3,
//     green,
//     blue
// }

// console.log('color', ColorList[5])


// void never unknow

// implements

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



