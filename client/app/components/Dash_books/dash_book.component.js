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
 * Created by Haroun3amri on 27/04/2017.
 */
/**
 * Created by Haroun3amri on 23/03/2017.
 */
var core_1 = require('@angular/core');
var book_service_1 = require('../../BLL/book.service');
var DashBookComponent = (function () {
    function DashBookComponent(_bookService) {
        this._bookService = _bookService;
        this.pageTitle = 'Book List';
        this.showImage = false;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.books = [];
        this.carts = [];
        this._bookService.getBooks()
            .subscribe(function (books) {
            console.log(books);
        });
    }
    DashBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('In OnInit');
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
    };
    DashBookComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    /*  ngAfterViewInit() {
          $(document).ready(function() {
              $('#example').dataTable({
                  data:this.test;
              });
          } );
      }*/
    DashBookComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Book List: ' + message;
    };
    DashBookComponent.prototype.addBook = function (_event) {
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
        this._bookService.addBook(newBook)
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
    DashBookComponent.prototype.deleteBook = function (id) {
        var books = this.books;
        this._bookService.deleteBook(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < books.length; i++) {
                    if (books[i].bookId == id) {
                        books.splice(i, 1);
                    }
                }
            }
        });
    };
    DashBookComponent.prototype.addBookToCart = function (_event) {
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
        this._bookService.addBookToCart(newCart)
            .subscribe(function (carts) {
            _this.carts.push(carts);
            _this.title = '';
            _this.Author = '';
            _this.Genre = '';
            _this.price = '';
            _this.Rating = '';
            _this.imageUrl = '';
        });
    };
    DashBookComponent = __decorate([
        core_1.Component({
            //selector: 'pm-books',
            moduleId: module.id,
            templateUrl: 'dash_book.component.html',
            styleUrls: ['dash_book.component.css'],
            providers: [book_service_1.BookService]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], DashBookComponent);
    return DashBookComponent;
}());
exports.DashBookComponent = DashBookComponent;
//# sourceMappingURL=dash_book.component.js.map