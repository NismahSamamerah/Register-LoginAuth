import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from '../interfaces/userInterface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedInUser: any;
  users : IUser[] =[];

  constructor(public authService :AuthService , public router :Router) {

  }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLogginUsers();
    console.log(this.loggedInUser.firstName);

  }

  getInfo(){
    console.log(this.authService.getLogginUsers());
  }

}
