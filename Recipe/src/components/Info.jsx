import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


function Info() {

    const { id } = useParams(); // get recipe ID from URL
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          const data = await res.json();
          setRecipe(data.meals[0]);
        }
        fetchRecipe();
    }, [id]);

    if (!recipe) return <p className="text-center">Loading recipe...</p>;

    return ( 
    <>

        <div className="p-4">
            <h1 className="text-3xl font-bold">{recipe.strMeal}</h1>
            <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="mt-4 rounded-lg"
            />
            <p className="mt-4">{recipe.strInstructions}</p>
        </div>
    
    </> 
    );
}

export default Info;