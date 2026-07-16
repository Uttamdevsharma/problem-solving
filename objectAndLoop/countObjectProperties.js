function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  // Example
  console.log(countProperties({ a: 1, b: 2, c: 3 })); // 3
  console.log(countProperties({ name: "Uttam", age: 24 })); // 2