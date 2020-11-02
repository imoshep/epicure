import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/card-data';
import { Chef, ChefDocument, ChefPopulatedDocument } from 'src/app/interfaces/chef';
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

  constructor(private chefService: ChefService, private restsService: RestaurantService) {
  // this.chef
    //   firstName: 'yossi',
    //   lastName: 'shitrit',
    //   desc: `Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and
    //   every dish.`,
    //   imageUrl: '/assets/images/chefs/yossi-shitrit@2x.jpg',
    //   restaurants: [
    //     {imageUrl: '/assets/images/restaurants/onza@2x.jpg',
    //      title: 'onza'
    //     },
    //     {imageUrl: '/assets/images/restaurants/kitchen-market@2x.jpg',
    //      title: 'kitchen market'
    //     },
    //     {imageUrl: '/assets/images/restaurants/mashya@2x.jpg',
    //      title: 'mashya'
    //     }
    //   ]
    // }
   }

  // extractChefProperties(chef: ChefPopulatedDocument) {
  //   this.fullName = this.chef.fullName;
  //   this.desc = this.chef.desc;
  //   this.imageUrl = "assets/images/chefs/"+this.chef.imageUrl;
  //   this.restaurants = this.chef.restaurants;
  // }

  ngOnInit(): void {
    console.log("ChefID: ", this.chefID);

    this.chefService.getByID(this.chefID).subscribe((res: ChefPopulatedDocument) => {
      console.log(res);

      this.fullName = res.name;
      this.desc = res.about;
      this.imageUrl = "/assets/images/chefs/"+res.imageUrl;

    });

    this.restsService.getByChef(this.chefID).subscribe((res: RestaurantDocument[]) => {
      this.restaurants = res;
      console.log(this.restaurants);

    })
}

}
