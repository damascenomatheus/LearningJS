var favoriteBook = []

function addFavoriteBook(bookName) {
    if (!(bookName.includes("Great"))) {
        favoriteBook.push(bookName)
    }
}

function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBook.length}`)
    for(let books of favoriteBook) {
        console.log(books)
    }
}

addFavoriteBook("A Song of Ice and Fire")
addFavoriteBook("The Great Gatsby")
addFavoriteBook("Crime & Punishment")
addFavoriteBook("Great Expectations")
addFavoriteBook("You Don't Know JS")

printFavoriteBooks()