import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './gruades/auth.guard';
import { GuestGuard } from './gruades/guest.guard';

const routes: Routes = [
  {path :'register' , component :RegisterComponent , canActivate :[GuestGuard]},
  {path :'login' , component :LoginComponent , canActivate :[GuestGuard]},
  {path :'home' , component :HomeComponent},
  {path : 'profile' , component : ProfileComponent , canActivate :[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
