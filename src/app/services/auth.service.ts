import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
users : IUser[] =[];

getUsers(){
  return JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('users'))));
}

  register(newUser :IUser){
    if(localStorage.getItem('users')!=null){
      this.users = this.display();
    }
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.logIn(newUser);
  }
  logIn(newUser :IUser){
    for(let user of this.users){
      if(user.email === newUser.email && user.password === newUser.password){
        console.log(newUser.email);
        try {
          localStorage.setItem('loginUser', JSON.stringify(user));
      } catch(e: any) {
          throw Error(e.message)
      }
      }
    }

}
getLogginUsers(){
  return JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('loginUser'))));
}
  logOut(){
    localStorage.removeItem('loginUser');
  }
  isLogin(){
    const loginUser = Boolean(localStorage.getItem('loginUser'));
        // console.log(`login user => ${loginUser}`);
        return loginUser;
  }

display(){
  // const result = JSON.parse(JSON.stringify(localStorage.getItem('loginUser')))
  // console.log('firstName' + result[0]);

  // return result;
  return JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('users'))));
}
}
