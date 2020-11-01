import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ChefService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl+'/chefs'
  }

  async getByID(chefID: string) {
    const chef = await this.http.get(`${this.apiUrl}/${chefID}`).toPromise();
  }

}
