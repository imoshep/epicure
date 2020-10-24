import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefComponent } from './chef/chef.component';
import { HeroComponent } from './hero/hero.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MainComponent } from './main/main.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { AboutComponent } from './about/about.component';
import { CardsModule } from '../cards/cards.module';
import { UtilsModule } from '../utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HeroComponent,
    SearchboxComponent,
    JumbotronComponent,
    MainComponent,
    ChefComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    CardsModule,
    UtilsModule,
    FlexLayoutModule
  ],
  exports: [
    HeroComponent,
    JumbotronComponent,
    MainComponent,
    ChefComponent,
    AboutComponent,
  ],
})
export class MainPageModule { }
