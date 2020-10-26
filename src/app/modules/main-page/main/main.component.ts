import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/card-data';
import { MockCardData } from 'src/app/services/mock-card-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  restaurantsArr: CardData[];
  dishesArr: CardData[];
  dishTypes: Array<{type: string, icon: string}>
  
  constructor(private mockData: MockCardData) { }

  ngOnInit(): void {
    this.restaurantsArr = [this.mockData.rest, this.mockData.rest, this.mockData.rest]
    this.dishesArr = [this.mockData.dishTopHeader, this.mockData.dishTopHeader, this.mockData.dishTopHeader]
    this.dishTypes= [
      {type: 'spicy', icon: '../../../../assets/icons/spicy-icon.svg'}, 
      {type: 'vegeterian', icon: '../../../../assets/icons/vegetarian.svg'}, 
      {type: 'vegan', icon: '../../../../assets/icons/vegan-icon.svg'}, 
    ]
  }

}
