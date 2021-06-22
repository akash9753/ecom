import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    email: string
    password: string


  constructor(
    private router : Router,
    private service : AuthService) { }

  ngOnInit(): void {
  }
  onSignin(){
      this.service
      .signin(this.email,this.password)
      .subscribe(response => {
        if(response['status']== 'success'){
          //cache the token
          sessionStorage['token'] = response['data']['token']
        this.router.navigate(['/home'])
        }else{
          alert(response['error'])
        }
      })
  }

}
