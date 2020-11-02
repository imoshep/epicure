import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/card-data';
import { RestaurantDocument } from 'src/app/interfaces/restaurant';
import { DishService } from 'src/app/services/dish.service';
import { MockCardData } from 'src/app/services/mock-card-data';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  restaurantsArr: CardData[];
  dishesArr: CardData[];
  dishTypes: Array<{type: string, icon: string}>
  restaurantListForSignatureDishes = ["5f9e855a7a7e425707a8f483", "5f9e89207a7e425707a8f48f", "5f9e8a4f7a7e425707a8f490"];
  restLoading = true;
  dishLoading = true;
  constructor(private mockData: MockCardData,
    private restService: RestaurantService,
    private dishService: DishService) { }

  ngOnInit() {
    this.restService.getPopular('3').subscribe((res) => {
      this.restaurantsArr = res.map((restDoc) => {
        restDoc.desc = restDoc.chef.name;
        delete restDoc.chef;
        delete restDoc.popularity;
        delete restDoc.signatureDish;
      //   if(this.restLoading) {this.restLoading = false;
      //   console.log('restLoading', this.restLoading)
      // };
        return restDoc;
      })
    });

    this.dishService
      .getSignatureDishes(this.restaurantListForSignatureDishes)
        .subscribe((res) => {
          this.dishesArr = res.map((dish) => {
            dish.signatureDish.restaurant = dish.title;
            dish = dish.signatureDish;
            dish.dishprice = dish.price;
            dish.dishTypes = dish.properties;
            dish.topHeader = dish.restaurant;

            delete dish.price;
            delete dish.properties;
            delete dish.restaurant;
          //   if(this.dishLoading) {this.dishLoading = false;
          //   console.log('dishLoading', this.dishLoading)
          // };
              return dish
          });

        });
    this.dishTypes= [
      {type: 'spicy', icon: '/assets/icons/spicy-icon.svg'},
      {type: 'vegetarian', icon: '/assets/icons/vegetarian.svg'},
      {type: 'vegan', icon: '/assets/icons/vegan-icon.svg'},
    ]
  }

}
