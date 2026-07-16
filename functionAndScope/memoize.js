function memoize(fn) {
    const cache = {};
  
    return function (arg) {
      // যদি cache এ আগে থেকেই result থাকে
      if (cache[arg] !== undefined) {
        console.log("From Cache");
        return cache[arg];
      }
  
      // না থাকলে calculate করে cache এ রেখে দাও
      console.log("Computed");
      const result = fn(arg);
      cache[arg] = result;
  
      return result;
    };
  }
  
  // Example
  const memoAdd = memoize(n => n + 10);
  
  console.log(memoAdd(5)); // Computed -> 15
  console.log(memoAdd(5)); // From Cache -> 15
  console.log(memoAdd(10)); // Computed -> 20
  console.log(memoAdd(10)); // From Cache -> 20