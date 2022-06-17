import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseURL = "http://localhost:8080/api/v1/foods";

  constructor(private httpClient: HttpClient) { }

  getFoodsList(): Observable<Foods[]>{
    return this.httpClient.get<Foods[]>(`${this.baseURL}`);
  }

  createFood(food: Foods): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, food);
  }

  getFoodById(id: number): Observable<Foods>{
    return this.httpClient.get<Foods>(`${this.baseURL}/${id}`).pipe(
      map((response: any) => response)
    );
  }

  updateFood(id: number, food: Foods): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, food);
  }

  deleteFood(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getFoodsListByFilter(searchItem: string): Observable<Foods[]>{
    console.log(`search item in service =${searchItem}`)
    let params = new HttpParams();

    params = params.append('foodItem',searchItem);
    return this.httpClient.get<Foods[]>(`http://localhost:8080/api/v1/searchFoodName`,{params : params});
  }
  
}
