import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  links =[{name: 'Restaurants', route: '/restaurants'}, {name: 'Chefs', route: '/chefs'}];
  constructor() { }

  ngOnInit(): void {
  }

}
