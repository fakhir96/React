import React from 'react';
import { Link, NavLink } from 'react-router';

function Card({ meal }) {
    return (
      <div className="border-transparent rounded-lg shadow bg-white overflow-hidden outline-none">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover"
        />
        <div className="p-3">
            <h2 className="font-bold text-lg">{meal.strMeal}</h2>
            <p className="text-sm mt-2 text-gray-500">{meal.strCategory}</p>

            <Link
                to={`/recipe/${meal.idMeal}`}
                className="text-blue-500 mt-2 inline-block"
            >
                View Details
            </Link>
        </div>
      </div>
    )
  }
  
  export default Card;
  