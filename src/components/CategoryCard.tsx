import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 text-white transition-transform hover:scale-105">
      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
      <p className="text-indigo-100">{category.description}</p>
    </div>
  );
}