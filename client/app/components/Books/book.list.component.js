"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Haroun3amri on 23/03/2017.
 */
var core_1 = require('@angular/core');
var book_service_1 = require('../../BLL/book.service');
var cart_service_1 = require('../../BLL/cart.service');
var History_Service_1 = require('../../BLL/History.Service');
var auth_service_1 = require('../../BLL/auth.service');
var BookListComponent = (function () {
    function BookListComponent(_bookService, cartService, historyService, authService) {
        this._bookService = _bookService;
        this.cartService = cartService;
        this.historyService = historyService;
        this.authService = authService;
        this.pageTitle = 'Book List';
        this.histories = [];
        this.showImage = false;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.ElementNumber = 6;
        this.PageNumber = 1;
        this.tmp = 0;
        this.books = [];
        this.carts = [];
        this.ListMode = true;
        this.NumberMarge = 1;
        this.sortRarings = false;
        this.sortTitle = false;
        this.sortAuthor = false;
        this.sortGenre = false;
        this.sortPrice = false;
        this.boolPrev = false;
        this.boolNext = true;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('In OnInit');
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books.slice(0, _this.ElementNumber); }, function (error) { return _this.errorMessage = error; });
        this.cartService.getCarts()
            .subscribe(function (carts) { return _this.carts = carts; }, function (error) { return _this.errorMessage = error; });
        this.historyService.addHistory(this.history)
            .subscribe(function (histories) {
            _this.histories.push(histories);
        });
    };
    BookListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    BookListComponent.prototype.toggleView = function () {
        this.ListMode = !this.ListMode;
    };
    BookListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Book List: ' + message;
    };
    BookListComponent.prototype.ShowNext = function () {
        var _this = this;
        this.PageNumber = this.PageNumber + 1;
        this.tmp++;
        // alert('from : ' +this.ElementNumber*this.tmp +' to :'+this.PageNumber*5 );
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books.slice(_this.ElementNumber * _this.tmp, _this.PageNumber * _this.ElementNumber); }, function (error) { return _this.errorMessage = error; });
        this.NumberMarge = this.NumberMarge + 1;
    };
    BookListComponent.prototype.ShowPrev = function () {
        var _this = this;
        this.PageNumber = this.PageNumber + 1;
        this.tmp++;
        alert('from : ' + ((this.ElementNumber * this.tmp) - this.ElementNumber) + ' to :' + ((this.PageNumber * 5) - this.ElementNumber));
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books.slice(_this.ElementNumber * _this.tmp - _this.ElementNumber, _this.PageNumber * _this.ElementNumber - _this.ElementNumber); }, function (error) { return _this.errorMessage = error; });
        this.NumberMarge = this.NumberMarge + 1;
    };
    BookListComponent.prototype.ElementNumberLoader = function () {
        var _this = this;
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books.slice(0, _this.ElementNumber); }, function (error) { return _this.errorMessage = error; });
    };
    BookListComponent.prototype.SortRating = function () {
        if (!this.sortRarings) {
            this.books.sort(function (a, b) {
                return (a.Rating) - (b.Rating);
            });
            this.sortRarings = true;
        }
        else {
            this.books.sort(function (a, b) {
                return (b.Rating) - (a.Rating);
            });
            this.sortRarings = false;
        }
    };
    BookListComponent.prototype.SortPrice = function () {
        if (!this.sortPrice) {
            this.books.sort(function (a, b) {
                return (a.price) - (b.price);
            });
            this.sortPrice = true;
        }
        else {
            this.books.sort(function (a, b) {
                return (b.price) - (a.price);
            });
            this.sortPrice = false;
        }
    };
    BookListComponent.prototype.SortCategory = function () {
        if (!this.sortGenre) {
            this.books.sort(function (a, b) {
                if (a.Genre < b.Genre)
                    return -1;
                if (a.Genre > b.Genre)
                    return 1;
                return 0;
            });
            this.sortGenre = true;
        }
        else {
            this.books.sort(function (a, b) {
                if (a.Genre > b.Genre)
                    return -1;
                if (a.Genre < b.Genre)
                    return 1;
                return 0;
            });
            this.sortGenre = false;
        }
    };
    BookListComponent.prototype.SortTitle = function () {
        if (!this.sortTitle) {
            this.books.sort(function (a, b) {
                if (a.title < b.title)
                    return -1;
                if (a.title > b.title)
                    return 1;
                return 0;
            });
            this.sortTitle = true;
        }
        else {
            this.books.sort(function (a, b) {
                if (a.title > b.title)
                    return -1;
                if (a.title < b.title)
                    return 1;
                return 0;
            });
            this.sortTitle = false;
        }
    };
    BookListComponent.prototype.SortAuthor = function () {
        if (!this.sortAuthor) {
            this.books.sort(function (a, b) {
                if (a.Author < b.Author)
                    return -1;
                if (a.Author > b.Author)
                    return 1;
                return 0;
            });
            this.sortAuthor = true;
        }
        else {
            this.books.sort(function (a, b) {
                if (a.Author > b.Author)
                    return -1;
                if (a.Author < b.Author)
                    return 1;
                return 0;
            });
            this.sortAuthor = false;
        }
    };
    BookListComponent.prototype.addBookToCart = function (book) {
        var _this = this;
        event.preventDefault();
        //console.log(this.title);
        for (var _i = 0, _a = this.carts; _i < _a.length; _i++) {
            var Onecart = _a[_i];
            if (Onecart.title == book.title) {
                alert('You already have that book in your cart');
                return null;
            }
        }
        this._bookService.addBookToCart(book)
            .subscribe(function (books) {
            _this.books.push(books);
            _this.title = '';
            _this.Author = '';
            _this.Genre = '';
            _this.price = '';
            _this.Rating = '';
            _this.imageUrl = '';
        });
        this.history = {
            HistId: null,
            booktitle: book.title,
            bookAuthor: book.Author,
            bookPrice: book.price,
            Operation: 'Add to Cart',
            Date: new Date(),
            State: 'Added',
            UserLogin: this.authService.getuser()
        };
        this.historyService.addHistory(this.history)
            .subscribe(function (histories) {
            _this.histories.push(histories);
        });
    };
    BookListComponent = __decorate([
        core_1.Component({
            //selector: 'pm-books',
            moduleId: module.id,
            templateUrl: 'book.list.component.html',
            styleUrls: ['book.list.component.css']
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, cart_service_1.CartService, History_Service_1.HistoryService, auth_service_1.AuthService])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=book.list.component.js.map