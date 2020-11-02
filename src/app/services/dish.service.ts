import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl+'/dishes'
  }

  getSignatureDishes(restsArr: string[] ) {
    try {
      return this.http.post(`${this.apiUrl}/signature`,{ restsArr});
    } catch(error) {
      return error.message;
    }
  }
}
