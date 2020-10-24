import { Component, OnInit } from '@angular/core';
import { RouteUrlsService } from 'src/app/services/route-urls.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private routeUrls: RouteUrlsService) { }
  contactUrl = this.routeUrls.contact;
  termsUrl = this.routeUrls.useTerms;
  privacyUrl = this.routeUrls.privacy;
  ngOnInit(): void {
  }

}
