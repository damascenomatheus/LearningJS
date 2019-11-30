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

var BOOK_API = "https://some.url/api"

function loadBooks() {
    fakeAjax(BOOK_API,Bookshelf)
}


function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

//TODO LOADBOOKS FUNCTION THAT CALL FAKE REQUEST WITH CALLBACK PARAMETERS

//VAR BOOKAPI

//FAKE REQUEST FUNCTION WITH URL AND CALLBACK PARAMETER