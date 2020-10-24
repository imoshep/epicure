import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavMenuMobileComponent } from "./nav-menu-mobile/nav-menu-mobile.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { UtilsModule } from '../utils/utils.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    NavMenuMobileComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class LayoutModule { }
