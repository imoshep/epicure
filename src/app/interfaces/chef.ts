import { CardData } from './card-data';

export interface Chef {
    firstName: string;
    lastName: string;
    imageUrl: string;
    desc: string;
    restaurants: CardData[];
}
