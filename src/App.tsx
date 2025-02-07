import React, { useState } from "react";
import { Search, ShoppingCart, Book as BookIcon, Menu, X, ArrowRight, User, Plus, Star } from "lucide-react";
import { BookCard } from "./components/BookCard";
import { CategoryCard } from "./components/CategoryCard";
import { books, categories } from "./data/books";
import { motion } from "framer-motion";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLandingPageVisible, setIsLandingPageVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExploreClick = () => {
    setIsLandingPageVisible(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleUploadBook = () => {
    setShowUploadForm(true);
  };

  const handleSubmitBook = (e:any) => {
    e.preventDefault();
    // Handle book submission logic here
    setShowUploadForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Landing Page */}
      {isLandingPageVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-r from-blue-600 to-teal-600 flex flex-col items-center justify-center text-white z-50"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-extrabold mb-6 text-center"
          >
            Welcome to <span className="text-yellow-300">BookSwap</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-blue-100 mb-8 text-center"
          >
            Buy, sell, and review books with ease.
          </motion.p>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            onClick={handleExploreClick}
            className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center space-x-2"
          >
            <span>Explore Now</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      )}

      {/* Dashboard */}
      {!isLandingPageVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Navigation */}
          <nav className="sticky top-0 z-50 bg-white shadow-md py-3 px-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">BookSwap</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative w-80">
                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 text-blue-600 hover:text-blue-800">
                <ShoppingCart className="h-6 w-6" />
              </button>
              {isLoggedIn ? (
                <button onClick={handleLogout} className="p-2 text-blue-600 hover:text-blue-800">
                  <User className="h-6 w-6" />
                </button>
              ) : (
                <button onClick={handleLogin} className="p-2 text-blue-600 hover:text-blue-800">
                  <User className="h-6 w-6" />
                </button>
              )}
              <button onClick={handleUploadBook} className="p-2 text-blue-600 hover:text-blue-800">
                <Plus className="h-6 w-6" />
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-blue-600 hover:bg-blue-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24 text-center">
            <h1 className="text-5xl font-extrabold mb-6">
              Discover Your Next <span className="text-yellow-300">Favorite Book</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Explore thousands of books across various categories.
            </p>
            <button className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
              Browse Collection
            </button>
          </section>

          {/* Categories */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </section>

          {/* Books Grid */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Books</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>

          {/* Book Upload Form */}
          {showUploadForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">Upload a Book</h2>
                <form onSubmit={handleSubmitBook}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-lg p-2" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Author</label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-lg p-2" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea className="mt-1 block w-full border border-gray-300 rounded-lg p-2" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Cover Image</label>
                    <input type="file" className="mt-1 block w-full border border-gray-300 rounded-lg p-2" />
                  </div>
                  <div className="flex justify-end">
                    <button type="button" onClick={() => setShowUploadForm(false)} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-lg">
                      Cancel
                    </button>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About BookSwap</h3>
                <p className="text-gray-400">
                  Your go-to destination for buying, selling, and reviewing books online.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
                  <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
                  <li className="hover:text-yellow-400 cursor-pointer">Shipping Policy</li>
                  <li className="hover:text-yellow-400 cursor-pointer">Returns</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 flex flex-col md:flex-row md:justify-between md:px-8">
              <p>&copy; 2025 BookSwap. All rights reserved.</p>
              <p>Made with 💓 by Neel</p>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

export default App;