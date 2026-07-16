function findDuplicateNames(arr) {
    const frequency = {};
    const duplicates = [];
  
    // Count occurrences
    for (const obj of arr) {
      const name = obj.name;
      frequency[name] = (frequency[name] || 0) + 1;
    }
  
    // Find duplicates
    for (const name in frequency) {
      if (frequency[name] > 1) {
        duplicates.push(name);
      }
    }
  
    return duplicates;
  }
  
  // Example
  const data = [
    { name: "Ali" },
    { name: "Sara" },
    { name: "Ali" }
  ];
  
  console.log(findDuplicateNames(data));
  // Output: ["Ali"]