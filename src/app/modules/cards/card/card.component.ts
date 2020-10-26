import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/card-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardData: CardData;
  imageUrl: string;
  title: string;
  desc: string;
  dishType?: CardData['dishType'] ;
  dishPrice?: number;
  topHeader?: string;

  constructor() { }

  ngOnInit(): void {    
    this.imageUrl= `../../../../assets/images/dishes/${this.cardData.imageUrl}`;
    this.title= this.cardData.title;
    this.desc= this.cardData.desc;
    this.dishType= this.cardData.dishType;
    this.dishPrice= this.cardData.dishPrice;
    this.topHeader= this.cardData.topHeader;
  }

}
