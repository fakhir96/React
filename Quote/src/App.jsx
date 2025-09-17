import React from 'react';
import { useState } from 'react';

function App() {
  
  const [data, setData] = useState("");

  const quoteGen = ()=>{

    fetch("https://dummyjson.com/quotes/random")
    .then((res)=> res.json())
    .then((res)=>setData(res)) 

  }

  return ( 
    <>

  <div className='flex justify-center items-center h-screen flex-col bg-[#5b2333]'>
    <h1 className='absolute top-5 text-4xl text-[#F7F4F3]'>Quote Of The Day</h1>
    <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 
     rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-[#F7F4F3] w-full">
      <blockquote className="max-w-2xl mx-auto mb-4 text-[#5b2333] lg:mb-8">
        <p className="my-4 text-xl">{data.quote || "Health is Wealth"}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center ">
        <div className="space-y-0.5 font-medium text-black text-left rtl:text-right ms-3">
          <div>{data.author || "Socrates"}</div>
        </div>
      </figcaption>    
    </figure>
    
    <div className='flex justify-center items-center'>
    
      <button
        onClick={quoteGen}
        class="mt-4 relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full 
        transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg 
        active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full 
        before:bg-gradient-to-r before:from-purple-300 before:to-violet-800
        before:transition-all before:duration-500 
        before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
      >
        Generate Quote
      </button>

    </div>
  </div>

  </>
  );
}

export default App;
