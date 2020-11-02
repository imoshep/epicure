import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { RestaurantDocument } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl+'/restaurants'
   }

  getPopular(numOfRests: string) {
    try {
      return this.http.get(`${this.apiUrl}/popular`,{params: {number: numOfRests}});
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
