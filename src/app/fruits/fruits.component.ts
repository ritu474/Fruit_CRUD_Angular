import { Component, OnInit } from '@angular/core';
import { FruitsInterface } from './fruits-interface';
import { FruitsService } from '../service/fruits.service';

declare var window: any;

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
}) 
export class FruitsComponent implements OnInit {
  allFruits: FruitsInterface [] = []; //array
  
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private fruitService: FruitsService) {}
 
  ngOnInit(){ //after the constructor , ngonInit will be performed 
    this.get();

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
      this.del();

  }
  
  get() {
    this.fruitService.getFruits().subscribe((data) => {
      this.allFruits = data;
    });
  }

  del() {
    this.fruitService.getFruits().subscribe((data) => {
      this.allFruits = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.fruitService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allFruits = this.allFruits.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
