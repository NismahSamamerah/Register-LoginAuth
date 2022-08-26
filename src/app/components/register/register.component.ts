import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { IUser } from '../interfaces/userInterface';

// export class CustomValidators {
//  export function mustMatch(controlPassword: string, matchingControlPassword: string) {
//     return (formGroup: FormGroup) => {
//       const control = formGroup.controls[controlPassword];
//       const matchingControl = formGroup.controls[matchingControlPassword];

//       if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
//         return;
//       }

//       // set error on matchingControl if validation fails
//       if (control.value !== matchingControl.value) {
//         matchingControl.setErrors({ mustMatch: true });
//       } else {
//         matchingControl.setErrors(null);
//       }
//       return null;
//     };
//   }
// }

// export class CustomValidators{

//   public static passwordsMatch(password: string, confirmedPassword: string) {

//    return (control: FormControl) : { [s: string]: boolean } =>{
//      //getting undefined values for both variables
//      console.log(password,confirmedPassword);
//       //if I change this condition to === it throws the error if the
// //  two fields are the same, so this part works
//       if (password !== confirmedPassword) {
//         return { 'passwordMismatch': true }
//       } return {'ssss': false};
//   }
//     }
//   }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() password='';
  @Input() confirmedPassword=''

registerForm :FormGroup = new FormGroup({
    firstName : new FormControl('',[
      Validators.required ,Validators.minLength(3),Validators.maxLength(30)
    ]
    ),
    lastName : new FormControl('',[
      Validators.required ,Validators.minLength(3),Validators.maxLength(30)
    ]),
    email : new FormControl('',[
      Validators.required, Validators.email
    ]),
    gender : new FormControl('' ,[
      Validators.required
    ]),
    age : new FormControl(null ,[
      Validators.required , Validators.min(13),Validators.max(80)
    ]),
    password : new FormControl(null ,[
      Validators.required , Validators.minLength(6),Validators.maxLength(15)
    ]),
    confirmPassword: new FormControl('', [Validators.required ,])
  }
  )
  constructor(private authService :AuthService , private router : Router){}
  ngOnInit(): void {
  }

users : IUser[] =[];

  register(newUser: any){
      if(this.MustMatch()){
        this.authService.register(newUser);
        this.router.navigate(['profile']);
    }
  }

  MustMatch() {
    if(this.registerForm.controls['password'].value === this.registerForm.controls['confirmPassword'].value){
      return true;
    }
    return false;
  }
}
