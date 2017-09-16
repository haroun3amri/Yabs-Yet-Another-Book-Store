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
var validate_service_1 = require('../../BLL/validate.service');
var auth_service_1 = require('../../BLL/auth.service');
var router_1 = require('@angular/router');
var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            LastName: this.LastName,
            BirthDate: this.BirthDate,
            Country: this.Country,
            City: this.City,
            Job: this.Job,
            GSM: this.GSM,
            ZipCode: this.ZipCode,
            HomePhone: this.HomePhone,
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            //  this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
            alert('Please fill in all fields');
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            // this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
            alert('Please use a valid email');
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                alert('You are now registered and can log in'); //, {cssClass: 'alert-success', timeout: 3000});
                _this.router.navigate(['/Login']);
            }
            else {
                alert('Something went wrong'); //, {cssClass: 'alert-danger', timeout: 3000});
                _this.router.navigate(['/Register']);
            }
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            moduleId: module.id,
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css']
        }), 
        __metadata('design:paramtypes', [validate_service_1.ValidateService, auth_service_1.AuthService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map