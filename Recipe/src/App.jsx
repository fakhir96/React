import { useState, useEffect } from 'react'
import Input from './components/Input'
import Card from './components/Card';
import { Outlet } from 'react-router';

function App() {

  const [inputValue, setInputValue] = useState("");

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!inputValue || inputValue.trim() === "") return;

    async function fetchData() {
      try {
        setLoading(true);

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
        const data = await res.json();
        setRecipes(data.meals || []); 
      } catch (error) {
        console.error("Error fetching recipes:", error);

      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [inputValue]);


  return (
    <>
      
      <div className='p-2 px-4 bg-cyan-200 min-h-screen'>

        <h1 className='text-center text-4xl mb-6 mt-5 text-black font-semibold'>
        <i className="fa-solid fa-utensils mr-3 "></i> Recipe Finder</h1>
        <p className='text-center text-gray-700 font-medium mt-1 mb-4'>Find delicious recipes from around the world</p>
        <Input setInputValue={setInputValue}/>
        

         {/* 👇 This is where Info.jsx will load when user clicks a recipe */}
      {/* <Outlet /> */}

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {loading ? (<p className="text-center text-blue-500">Finding recipes for "{inputValue}"</p>) // ✅ show while fetching
          : recipes.length === 0 && inputValue ? (
          <p className="text-center text-red-500">No recipes found!</p>
          ) : (
          recipes.map((meal) => <Card key={meal.idMeal} meal={meal} />)
          )}

        </div>

      </div>
    
    
      
    </>
  )
}

export default App
