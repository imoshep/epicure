import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { CardsModule } from './modules/cards/cards.module';
import { MainPageModule } from './modules/main-page/main-page.module';
import { LayoutModule } from './modules/layout/layout.module';
import { UtilsModule } from "./modules/utils/utils.module";

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    CardsModule,
    MainPageModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
