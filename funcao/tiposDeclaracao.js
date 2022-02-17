console.log(soma(3,4))
//console.log(sub(3,4))

//function declaration  
function soma(a, b) {
    return a + b
}

//function expression
const sub = function (x, b) {
    return x - b
}
console.log(sub(3,4))
//named function expression 
const mult = function mult(x, b) {
    return x * b
}
console.log(mult(3,4))