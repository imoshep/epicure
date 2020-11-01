import { Injectable } from '@angular/core';
import { CardData } from '../interfaces/card-data';

@Injectable({
  providedIn: 'root'
})
export class MockCardData {
  rests: CardData[] = [
    {
      imageUrl: 'claro@2x.jpg',
      title: "Claro",
      desc: "Ran Shmueli",
    },
    {
      imageUrl: 'mizlala-gret-mullet-fillet@2x.jpg',
      title: "Lumina",
      desc: "Meir Adoni",
    },
    {
      imageUrl: 'tiger-lili@2x.jpg',
      title: "Tiger Lilly",
      desc: "Yanir Green",
    },
  ]
  signatureDishes: CardData[] = [
  {
    topHeader: "Tiger Lilly",
    imageUrl: 'pad-thay@2x.jpg',
    title: "Pad Ki Mao",
    desc: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    dishType: ['/assets/icons/spicy-icon.svg'],
    dishPrice: 88
  },
  {
    topHeader: "Kab Kem",
    imageUrl: 'dumplings@2x.jpg',
    title: "Garbanzo Frito",
    desc: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
    dishType: [],
    dishPrice: 98
  },
  {
    topHeader: "Popina",
    imageUrl: 'smoked-pizza@2x.jpg',
    title: "Smoked Pizza",
    desc: `Basil dough, cashew "butter", demi-glace, bison & radish`,
    dishType: ['/assets/icons/vegan-icon.svg'],
    dishPrice: 65
  },
  ]
  chefDishes: CardData[] = [
  {
    imageUrl: 'onza@2x.jpg',
    title: "onza"
  },
  {
    imageUrl: 'kitchen-market@2x.jpg',
    title: "kitchen market"
  },
  {
    imageUrl: 'mashya@2x.jpg',
    title: "mashya"
  },
  ]
  constructor() { }
}
