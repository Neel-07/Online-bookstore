export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  category: string;
  rating: number;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}