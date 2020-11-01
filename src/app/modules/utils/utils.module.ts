import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputReferenceDirective } from 'src/app/directives/input-reference.directive';



@NgModule({
  declarations: [
    SearchbarComponent,
    InputReferenceDirective
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [SearchbarComponent, InputReferenceDirective],
})
export class UtilsModule { }
