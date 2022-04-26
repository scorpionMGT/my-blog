async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }
  
  async function async2() {
    return Promise.resolve().then(_ => {
      console.log('async2 promise')
    })
  }
  
  console.log('start')
  setTimeout(function() {
    console.log('setTimeout')
  }, 0)
  
  async1()
  
  new Promise(function(resolve) {
    console.log('promise1')
    resolve()
  }).then(function() {
    console.log('promise2')
  })
  