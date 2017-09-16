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
 * Created by Haroun3amri on 30/04/2017.
 */
var core_1 = require('angular2/core');
var ImageContainerComponent = (function () {
    function ImageContainerComponent(element) {
        this.element = element;
    }
    ImageContainerComponent.prototype.changeListner = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');
        reader.onload = function (e) {
            var src = e.target.result;
            image.src = src;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ImageContainerComponent = __decorate([
        core_1.Component({
            selector: 'image-container',
            template: "\n        <input type=\"file\" (change)=\"changeListner($event)\" />\n        <img class=\"image\" />\n    ",
            directives: [ImageActionsComponent]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], ImageContainerComponent);
    return ImageContainerComponent;
    var _a;
}());
exports.ImageContainerComponent = ImageContainerComponent;
//# sourceMappingURL=upload.js.map