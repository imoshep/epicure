import { Component, OnInit } from '@angular/core';
import { RouteUrlsService } from 'src/app/services/route-urls.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  links: Array<{name: string, route: string}>;
  constructor(private urlService: RouteUrlsService) { }

  ngOnInit(): void {
    this.links =[{name: 'Restaurants', route: this.urlService.restaurants}, {name: 'Chefs', route: this.urlService.chefs}];
  }

}
