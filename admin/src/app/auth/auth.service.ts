import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

url = 'http://localhost:4000/admin'

  constructor(
    private router : Router,
      private http : HttpClient ) { }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot){
      if(sessionStorage.getItem('token')){
        //user is already logged in
        return true;
      }
      //user is not yet logged in
      this.router.navigate(['/auth/signin' ])
      return false;
  }

      signup(firstName: string, lastName: string, email: string, phone:string, password: string){
         const body = {
           firstName,
           lastName,
           email,
           phone,
           password
         }
         return this.http.post(this.url + '/signup', body)
      }

      signin(email: string,  password: string){
        const body = {
          email,
          password
        }
        return this.http.post(this.url + '/signin', body)
      }

}
