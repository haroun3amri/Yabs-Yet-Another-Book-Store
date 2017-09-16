/**
 * Created by Haroun3amri on 27/04/2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { BookListComponent }  from './components/Books/book.list.component';
import { BookFilterPipe }  from './components/Books/book-filter.pipe';
import { StarComponent }  from './components/shared/star.component';
import { HttpModule } from '@angular/http';
import { WelcomeComponent } from './components/home/welcome.component';
import { BookDetailComponent } from './components/Books/book-detail.component';
import { RouterModule } from '@angular/router';
import { BookDetailGuard } from './components/Books/book-guard.service';
import { routing , appRoutingProviders } from './routing/app.routing';
import { DashboardComponent } from './components/Dashboard/Dashboard.component';
import {BookService} from "./BLL/book.service";
import {CartService} from "./BLL/Cart.service";
import { CartComponent } from './components/Cart/Cart.component';
import {HistoryService} from "./BLL/History.service";
import { HistoryComponent } from './components/History/History.component';
import{ LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ValidateService } from './BLL/validate.service';
import { AuthService } from './BLL/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { DashBookComponent } from './components/Dash_books/dash_book.component';
import{ DashCartComponent } from './components/Dash_carts/dash_cart.component'
import { ChartsModule } from 'ng2-charts';
import {BarChartDemoComponent} from "./components/Statitics/BarChartDemo.component";
import {CategoryFilterPipe} from "./components/Books/category-filter.pipe";

@NgModule({
    imports: [ BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ChartsModule,

        RouterModule.forRoot([
            {path : 'books' , component:BookListComponent},
            {path : 'book/:id' , /*canActivate:[BookDetailGuard],*/
                component:BookDetailComponent},
            {path : 'welcome',component:WelcomeComponent },
            {path : 'cart',component:CartComponent },
            {path : 'Dashboard',component:DashboardComponent },
            {path : 'History',component:HistoryComponent },
            {path : 'Login',component:LoginComponent },
            {path : 'Register',component:RegisterComponent },
            {path : 'Profile',component:ProfileComponent },
            {path : 'Dashbook',component:DashBookComponent },
            {path : 'Dashcart',component:DashCartComponent },
            {path : 'Stat',component:BarChartDemoComponent },
            {path : 'Dashstat',component:BarChartDemoComponent },


            {path: '' , redirectTo:'welcome',pathMatch: 'full'},
            {path: '**' , redirectTo:'welcome',pathMatch: 'full'}

        ])
    ],
    declarations: [
        AppComponent,
        BookListComponent,
        BookFilterPipe,
        CategoryFilterPipe,
        StarComponent,
        WelcomeComponent,
        BookDetailComponent,
        DashboardComponent,
        CartComponent,
        HistoryComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        DashBookComponent,
        DashCartComponent,
        BarChartDemoComponent,







    ],
    providers:[ BookDetailGuard ,
        appRoutingProviders,
        BookService,
        CartService,
        HistoryService,
        ValidateService,
        AuthService,
        AuthGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

