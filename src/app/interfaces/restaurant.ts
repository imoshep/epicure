import { ChefDocument } from "./chef";
import { DishDocument } from "./dish";



export interface Restaurant {
  title: string;
  chef: string | ChefDocument;
  imageUrl: string;
  popularity: number;
  signatureDish?: string | DishDocument;
}

interface RestaurantBaseDocument extends Restaurant, Document {}

export interface RestaurantDocument extends RestaurantBaseDocument {
    chef: string;
    dish: string;
}

export interface RestaurantPopulatedDocument extends RestaurantBaseDocument {
    chef: ChefDocument;
    dish: DishDocument;
}

