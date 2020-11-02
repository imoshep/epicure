export interface Chef {
    fullName: string;
    imageUrl: string;
    desc: string;
  }

export interface ChefFromDB {
  name: string;
  about?: string;
  imageUrl?: string;
}


export interface ChefDocument extends  ChefFromDB, Document {}
