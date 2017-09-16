"use strict";
var Book = (function () {
    function Book(bookId, title, Author, Genre, price, Rating, imageUrl) {
        this.bookId = bookId;
        this.title = title;
        this.Author = Author;
        this.Genre = Genre;
        this.price = price;
        this.Rating = Rating;
        this.imageUrl = imageUrl;
    }
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map