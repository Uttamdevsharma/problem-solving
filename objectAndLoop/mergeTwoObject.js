function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  // Example
  console.log(
    mergeObjects({ a: 1 }, { b: 2 })
  );
  // Output: { a: 1, b: 2 }
  
  console.log(
    mergeObjects({ a: 1, b: 2 }, { b: 10, c: 3 })
  );
  // Output: { a: 1, b: 10, c: 3 }