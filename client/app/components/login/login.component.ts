import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../BLL/auth.service'
import {Router} from '@angular/router';
import {BookService} from '../../BLL/book.service';
import {IHistory} from '../History/History';
import{ HistoryService } from '../../BLL/History.Service'

@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    username: String;
    password: String;
    history: IHistory;
    histories: IHistory[] = []

    constructor(
        private authService:AuthService,
        private bookService:BookService,
        private historyService:HistoryService,
        private router:Router
    ) {

    }

    ngOnInit() {
    }
//****************************************************************
    addHist(){
        event.preventDefault();
        //console.log(this.title);


        this.history = {
            HistId:null,
            booktitle: '',
            bookAuthor: '',
            bookPrice: null,
            Operation :'Login',
            Date :new Date(),
            State : 'Logged In',
            UserLogin:this.authService.getuser()
        }
        this.historyService.addHistory(this.history )
            .subscribe(histories => {
                this.histories.push(histories);

            });

    }
    //*********************************************************
    onLoginSubmit(){

        const user = {
            username: this.username,
            password: this.password
        }

        this.authService.authenticateUser(user).subscribe(data => {
            if(data.success){
                this.authService.storeUserData(data.token, data.user);
                this.bookService.storeUserData(data.token, data.user);
                alert('You are now logged in');//, {cssClass: 'alert-success', timeout: 5000});
                this.router.navigate(['/welcome']);
                this.addHist();
            } else {
                alert(data.msg);//, {cssClass: 'alert-danger', timeout: 5000});
                this.router.navigate(['/Login']);
            }
        });
    }

}
