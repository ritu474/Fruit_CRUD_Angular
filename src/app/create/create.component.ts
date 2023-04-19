import { Component, OnInit } from '@angular/core';
import { FruitsInterface } from '../fruits/fruits-interface';
import { FruitsService } from '../service/fruits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  fruitForm: FruitsInterface = {
    id: 0,
    name: '',
    qty: 0,
    price: 0,
  };
  constructor(private fruitService:FruitsService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.fruitService.create(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fruits"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  fruit_nav(){
    this.router.navigate(["/fruit_route"])
  }
}

