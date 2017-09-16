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
var core_1 = require('@angular/core');
var book_service_1 = require('../../BLL/book.service');
var cart_service_1 = require('../../BLL/cart.service');
var History_Service_1 = require('../../BLL/History.Service');
var WelcomeComponent = (function () {
    function WelcomeComponent(_bookService, cartService, historyService) {
        this._bookService = _bookService;
        this.cartService = cartService;
        this.historyService = historyService;
        this.pageTitle = 'Welcome';
        this.books = [];
        this.carts = [];
        this.histories = [];
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('In OnInit');
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
        this.cartService.getCarts()
            .subscribe(function (carts) { return _this.carts = carts; }, function (error) { return _this.errorMessage = error; });
        this.historyService.getHistory()
            .subscribe(function (histories) { return _this.histories = histories; }, function (error) { return _this.errorMessage = error; });
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './welcome.component.html'
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, cart_service_1.CartService, History_Service_1.HistoryService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map