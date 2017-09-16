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
 * Created by Haroun3amri on 27/04/2017.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var book_list_component_1 = require('./components/Books/book.list.component');
var book_filter_pipe_1 = require('./components/Books/book-filter.pipe');
var star_component_1 = require('./components/shared/star.component');
var http_1 = require('@angular/http');
var welcome_component_1 = require('./components/home/welcome.component');
var book_detail_component_1 = require('./components/Books/book-detail.component');
var router_1 = require('@angular/router');
var book_guard_service_1 = require('./components/Books/book-guard.service');
var app_routing_1 = require('./routing/app.routing');
var Dashboard_component_1 = require('./components/Dashboard/Dashboard.component');
var book_service_1 = require("./BLL/book.service");
var Cart_service_1 = require("./BLL/Cart.service");
var Cart_component_1 = require('./components/Cart/Cart.component');
var History_service_1 = require("./BLL/History.service");
var History_component_1 = require('./components/History/History.component');
var login_component_1 = require('./components/login/login.component');
var register_component_1 = require('./components/register/register.component');
var profile_component_1 = require('./components/profile/profile.component');
var validate_service_1 = require('./BLL/validate.service');
var auth_service_1 = require('./BLL/auth.service');
var auth_guard_1 = require('./guards/auth.guard');
var dash_book_component_1 = require('./components/Dash_books/dash_book.component');
var dash_cart_component_1 = require('./components/Dash_carts/dash_cart.component');
var ng2_charts_1 = require('ng2-charts');
var BarChartDemo_component_1 = require("./components/Statitics/BarChartDemo.component");
var category_filter_pipe_1 = require("./components/Books/category-filter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                ng2_charts_1.ChartsModule,
                router_1.RouterModule.forRoot([
                    { path: 'books', component: book_list_component_1.BookListComponent },
                    { path: 'book/:id',
                        component: book_detail_component_1.BookDetailComponent },
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'cart', component: Cart_component_1.CartComponent },
                    { path: 'Dashboard', component: Dashboard_component_1.DashboardComponent },
                    { path: 'History', component: History_component_1.HistoryComponent },
                    { path: 'Login', component: login_component_1.LoginComponent },
                    { path: 'Register', component: register_component_1.RegisterComponent },
                    { path: 'Profile', component: profile_component_1.ProfileComponent },
                    { path: 'Dashbook', component: dash_book_component_1.DashBookComponent },
                    { path: 'Dashcart', component: dash_cart_component_1.DashCartComponent },
                    { path: 'Stat', component: BarChartDemo_component_1.BarChartDemoComponent },
                    { path: 'Dashstat', component: BarChartDemo_component_1.BarChartDemoComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                book_list_component_1.BookListComponent,
                book_filter_pipe_1.BookFilterPipe,
                category_filter_pipe_1.CategoryFilterPipe,
                star_component_1.StarComponent,
                welcome_component_1.WelcomeComponent,
                book_detail_component_1.BookDetailComponent,
                Dashboard_component_1.DashboardComponent,
                Cart_component_1.CartComponent,
                History_component_1.HistoryComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                profile_component_1.ProfileComponent,
                dash_book_component_1.DashBookComponent,
                dash_cart_component_1.DashCartComponent,
                BarChartDemo_component_1.BarChartDemoComponent,
            ],
            providers: [book_guard_service_1.BookDetailGuard,
                app_routing_1.appRoutingProviders,
                book_service_1.BookService,
                Cart_service_1.CartService,
                History_service_1.HistoryService,
                validate_service_1.ValidateService,
                auth_service_1.AuthService,
                auth_guard_1.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map