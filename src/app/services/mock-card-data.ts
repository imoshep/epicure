import { Injectable } from '@angular/core';
import { CardData } from '../interfaces/card-data';

@Injectable({
  providedIn: 'root'
})
export class MockCardData {
  rest: CardData = {
    imageUrl: 'TaMaLaKo@2x.jpg',
    title: "REST Tiger Lilly",
    desc: "Yanir Green",
  }
  dish: CardData = {
    imageUrl: 'TaMaLaKo@2x.jpg',
    title: "DISH Ta Ma-La-Ko",
    desc: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    dishType: {spicy: true},
    dishPrice: 98
  }
  dishTopHeader: CardData = {
    imageUrl: 'TaMaLaKo@2x.jpg',
    title: "DISH WITH TOP Ta Ma-La-Ko",
    desc: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    dishType: {spicy: true},
    dishPrice: 98,
    topHeader: "Tiger Lilly"
  }
  constructor() { }
}
