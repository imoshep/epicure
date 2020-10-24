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
  restaurantTable: object = {
    table: {
      display: 'flex',
      gap: '0.6rem',
    },
    card: {
      // width: '22.5rem',
      // height: '22.3rem'
    }
  };
  dishesTable: object = {
    table: {
      display: 'flex',
      gap: '0.6rem',
  },
  card: {
    // width: '22.5rem',
    height: '40.9rem'
  }}

  constructor(private mockData: MockCardData) { }

  ngOnInit(): void {
    this.restaurantsArr = [this.mockData.rest, this.mockData.rest, this.mockData.rest]
    this.dishesArr = [this.mockData.dishTopHeader, this.mockData.dishTopHeader, this.mockData.dishTopHeader]
  }

}
