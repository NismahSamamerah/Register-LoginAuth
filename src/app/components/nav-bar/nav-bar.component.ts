import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentLang?: string;



  constructor(public authService : AuthService , public router : Router , public translate: TranslateService,) {
    this.currentLang = localStorage.getItem("currentLang") || "en";
        this.translate.use(this.currentLang)
  }
Name : string='nismah'
  ngOnInit(): void {
  }
  logout(){
    this.authService.logOut();
    this.router.navigate(['login']);
  }

  changeLang(lang: string) {
    localStorage.setItem("currentLang", lang)
    this.translate.use(lang)
    this.currentLang = lang;
}
}
