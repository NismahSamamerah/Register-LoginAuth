import { Injectable } from '@angular/core';
import { IUser } from '../components/interfaces/userInterface';

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
    try {
      localStorage.setItem('loginUser', JSON.stringify(newUser));
  } catch(e: any) {
      throw Error(e.message)
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
