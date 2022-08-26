import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    TranslateModule

  ],
  exports: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent
  ]
})
export class ComponentModule { }
