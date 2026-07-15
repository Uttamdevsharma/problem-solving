function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
  
    for (const char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example
  console.log(countVowels("hello"));      // 2
  console.log(countVowels("javascript")); // 3


  //regular expression method
//   function countVowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
//   }
  
//   console.log(countVowels("hello"));      // 2
//   console.log(countVowels("javascript")); // 3