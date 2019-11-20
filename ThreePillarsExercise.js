var teste = "João"


function nameFunc(teste) {
    return function printName() {
        console.log(teste)
    }
}

var teste2 = nameFunc(teste)

teste2()

