import React, { useState } from "react";
import { Search, ShoppingCart, Book as BookIcon, Menu } from "lucide-react";
import { BookCard } from "./components/BookCard";
import { CategoryCard } from "./components/CategoryCard";
import { books, categories } from "./data/books";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <BookIcon className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">BookHaven</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="p-2 text-indigo-600 hover:text-indigo-800">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-indigo-600 hover:bg-indigo-100"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md border-t border-gray-200 p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-indigo-600">Home</li>
              <li className="hover:text-indigo-600">Categories</li>
              <li className="hover:text-indigo-600">Cart</li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('https://source.unsplash.com/featured/?books,library')` }}
        ></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Discover Your Next <span className="text-yellow-300">Favorite Book</span>
          </h1>
          <p className="text-lg text-indigo-100 mb-8">
            Explore thousands of books and categories tailored for every reader.
          </p>
          <button className="bg-yellow-400 text-indigo-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            Browse Collection
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Books Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Books</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About BookHaven</h3>
            <p className="text-gray-400">
              Your premier destination for discovering and purchasing quality
              books online.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
              <li className="hover:text-yellow-400 cursor-pointer">
                Shipping Policy
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">Returns</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2024 BookHaven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
