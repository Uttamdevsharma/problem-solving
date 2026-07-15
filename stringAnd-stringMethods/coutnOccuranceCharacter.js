function countChar(str, char) {
    let count = 0;
  
    for (const ch of str) {
      if (ch === char) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example
  console.log(countChar("banana", "a")); // 3
  console.log(countChar("hello", "l"));  // 2