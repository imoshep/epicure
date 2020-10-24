import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  links =[{name: 'Restaurants', route: '/restaurants'}, {name: 'Chefs', route: '/chefs'}];
  showMenu: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
