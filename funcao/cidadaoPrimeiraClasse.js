//Funçao em js e First-class  Object
//higher-order function

// criar funçao literal
function fun(){

}

//Armazenar variavel
const fun2= function(){

}

//armazenar em um array
const array=[function(a,b){return a+b}, fun, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj= {}
obj.falar=function(){return 'opaaa'}
console.log(obj.falar())

//Passar funçao como param
function run(fun){
    fun()
}


//Um funçao pode retorna/conter um funçao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
const cincoMais=soma(2,3)
cincoMais(4)