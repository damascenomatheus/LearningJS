function ask(question) {
    console.log(this.teacher,this.son, question)
}

function otherClass() {
    var myContext = {
        teacher: "Suzy",
        son: "Marie",
    }
    ask.call(myContext,"Why?")
}

otherClass()