import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

url = 'http://localhost:4000/admin'

  constructor(
      private http : HttpClient ) { }

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
