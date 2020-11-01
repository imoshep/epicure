import { Component, Input, OnInit } from '@angular/core';
import { RouteUrlsService } from 'src/app/services/route-urls.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  links: Array<{name: string, route: string}>
  showMenu: boolean;
  constructor(private urlService: RouteUrlsService) { }

  ngOnInit(): void {
    this.links =[{name: 'Restaurants', route: this.urlService.restaurants}, {name: 'Chefs', route: this.urlService.chefs}];

  }

}
