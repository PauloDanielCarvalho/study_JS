const valor= 'Global'

function minhaFunçao(){
    console.log(valor)
}

function exec(){
    const valor= 'local'
    minhaFunçao()
}

exec()