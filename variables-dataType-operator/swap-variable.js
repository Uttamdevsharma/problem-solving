function swapVariables (a, b){

    [a,b] = [b,a]

    return {a,b}

}

const result = swapVariables(5,10)

console.log("a =", result.a)
console.log("b =", result.b)