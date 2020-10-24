import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteUrlsService } from 'src/app/services/route-urls.service';

@Component({
  selector: 'app-nav-menu-mobile',
  templateUrl: './nav-menu-mobile.component.html',
  styleUrls: ['./nav-menu-mobile.component.scss']
})
export class NavMenuMobileComponent implements OnInit {
  @Input() links: {name:string, route:string}[];
  @Output() closeMenu = new EventEmitter<any>();

  constructor(private routeUrls: RouteUrlsService) { }

  signinUrl = this.routeUrls.signIn;
  contactUrl = this.routeUrls.contact;
  termsUrl = this.routeUrls.useTerms;

  close() {
    this.closeMenu.emit()
  }

  ngOnInit(): void {
  }

}
