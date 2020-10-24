import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/card-data';

@Component({
  selector: 'app-cards-table',
  templateUrl: './cards-table.component.html',
  styleUrls: ['./cards-table.component.scss']
})
export class CardsTableComponent implements OnInit {
  @Input() cards: CardData[];
  @Input() styling: {table: object, card: object};

  constructor() { }

  ngOnInit(): void {
    console.log('from ', this.cards[0].title);

    console.log(this.styling);

  }

}
