function mergeArrays(...arrays) {
    return arrays.flat();
  }
  
  // Example
  console.log(
    mergeArrays([1, 2], [3, 4], [5])
  );
  
  // Output:
  // [1, 2, 3, 4, 5]