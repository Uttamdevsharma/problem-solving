function twoSum(arr, target) {
    const map = {};
  
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
  
      // আগে complement দেখেছি কিনা চেক করি
      if (map[complement] !== undefined) {
        return [map[complement], i];
      }
  
      // বর্তমান number এর index save করি
      map[arr[i]] = i;
    }
  
    return [];
  }
  
  // Example
  console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]