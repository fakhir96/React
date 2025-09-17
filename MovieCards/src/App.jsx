import React, { useEffect } from 'react';
import { useState } from 'react'
// import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1")
    .then((res)=> res.json())
    .then((res)=> setData(res.results))
    
  }, [])


  return (
    <>
      <div className="cards flex flex-wrap justify-center items-center gap-8">

        {data.map((item, idx) =>{

          return <div key={idx}
          className="relative w-64 h-[400px] rounded-xl overflow-hidden shadow-lg bg-white group">

          {/* Image */}
          <img
            src={"https://image.tmdb.org/t/p/w1280" + item.poster_path}
            alt="Poster"
            className="w-full h-full object-cover"
          />
    
          {/* Title + Description (hidden until hover) */}
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center
           justify-center text-center text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm mt-2 px-3">
              {item.overview}
            </p>
          </div>
          </div>
        })}
        
      </div>

      
    </>
  )
}

export default App
