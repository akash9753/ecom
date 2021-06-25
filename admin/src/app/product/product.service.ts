import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:4000/product'


  constructor(
    private http: HttpClient
  ) { }

  uploadImage(_id: any, selectedImage:any){
    const token = sessionStorage['token']
    const httpOptions = {
      headers: new HttpHeaders({
        token : token
      })
    }
    const body = new FormData();
    body.append('image',selectedImage)
      
    
    //console.log(body)
    return this.http.post(this.url +'/upload-image/' + _id, body, httpOptions)
  }

  createProduct(title:string, description:string, price:string, category:string){
    const token = sessionStorage['token']
    const httpOptions = {
      headers: new HttpHeaders({
        token : token
      })
    }
    const body ={
      title, description,price,category
    }
    console.log(body)
    return this.http.post(this.url,body,httpOptions)
  }
  

  getProducts(){
    const token = sessionStorage['token']
    const httpOptions = {
      headers: new HttpHeaders({
        token : token
      })
    }
    return this.http.get(this.url,httpOptions)
  }
  deleteProduct(id:string){
    const token = sessionStorage['token']
    const httpOptions = {
      headers: new HttpHeaders({
        token : token
      })
    }
    return this.http.delete(this.url + "/" +id ,httpOptions)
  }
}



