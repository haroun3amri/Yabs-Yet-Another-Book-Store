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
 * Created by Haroun3amri on 24/03/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/do');
require('rxjs/add/operator/map');
var BookService = (function () {
    function BookService(_http) {
        this._http = _http;
        this._bookUrl = 'http://localhost:3000/books';
    }
    //********************************************************************
    BookService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    //**********************************************************************
    BookService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    //*******************************************************************
    BookService.prototype.getBooks = function () {
        return this._http.get(this._bookUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    //**************************************************************
    BookService.prototype.addBook = function (newBook) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/book', JSON.stringify(newBook), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //***************************************************************
    BookService.prototype.addBookToCart = function (newBook) {
        if (this.user == null) {
            alert('You need to login first !!');
            return null;
        }
        else {
            var headers = new http_1.Headers();
            this.cart = {
                bookId: newBook.bookId,
                cartId: Math.random(),
                UserLogin: this.user.name,
                title: newBook.title,
                Author: newBook.Author,
                Genre: newBook.Genre,
                price: newBook.price,
                Rating: newBook.Rating,
                imageUrl: newBook.imageUrl,
                userId: this.user.authToken
            };
            //  alert('------------------------>this is' + this.user.name );
            headers.append('Content-Type', 'application/json');
            return this._http.post('/cart', JSON.stringify(this.cart), { headers: headers })
                .map(function (res) { return res.json(); });
        }
    };
    //***************************************************************
    BookService.prototype.deleteBook = function (id) {
        return this._http.delete('/book/' + id)
            .map(function (res) { return res.json(); });
    };
    //*********************************************
    BookService.prototype.getBook = function (id) {
        return this._http.get('/book/' + id)
            .map(function (res) { return res.json(); });
    };
    //**********************************
    BookService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map