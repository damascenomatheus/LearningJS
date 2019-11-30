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
var mainBookshelf = new Bookshelf

function loadBooks(bookshelf) {
    fakeAjax(BOOK_API, (books)=>{
        for(let book of books){
            bookshelf.addFavoriteBook(book)
        }
        bookshelf.printFavoriteBooks() 
    })
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


loadBooks(mainBookshelf)