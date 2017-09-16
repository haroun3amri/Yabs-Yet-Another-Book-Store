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
var auth_service_1 = require('../../BLL/auth.service');
var router_1 = require('@angular/router');
var book_service_1 = require('../../BLL/book.service');
var History_Service_1 = require('../../BLL/History.Service');
var LoginComponent = (function () {
    function LoginComponent(authService, bookService, historyService, router) {
        this.authService = authService;
        this.bookService = bookService;
        this.historyService = historyService;
        this.router = router;
        this.histories = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    //****************************************************************
    LoginComponent.prototype.addHist = function () {
        var _this = this;
        event.preventDefault();
        //console.log(this.title);
        this.history = {
            HistId: null,
            booktitle: '',
            bookAuthor: '',
            bookPrice: null,
            Operation: 'Login',
            Date: new Date(),
            State: 'Logged In',
            UserLogin: this.authService.getuser()
        };
        this.historyService.addHistory(this.history)
            .subscribe(function (histories) {
            _this.histories.push(histories);
        });
    };
    //*********************************************************
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.bookService.storeUserData(data.token, data.user);
                alert('You are now logged in'); //, {cssClass: 'alert-success', timeout: 5000});
                _this.router.navigate(['/welcome']);
                _this.addHist();
            }
            else {
                alert(data.msg); //, {cssClass: 'alert-danger', timeout: 5000});
                _this.router.navigate(['/Login']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            moduleId: module.id,
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, book_service_1.BookService, History_Service_1.HistoryService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map