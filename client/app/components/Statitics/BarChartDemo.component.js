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
var cart_service_1 = require('../../BLL/cart.service');
var book_service_1 = require('../../BLL/book.service');
var History_Service_1 = require('../../BLL/History.Service');
var BarChartDemoComponent = (function () {
    function BarChartDemoComponent(_bookService, cartService, historyService) {
        this._bookService = _bookService;
        this.cartService = cartService;
        this.historyService = historyService;
        this.books = [];
        this.carts = [];
        this.Titles = [];
        this.Prices = [];
        this.histories = [];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [650, 590, 800, 811, 560, 550, 400], label: 'Sales Per Year ' },
            { data: [420, 300, 340, 352, 291, 412, 450], label: 'Number Of Visitors ' }
        ];
        // a completer par binding avec la base de donnée
        this.lineChartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.pieChartType = 'pie';
        // Pie
        this.pieChartLabels = ['Drama', 'bibliography', 'Action', 'Comedy', 'Romance', 'Science'];
        this.pieChartData = [300, 200, 100, 50, 100, 150];
    }
    BarChartDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
        this.cartService.getCarts()
            .subscribe(function (carts) { return _this.carts = carts; }, function (error) { return _this.errorMessage = error; });
        this.historyService.addHistory(this.history)
            .subscribe(function (histories) {
            _this.histories.push(histories);
        });
    };
    // events
    BarChartDemoComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    BarChartDemoComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    BarChartDemoComponent = __decorate([
        core_1.Component({
            selector: 'bar-chart-demo',
            moduleId: module.id,
            templateUrl: 'BarChartDemo.component.html'
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, cart_service_1.CartService, History_Service_1.HistoryService])
    ], BarChartDemoComponent);
    return BarChartDemoComponent;
}());
exports.BarChartDemoComponent = BarChartDemoComponent;
//# sourceMappingURL=BarChartDemo.component.js.map