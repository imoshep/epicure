import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/card-data';
import { Chef } from 'src/app/interfaces/chef';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss']
})
export class ChefComponent implements OnInit {
  chef: Chef;
  firstName: string;
  fullName: string;
  desc: string;
  imageUrl: string;
  restaurants: CardData[];

  constructor() {
    this.chef = {
      firstName: 'yossi',
      lastName: 'shitrit',
      desc: `Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and
      every dish.`,
      imageUrl: '/assets/images/chefs/yossi-shitrit@2x.jpg',
      restaurants: [
        {imageUrl: '/assets/images/restaurants/onza@2x.jpg',
         title: 'onza'
        },
        {imageUrl: '/assets/images/restaurants/kitchen-market@2x.jpg',
         title: 'kitchen market'
        },
        {imageUrl: '/assets/images/restaurants/mashya@2x.jpg',
         title: 'mashya'
        }
      ]
    }
   }

  ngOnInit(): void {
    this.firstName = this.chef.firstName;
    this.fullName = this.chef.firstName + ' ' + this.chef.lastName;
    this.desc = this.chef.desc;
    this.imageUrl = this.chef.imageUrl;
    this.restaurants = this.chef.restaurants;
  }

}
