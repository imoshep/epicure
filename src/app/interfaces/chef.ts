import { CardData } from './card-data';
import { RestaurantDocument } from './restaurant';

export interface Chef {
    fullName: string;
    imageUrl: string;
    desc: string;
    restaurants: CardData[];
  }

export interface ChefFromDB {
  name: string;
  about?: string;
  imageUrl?: string;
  restaurants?: string[] | RestaurantDocument[];
}


interface ChefBaseDocument extends  ChefFromDB, Document {}

export interface ChefDocument extends ChefBaseDocument {
  restaurants: string[];
}

export interface ChefPopulatedDocument extends ChefBaseDocument {
  restaurants:  RestaurantDocument[];
}
