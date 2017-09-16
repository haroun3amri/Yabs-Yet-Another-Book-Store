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
var book_service_1 = require('./BLL/book.service');
var cart_service_1 = require('./BLL/cart.service');
var auth_service_1 = require('./BLL/auth.service');
var History_Service_1 = require('./BLL/History.Service');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.pageTitle = 'book Store';
    }
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        alert('You are logged out'); //, {cssClass:'alert-success', timeout: 3000 });
        this.router.navigate(['/Login']);
        return false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            moduleId: module.id,
            templateUrl: 'app.component.html',
            providers: [book_service_1.BookService,
                cart_service_1.CartService,
                History_Service_1.HistoryService,
            ]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map