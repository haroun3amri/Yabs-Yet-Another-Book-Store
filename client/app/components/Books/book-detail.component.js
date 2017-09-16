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
 * Created by Haroun3amri on 27/03/2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var book_service_1 = require('../../BLL/book.service');
var BookDetailComponent = (function () {
    function BookDetailComponent(_route, _router, _bookService) {
        this._route = _route;
        this._router = _router;
        this._bookService = _bookService;
        this.pageTitle = 'Book Detail';
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getBook(id);
        });
    };
    BookDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BookDetailComponent.prototype.getBook = function (id) {
        var _this = this;
        this._bookService.getBook(id).subscribe(function (product) { return _this.book = product; }, function (error) { return _this.errorMessage = error; });
    };
    BookDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/books']);
    };
    BookDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Book Detail: ' + message;
    };
    BookDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './book-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, book_service_1.BookService])
    ], BookDetailComponent);
    return BookDetailComponent;
}());
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book-detail.component.js.map