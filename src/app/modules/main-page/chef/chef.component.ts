import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/card-data';
import { ChefDocument } from 'src/app/interfaces/chef';
import { RestaurantDocument } from 'src/app/interfaces/restaurant';
import { ChefService } from 'src/app/services/chef.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss']
})
export class ChefComponent implements OnInit {
  chefID = '5f9e87037a7e425707a8f48b';
  firstName: string;
  fullName: string;
  desc: string;
  imageUrl: string;
  restaurants: CardData[];

  constructor(private chefService: ChefService, private restsService: RestaurantService) {}

  ngOnInit(): void {
    console.log("ChefID: ", this.chefID);

    this.chefService.getByID(this.chefID).subscribe((res: ChefDocument) => {
      this.fullName = res.name;
      this.desc = res.about;
      this.imageUrl = "/assets/images/chefs/"+res.imageUrl;
    });

    this.restsService.getByChef(this.chefID).subscribe((res: RestaurantDocument[]) => {
      this.restaurants = res.map((rest) => {
        delete rest.popularity;
        delete rest.chef;
        return rest;
      });
    })
}

}
