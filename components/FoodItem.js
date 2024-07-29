import React from 'react';
import './FoodItem.css';

function FoodItem({ item }) {
  return (
    <div className="food-item">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default FoodItem;
