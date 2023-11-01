function helloWorld () {
  console.log('Hello world!')
}

function sumOfArray (arr) {
  return arr.reduce((acc, cur) => (acc += cur, acc), 0)
}

sumOfArray([1, 2, 3])