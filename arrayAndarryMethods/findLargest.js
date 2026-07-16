function findLargest (arr) {

    let largest = arr[0]

    for(const num of arr){
        if(num > largest){
            largest = num
        }
    }

    return largest

}


console.log(findLargest([1,2,3,9,10,4,5]))

