/**
 * Created by Haroun3amri on 22/04/2017.
 */
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../BLL/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile',
    moduleId: module.id,
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
    user:Object;

    constructor(private authService:AuthService, private router:Router) { }

    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
                this.user = profile.user;
            },
            err => {
                console.log(err);
                return false;
            });
    }

}

