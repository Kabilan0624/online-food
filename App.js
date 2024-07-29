import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodItem from './components/FoodItem';
import './styles/App.css';

const foodItems = [
  { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: 12.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Burger', description: 'Juicy beef burger', price: 8.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Pasta', description: 'Creamy Alfredo pasta', price: 10.99, image: 'https://via.placeholder.com/150' },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <h1>Menu</h1>
        <div className="food-items">
          {foodItems.map(item => (
            <FoodItem key={item.id} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
