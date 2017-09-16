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
 * Created by Haroun3amri on 16/04/2017.
 */
var core_1 = require('@angular/core');
var cart_service_1 = require('../../BLL/cart.service');
var CartComponent = (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
        this.pageTitle = 'My Cart';
        this.showImage = false;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.carts = [];
        this.cartService.getCarts()
            .subscribe(function (carts) {
            console.log(carts);
        });
    }
    //**************************************
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('In OnInit');
        this.cartService.getCarts()
            .subscribe(function (carts) { return _this.carts = carts; }, function (error) { return _this.errorMessage = error; });
    };
    //***************************************
    CartComponent.prototype.deleteCart = function (id) {
        var carts = this.carts;
        this.cartService.deleteCart(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < carts.length; i++) {
                    if (carts[i].cartId == id) {
                        carts.splice(i, 1);
                    }
                }
            }
        });
    };
    //**************************************
    CartComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    //************************************
    CartComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Book List: ' + message;
    };
    CartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'Cart.component.html',
            providers: [cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=Cart.component.js.map