function isPalindrome(str){

    const reverseResult = str.split('').reverse().join('')

    if(reverseResult === str){
        return true
    }else {
        return false
    }

}

console.log(isPalindrome('racecar'))