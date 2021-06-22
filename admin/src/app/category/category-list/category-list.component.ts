import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryAddComponent } from '../category-add/category-add.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories = []
  constructor(
    private service : CategoryService,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.loadCategories()
  }
  loadCategories(){
    this.service
    .getCategories()
    .subscribe(response =>{
      if(response['status'] == 'success'){
        this.categories = response['data']
      }else{
        alert(response['error'])
      }
    })
  }

  onAdd(){
    const ref =  this.modalService.open(CategoryAddComponent)
    ref.result.finally(()=>{
       this.loadCategories()
    })
    }
    onDelete(category){
      this.service
      .deleteCategory(category._id)
      .subscribe(response =>{
        if(response['status'] == 'success'){
          this.loadCategories()
        }else{
          alert(response['error'])
        }
      }) 
    }
  }


