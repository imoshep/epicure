export interface CardData {
  imageUrl: string;
  title: string;
  desc?: string;
  dishType?: {
    spicy?: boolean;
    vegeterian?: boolean;
    vegan?: boolean;
  };
  dishPrice?: number;
  topHeader?: string;
}
