import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})
export class CreateFoodComponent implements OnInit {

  food: Foods= new Foods();
  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
  }

  saveFood(){
    this.foodService.createFood(this.food).subscribe( data =>{
      console.log(data);
      this.goToFoodList();
    },
    error => console.log(error));
  }

  goToFoodList(){
    this.router.navigate(['/dash']);
  }
  
  onSubmit(){
    console.log(this.food);
    this.saveFood();
  }

}
