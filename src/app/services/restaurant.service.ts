import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl+'/restaurants'
   }

  async getPopular(numOfRests: string) {
    try {
      const popularRests = await this.http.get(`${this.apiUrl}/popular`,{params: {number: numOfRests}}).toPromise();
      return popularRests;
    } catch(error) {
      return error.message;
    }
  }

  async getByChef(chefID: string) {
    try {
      const rests = await this.http.get(`${this.apiUrl}/${chefID}`).toPromise();
      return rests;
    } catch(error) {
      return error.message;
    }
  }
}
