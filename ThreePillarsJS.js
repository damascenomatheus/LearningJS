class Bookshelf {
    constructor() {
        this.favoriteBooks = []
    } 

    addFavoriteBook(bookname) {
        this.favoriteBooks.push(bookname)
    }

    printFavoriteBooks() {
        this.favoriteBooks.forEach(book => {
            console.log(book)
        });
    }

}

//TODO LOADBOOKS FUNCTION THAT CALL FAKE REQUEST WITH CALLBACK PARAMETERS

//VAR BOOKAPI

//FAKE REQUEST FUNCTION WITH URL AND CALLBACK PARAMETER