'use client';

import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-start md:justify-center gap-2 mb-8 md:flex-row">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
            ${selectedCategory === category
              ? 'bg-green-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-green-700'}
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;