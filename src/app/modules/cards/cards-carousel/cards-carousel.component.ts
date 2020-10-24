import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/card-data';

@Component({
  selector: 'app-cards-carousel',
  templateUrl: './cards-carousel.component.html',
  styleUrls: ['./cards-carousel.component.scss']
})
export class CardsCarouselComponent implements OnInit {
  @Input() cards: CardData[];
  flickityConfig = {
    groupCells: false,
    // autoPlay: 1500,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
