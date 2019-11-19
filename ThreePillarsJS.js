var teste = "João"

function holdName(teste) {
    return function () {
        console.log(teste);
    }
}

var teste2 = holdName(teste)

teste2()