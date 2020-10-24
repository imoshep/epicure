import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [SearchbarComponent],
})
export class UtilsModule { }
