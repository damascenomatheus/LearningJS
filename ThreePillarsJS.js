var person = {
    name: "Joao",
    printDoing(doing) {
        console.log(this.name + doing)
    }
}

person.printDoing(" está brincando lá fora")