import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { CartItem } from '../shared/models/cart-item';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods!: Foods[];
  keyword: string='';
  // injecting food property to home component
  constructor(private fs: FoodService, private cartService: CartService, private route: ActivatedRoute) { }

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

  addToCart(theFood: Foods){
    console.log(`Adding to cart: ${theFood.name}, ${theFood.price}`);

    const theCartItem = new CartItem(theFood);
    this.cartService.addToCart(theCartItem);
  }

}
