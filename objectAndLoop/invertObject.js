function invertObject(obj) {
    const result = {};
  
    for (const [key, value] of Object.entries(obj)) {
      result[value] = key;
    }
  
    return result;
  }
  
  // Example
  console.log(invertObject({ a: 1, b: 2 }));
  // Output: { '1': 'a', '2': 'b' }