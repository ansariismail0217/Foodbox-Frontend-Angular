import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  foods!: Foods[];
  keyword: string='';
  
  constructor(private fs: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.getFoods();
  }
  getFoods(){
    this.fs.getFoodsList().subscribe(data =>{
      this.foods = this.filterFoods(data);
    });
  }

  filterFoods(foods: Foods[]){
    return foods.filter((e) => {
      return e.name.toLowerCase().includes(this.keyword.toLowerCase());
    })
  }

  updateFood(id:number){
    this.router.navigate(['update-food', id]);
  }

  deleteFood(id:number){
    this.fs.deleteFood(id).subscribe(data=>{
      console.log(data);
      this.getFoods();
    })
  }

}
