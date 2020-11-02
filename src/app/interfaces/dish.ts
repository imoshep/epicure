import { RestaurantDocument } from "./restaurant";

export interface Dish {
  title: string;
  desc: string;
  price: number;
  imageUtl?: string;
  restaurant: string | RestaurantDocument;
  properties: string[];
}

interface DishBaseDocument extends Dish, Document {}

export interface DishDocument extends DishBaseDocument {
  restaurant: string;
}

export interface DishPopulatedDocument extends DishBaseDocument {
  restaurant: RestaurantDocument;
}
