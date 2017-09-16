import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../BLL/validate.service'
import { AuthService } from '../../BLL/auth.service';
import {Router} from '@angular/router';



@Component({
    selector: 'app-register',
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
    name: String;
    username: String;
    email: String;
    password: String;
    LastName: String;
    BirthDate: String;
    Country: String;
    City: String;
    Job: String;
    GSM: String;
    ZipCode: String;
    HomePhone: String;


    constructor(
        private validateService: ValidateService,
        private authService:AuthService,
        private router: Router

    ) { }

    ngOnInit() {
    }

    onRegisterSubmit(){
        const user = {
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
        }

        // Required Fields
        if(!this.validateService.validateRegister(user)){
          //  this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
            alert('Please fill in all fields');
            return false;
        }

        // Validate Email
        if(!this.validateService.validateEmail(user.email)){
           // this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
            alert('Please use a valid email');

            return false;
        }

        // Register user
        this.authService.registerUser(user).subscribe(data => {
            if(data.success){
                alert('You are now registered and can log in');//, {cssClass: 'alert-success', timeout: 3000});
                this.router.navigate(['/Login']);
            } else {
                alert('Something went wrong');//, {cssClass: 'alert-danger', timeout: 3000});
                this.router.navigate(['/Register']);
            }
        });


    }

}
