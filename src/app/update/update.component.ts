import { Component, OnInit } from '@angular/core';
import { FruitsInterface } from '../fruits/fruits-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitsService } from '../service/fruits.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  fruitForm: FruitsInterface = {
    id: 0,
    name: '',
    qty: 0,
    price: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private fruitService: FruitsService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.fruitService.getById(id).subscribe((data) => {
      this.fruitForm = data;
    });
  }
 
  update() {
    this.fruitService.update(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fruit_route"]);
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
