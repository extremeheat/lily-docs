In this example, we have two JavaScript functions, `helloWorld` and `sumOfArray`.

In real-world usage, helloWorld() would be deleted from the compiliation result, as no function is calling it. Even if we were to do module.export on this function, or use the ES6 export keyword, this function would be erased if no other code inside the program uses the function. This is because we specially handle import and exports of functions when building our Whole Program Graph, which gives us a complete picture of what functions are used in the program, and where.

Inside the `sumOfArray` function, we have a function that takes an array. Normally, the type of the array would be a YDynVal, but because we have call site data that shows this function is called with an array, we can unwrap the type to a YDynArray.

This function returns a copy of an array, with the values summed. The .reduce function is implemented with `YDynArray_reduceCopy`, which does the reduce operation on a new array copy. `YDynArray_reduceInPlace` would do this operation in-place, if our compiler could prove that the operation is done on an temporary array that would be disposed.
