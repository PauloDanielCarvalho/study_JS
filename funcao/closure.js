// Closure e o escopo criado quando uma funçao e declarada
// esse escopo e permitido a funçao acessa e maniopular a variavel externa da funçao

//Contexto lexico em açao 
const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFunçao = fora()
console.log(minhaFunçao())