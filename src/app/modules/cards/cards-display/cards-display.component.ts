import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/card-data';

@Component({
  selector: 'app-cards-display',
  templateUrl: './cards-display.component.html',
  styleUrls: ['./cards-display.component.scss']
})
export class CardsDisplayComponent implements OnInit {
  @Input() cards: CardData[];

  constructor() { }

  ngOnInit(): void {

  }

}
