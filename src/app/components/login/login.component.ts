import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from '../../interfaces/userInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService :AuthService , private router : Router){}
loginForm :FormGroup = new FormGroup({
  email : new FormControl('' , [Validators.required , Validators.email , ] ),
  password : new FormControl('' , [Validators.required])
})

users :IUser[] = [];
isSubmitted  = false;
  ngOnInit(): void {
}
  validateInfo(){
    this.users = this.authService.getUsers();
    for(let user of this.users ){
      if(user.email === this.loginForm.controls['email'].value && user.password === this.loginForm.controls['password'].value){
        console.log(this.loginForm.controls['email'].value);
        return true;
      }
    }
    return false ;
  }
  login(newUser: any){

if(this.validateInfo()){
  // this.loginForm.markAllAsTouched();
  this.authService.logIn(newUser);
  this.router.navigate(['profile']);
}else{
  this.isSubmitted = true;
}
}
}
