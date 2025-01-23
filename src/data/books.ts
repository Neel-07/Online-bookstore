import { Book, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fiction',
    description: 'Immerse yourself in imaginative stories'
  },
  {
    id: '2',
    name: 'Non-Fiction',
    description: 'Discover real-world knowledge'
  },
  {
    id: '3',
    name: 'Science Fiction',
    description: 'Explore futuristic worlds'
  },
  {
    id: '4',
    name: 'Mystery',
    description: 'Unravel intriguing puzzles'
  }
];

export const books: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 24.99,
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    category: 'Fiction',
    rating: 4.5,
    description: 'Between life and death there is a library, and within that library, the shelves go on forever.'
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 19.99,
    coverUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    category: 'Non-Fiction',
    rating: 4.8,
    description: 'Transform your life with tiny changes that yield remarkable results.'
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: 27.99,
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800',
    category: 'Science Fiction',
    rating: 4.7,
    description: 'A lone astronaut must save humanity from extinction.'
  },
  {
    id: '4',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 22.99,
    coverUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=800',
    category: 'Mystery',
    rating: 4.6,
    description: 'A womans act of violence against her husband, and her refusal to speak.'
  }
];