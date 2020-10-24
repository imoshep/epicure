import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { CardsCarouselComponent } from './cards-carousel/cards-carousel.component';
import { CardsTableComponent } from './cards-table/cards-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardsDisplayComponent } from './cards-display/cards-display.component';
import { FlickityModule } from 'ngx-metafizzy-flickity';


@NgModule({
  declarations: [
    CardComponent,
    CardsCarouselComponent,
    CardsTableComponent,
    CardsDisplayComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlickityModule
  ],
  exports: [
    CardsDisplayComponent
  ]
})
export class CardsModule { }
