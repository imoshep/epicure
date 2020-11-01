import { Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';
import { InputReferenceDirective } from 'src/app/directives/input-reference.directive';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Input() iconOnRight: string;
  direction: 'row' | 'row-reverse';

  @ContentChild(InputReferenceDirective) input: InputReferenceDirective;

  @HostBinding("class.focus")
  get focus() {
    return this.input ? this.input.focus : false;
  }

  ngOnInit(): void {
    this.direction = Boolean(this.iconOnRight)? 'row' : 'row-reverse'

  }
}
