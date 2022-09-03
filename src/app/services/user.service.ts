import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient) { }

  public getUsersFromPlacholder(){
    let myData = this.http.get("https://jsonplaceholder.typicode.com/users");
    return myData;
  }
}
