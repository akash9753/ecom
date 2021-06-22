import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: string
   lastName: string
   email: string
    phone:string
    password: string


  constructor(
    private router : Router,
    private service : AuthService) { }

  ngOnInit(): void {
  }
  onSignup(){
      this.service
      .signup(this.firstName, this.lastName,this.email,this.phone,this.password)
      .subscribe(response => {
        if(response['status']== 'success'){
        this.router.navigate(['/auth/signin'])
        }else{
          alert(response['error'])
        }
      })
  }
}
