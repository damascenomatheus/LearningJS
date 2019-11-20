class Bookshelf {
    constructor() {
        this.favoriteBooks = []
    }

    addFavoriteBook(bookName) {
        if (!(bookName.includes("Great"))) {
            this.favoriteBooks.push(bookName)
        }
    }


    printFavoriteBooks() {
        console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`)
        for(let books of this.favoriteBooks) {
         console.log(books)
        }
    }
}

var books = new Bookshelf()

books.addFavoriteBook("A Song of Ice and Fire")
books.addFavoriteBook("The Great Gatsby")
books.addFavoriteBook("Crime & Punishment")
books.addFavoriteBook("Great Expectations")
books.addFavoriteBook("You Don't Know JS")

books.printFavoriteBooks()