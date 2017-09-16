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
 * Created by Haroun3amri on 22/04/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/do');
require('rxjs/add/operator/map');
var HistoryService = (function () {
    function HistoryService(_http) {
        this._http = _http;
        this._historyUrl = '/Histories';
    }
    //*******************************************************************
    HistoryService.prototype.getHistory = function () {
        return this._http.get(this._historyUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    //*********************************************
    HistoryService.prototype.addHistory = function (newhistory) {
        var headers = new http_1.Headers();
        alert(newhistory.Date);
        headers.append('Content-Type', 'application/json');
        return this._http.post('/history', JSON.stringify(newhistory), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //**********************************
    HistoryService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    HistoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HistoryService);
    return HistoryService;
}());
exports.HistoryService = HistoryService;
//# sourceMappingURL=History.Service.js.map