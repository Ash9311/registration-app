import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string = '';
  constructor(private router: Router,public appService:AppService) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.password === 'password') { 
      this.appService.currentTab = 'registration';
    }
  }

} 
