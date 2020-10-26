import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-dish-type-icons]',
  templateUrl: './dish-type-icons.component.html',
  styleUrls: ['./dish-type-icons.component.scss']
})
export class DishTypeIconsComponent implements OnInit {
  @Input() dishTypes: Array<{type: string, icon: string}>
  constructor() { }

  ngOnInit(): void {

  }

}
