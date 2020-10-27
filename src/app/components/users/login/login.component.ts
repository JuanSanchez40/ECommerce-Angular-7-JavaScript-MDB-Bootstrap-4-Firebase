import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }
  
  onLogin(): void{
    this.authService.loginEmailUser(this.email, this.password)
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.mesage));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
    

  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
    .then((res) => {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));
  }

  onLogut(){
    this.authService.logoutUser();
  }

  onLoginRedirect(): void {
    this.router.navigate(['']);
  }

  
}
