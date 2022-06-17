import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  id!:number;
  food: Foods = new Foods();
  constructor(private foodService: FoodService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.foodService.getFoodById(this.id).subscribe(data => {
      this.food = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.foodService.updateFood(this.id, this.food).subscribe( data =>{
      this.goToFoodList();
    }
    , error => console.log(error));
  }

  goToFoodList(){
    this.router.navigate(['/foods']);
  }
  
}
