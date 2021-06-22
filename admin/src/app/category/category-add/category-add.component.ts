import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
    title = ''
    description = ''
  constructor(
    private service : CategoryService,
    private activeModal : NgbActiveModal
  ) { }

  ngOnInit(): void {
  }
  
  onSave(){
      this.service
      .createCategory(this.title,this.description)
      .subscribe(response =>{
        if(response['status'] == 'success'){
             this.activeModal.dismiss('ok')
        }else{
          alert(response['error'])
        }
      })
  }

  onCancel(){
     this.activeModal.dismiss('ok')
  }
}
