import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/card-data';

@Component({
  selector: 'app-cards-table',
  templateUrl: './cards-table.component.html',
  styleUrls: ['./cards-table.component.scss']
})
export class CardsTableComponent implements OnInit {
  @Input() cards: CardData[];

  constructor() { }

  ngOnInit(): void {


  }

}
