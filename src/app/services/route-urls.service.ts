import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteUrlsService {
  contact = '/contact';
  useTerms = '/use-terms';
  privacy = "/privacy-policy";
  signIn = '/sign-in';
  restaurants = '/restaurants';
  chefs = '/chefs';
  constructor() { }
}
