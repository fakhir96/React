import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


function Info() {

    const { id } = useParams(); // get recipe ID from URL
    const [recipe, setRecipe] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState("");

    useEffect(() => {
        async function fetchRecipe() {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          const data = await res.json();
          setRecipe(data.meals[0]);
          setInstructions(data.meals[0].strInstructions)
          console.log(data.meals[0].strIngredient1)
          console.log(data.meals[0].strIngredient2)
        }
        fetchRecipe();
    }, [id]);

    if (!recipe) return <p className="text-center">Loading recipe...</p>;

    return ( 
    <>
    <div className='h-screen bg-cyan-200'>
        <h1 className='text-center text-3xl'>{recipe.strMeal}</h1>
        <div className='flex justify-center items-center mt-6'>
          <div className='bg-sky-400 w-[40%] h-[50%] rounded-lg'>
            <img className='w-full h-full object-cover rounded-lg' src={recipe.strMealThumb} alt="" />
          </div>
        </div>
        <div className='bg-amber-100 px-8 py-4 mt-6'>
          <h1 className='text-3xl font-semibold'>Instructions</h1>
          <p className='mt-5'>{instructions}</p>
        </div>
    </div>
    
        {/* <div className="p-4">
            <h1 className="text-3xl font-bold">{recipe.strMeal}</h1>
            <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="mt-4 rounded-lg"
            />
            <p className="mt-4">{recipe.strInstructions}</p>
        </div> */}
    
    </> 
    );
}

export default Info;