import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from '../../interfaces/userInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedInUser: any;
  users : IUser[] =[];
  userId? :number ;

  constructor(public authService :AuthService , public router :Router , public activateRoute : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLogginUsers();
    this.userId = Number( this.activateRoute.snapshot.paramMap.get('id'));
    console.log('iii'+this.userId);

  }

  getInfo(){
    console.log(this.authService.getLogginUsers());
  }

}
