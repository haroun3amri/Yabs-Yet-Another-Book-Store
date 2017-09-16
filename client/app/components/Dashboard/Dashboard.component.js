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
 * Created by Haroun3amri on 08/04/2017.
 */
var core_1 = require('@angular/core');
var book_service_1 = require('../../BLL/book.service');
var router_1 = require("@angular/router");
var cart_service_1 = require('../../BLL/cart.service');
var DashboardComponent = (function () {
    function DashboardComponent(bookService, cartService, router) {
        this.bookService = bookService;
        this.cartService = cartService;
        this.router = router;
        this.books = [];
        this.carts = [];
        this.imageWidth = 50;
        this.imageHeigh = 10;
        this.imageMargin = 2;
        this.bookService.getBooks()
            .subscribe(function (books) {
            console.log(books);
        });
        this.cartService.getCarts()
            .subscribe(function (carts) {
            console.log(carts);
        });
    }
    /* ngAfterViewInit() {
         $(document).ready(function() {
             $('#example').dataTable();
         } );
     }*/
    DashboardComponent.prototype.ngOnInit = function () {
        // console.log('In OnInit');
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
        this.cartService.getCarts()
            .subscribe(function (carts) { return _this.carts = carts; }, function (error) { return _this.errorMessage = error; });
    };
    DashboardComponent.prototype.addBook = function (_event) {
        var _this = this;
        event.preventDefault();
        //console.log(this.title);
        var newBook = {
            title: this.title,
            Author: this.Author,
            Genre: this.Genre,
            price: this.price,
            Rating: this.Rating,
            imageUrl: this.imageUrl
        };
        this.bookService.addBook(newBook)
            .subscribe(function (books) {
            _this.books.push(books);
            _this.title = '';
            _this.Author = '';
            _this.Genre = '';
            _this.price = '';
            _this.Rating = '';
            _this.imageUrl = '';
        });
    };
    DashboardComponent.prototype.deleteBook = function (id) {
        var books = this.books;
        this.bookService.deleteBook(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < books.length; i++) {
                    if (books[i].bookId == id) {
                        books.splice(i, 1);
                    }
                }
            }
        });
        this.router.navigate(["/Dashboard"]);
    };
    DashboardComponent.prototype.addCart = function (_event) {
        var _this = this;
        event.preventDefault();
        //console.log(this.title);
        var newCart = {
            title: this.title,
            Author: this.Author,
            Genre: this.Genre,
            price: this.price,
            Rating: this.Rating,
            imageUrl: this.imageUrl
        };
        this.cartService.addCart(newCart)
            .subscribe(function (carts) {
            _this.books.push(carts);
            _this.title = '';
            _this.Author = '';
            _this.Genre = '';
            _this.price = '';
            _this.Rating = '';
            _this.imageUrl = '';
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'Dashboard.component.html',
            styleUrls: ['Dashboard.component.css'],
            providers: [book_service_1.BookService,
                cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, cart_service_1.CartService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=Dashboard.component.js.map