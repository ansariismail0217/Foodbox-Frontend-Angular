import { Foods } from "./food";

export class CartItem {
    id!:number;
    price!:number;
    name!:string;
    star:number=0;
    imageUrl!:string;
    cookTime!:string;
    quantity!:number;

    constructor(food: Foods){
        this.id = food.id;
        this.price = food.price;
        this.name = food.name;
        this.star = food.star;
        this.imageUrl = food.imageUrl;
        this.cookTime = food.cookTime;
        
        this.quantity = 1;
    }
}
