// async function async1() {
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
//   }
  
//   async function async2() {
//     return Promise.resolve().then(_ => {
//       console.log('async2 promise')
//     })
//   }
  
//   console.log('start')
//   setTimeout(function() {
//     console.log('setTimeout')
//   }, 0)
  
//   async1()
  
//   new Promise(function(resolve) {
//     console.log('promise1')
//     resolve()
//   }).then(function() {
//     console.log('promise2')
//   })
  

  // const fn = function () {
  //   this.name = 'test'
  //   return ''
  // }

  // fn.prototype

  // let newFac = function (fn) {
  //   let obj = {}
  //   fn.call(obj)
  //   obj.__proto__ = fn.prototype;
  //   return obj
  // }

  // let test = newFac(fn)

  // console.log('test', test)

  // Array.prototype.toString.call(obj).slice().toLowerCase()

  // Object.prototype.toString.call(obj).slice() = '[Object String]'


  // let instanceofFun = function (obj, prototypeFun) {
  //   let constructor = obj.__proto__.constructor 
  //   return constructor === prototypeFun
  // }

  // let test = instanceofFun('', String)

  // console.log('test', test)

//   class A {}

//   class B extends A {}


//   class C extends B {}

//   let c = new C();


//   let instanceofFun = function (obj, prototypeFun) {
//     let constructor = Object.getPrototypeOf(obj)

//     console.log('constructor', constructor)
//     // let constructor = obj.__proto__.constructor 
//     return constructor === prototypeFun
//   }

//   let test = instanceofFun(c, A)

//   console.log('test', test)
  
//   data () {
//     retrun {
//         a: {
//           b: 'test'
//           __ob__

//         }

//     }
//   }




//   vue2.6.10

//   ssr

//   spa


//   Object.defineProperty(obj, '', {
//     get 

//     dep.push()
//     set (val) {

//       dep.nidify()
//     }
//   })

//   watcher {

//      setTimeout(() => {
       
//      }, timeout);

//   }
 
//   template => render(
//     patch =>

//     .vue => sfc single file compiler => render

//   createElement => Vnode  newVnode oldVnode diff patch 同级比较 => DOM 真实
//   get ()

// es5
//   function Vue {
//     init ()
//   }



//   eventloop


//   js 单线程  => zhu

//   setTimeout/setInterval hong任务


//   async await promise process.nextTick