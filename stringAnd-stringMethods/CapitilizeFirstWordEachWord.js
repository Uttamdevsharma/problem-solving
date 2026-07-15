function capitalizeFirstWord(str){

    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")


}

console.log(capitalizeFirstWord("Hello World"))



//another way

// function titleCase(str) {
//   return str
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// // Example
// console.log(titleCase("hello world"));          // "Hello World"
// console.log(titleCase("javascript is awesome")); // "Javascript Is Awesome"