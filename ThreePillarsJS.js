class Bookshelf {
    constructor() {
        this.favoriteBooks = []
    } 

    addFavoriteBook(bookname) {
        if(!bookname.includes("Great")){
            this.favoriteBooks.push(bookname)
        }
    }

    printFavoriteBooks() {
        console.log(`Favorite Books: ${this.favoriteBooks.length}`)
        this.favoriteBooks.forEach(book => {
            console.log(book)
        });
    }

}



//TODO LOADBOOKS FUNCTION THAT CALL FAKE REQUEST WITH CALLBACK PARAMETERS

//VAR BOOKAPI

//FAKE REQUEST FUNCTION WITH URL AND CALLBACK PARAMETER