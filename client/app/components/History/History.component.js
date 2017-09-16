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
var History_Service_1 = require('../../BLL/History.Service');
var HistoryComponent = (function () {
    function HistoryComponent(historyService) {
        this.historyService = historyService;
        this.pageTitle = 'My History';
        this.showImage = false;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.histories = [];
        this.historyService.getHistory()
            .subscribe(function (histories) {
            console.log(histories);
        });
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.historyService.getHistory()
            .subscribe(function (histories) { return _this.histories = histories; }, function (error) { return _this.errorMessage = error; });
    };
    HistoryComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    HistoryComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Book List: ' + message;
    };
    HistoryComponent.prototype.deleteHist = function (id) {
        var histories = this.histories;
        this.historyService.deleteHist(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < histories.length; i++) {
                    if (histories[i].HistId == id) {
                        histories.splice(i, 1);
                    }
                }
            }
        });
    };
    HistoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'History.component.html',
            providers: [History_Service_1.HistoryService]
        }), 
        __metadata('design:paramtypes', [History_Service_1.HistoryService])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=History.component.js.map