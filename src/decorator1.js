// 装饰器detoretor语法练习：

const { call } = require("file-loader")
const { func } = require("prop-types")


// 一、装饰器函数没有return

// 定义一个装饰器demo
// function demo(target){
//     target.a = 666
//     target.b = 88
// }

// 传统写法：
// class Test{}
// demo(Test)
// console.log(Test.b) //88

// 装饰器语法：
// @demo
// class Test{}
// console.log(Test.a) //666

// 装饰器语法,编译之后，是这样子的：
// class Test{}
// demo(Test)
// console.log(Test.a) //666


// -------------------------------------------------

// 二、装饰器函数有返回值---隐藏一个赋值的动作，装饰器返回的值给被装饰的类

// 定义一个装饰器函数demo
// function demo(target){
//     target.a = 666
//     target.b = 88
//     // return 900
//     return target
// }

// 传统写法：
// class Test{}
// console.log(Test.a)//undefined
// demo(Test)
// console.log(Test.a)//666

// 装饰器语法
// @demo
// class Test{}
// console.log(Test)//900
// console.log(Test.a)//undefined //666

// 装饰器语法，经过编译，是下方的样子
// class Test {}
// Test = demo(Test)
// console.log(Test.a)//666

// ------------------------------------------------------

// 三、装饰器函数是另一个函数的返回值

// 是高阶函数 但不是柯里化
// function fun(){
//     return function demo(target){
//         target.a = 789
//         target.b = 456
//         return target
//     }
// }

// 传统写法：
// class Test{}
// console.log(Test.a)//undefined
// fun()(Test)
// console.log(Test.a)//789

// 装饰器写法：
// @fun()
// class Test{}
// console.log(Test.a) //789



// 装饰器语法经过编译后的样子
// class Test{}
// Test = fun()(Test)
// console.log(Test.a) ///789