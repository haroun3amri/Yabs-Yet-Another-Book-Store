"use strict";
var Cart = (function () {
    function Cart(cartId, bookId, userId, UserLogin, title, Author, Genre, price, Rating, imageUrl) {
        this.cartId = cartId;
        this.bookId = bookId;
        this.userId = userId;
        this.UserLogin = UserLogin;
        this.title = title;
        this.Author = Author;
        this.Genre = Genre;
        this.price = price;
        this.Rating = Rating;
        this.imageUrl = imageUrl;
    }
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map