import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Input() iconOnRight: string;
  direction: 'row' | 'row-reverse';

  constructor() {
  }

  ngOnInit(): void {
    this.direction = Boolean(this.iconOnRight)? 'row' : 'row-reverse'
  }

}
