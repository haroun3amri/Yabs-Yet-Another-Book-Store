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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/do');
require('rxjs/add/operator/map');
var CartService = (function () {
    function CartService(_http) {
        this._http = _http;
        this._cartUrl = '/carts';
    }
    //*******************************************************************
    CartService.prototype.getCarts = function () {
        return this._http.get(this._cartUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //***********************************************************************
    CartService.prototype.addCart = function (newCart) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/cart', JSON.stringify(newCart), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //*******************************************************************
    CartService.prototype.deleteCart = function (id) {
        //alert('http://localhost:3000/cart/'+id));
        return this._http.delete('/cart/' + id)
            .map(function (res) { return res.json(); });
    };
    //********************************************************************
    CartService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map