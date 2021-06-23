
import { ProductService } from './../product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ProductAddComponent } from '../product-add/product-add.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = []
  constructor(
    private service : ProductService,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts(){
    this.service
    .getProducts()
    .subscribe(response =>{
      if(response['status'] == 'success'){
        this.products = response['data']
      }else{
        alert(response['error'])
      }
    })
  }

  onAdd(){
    const ref =  this.modalService.open(ProductAddComponent)
    ref.result.finally(()=>{
       this.loadProducts()
    })
    }

   

    onDelete(product){
      this.service
      .deleteProduct(product._id)
      .subscribe(response =>{
        if(response['status'] == 'success'){
          this.loadProducts()
        }else{
          alert(response['error'])
        }
     }) 
    }

}
