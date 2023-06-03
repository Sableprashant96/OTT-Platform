import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username='';
  password='';
  errormsg='';
  showPassword = false;
  constructor(){}


  login(){
   if (this.username.trim().length===0){
      this.errormsg='Username is invalid..!'} 
    else if (this.password.trim().length===0){
    this.errormsg='Password is invalid..!'}
    else {this.errormsg=''}
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  } 
  ngOnInit() {
    // Initialization code
  }
}
