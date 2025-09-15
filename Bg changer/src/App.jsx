import React from 'react';
import { useState } from 'react';

function App() {

  const [color, setcolor] = useState("olive");

  return ( 
    <>
      <div className='w-full h-screen duration-200' 
      style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-8 px-2 inset-x-0'>
          <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 
          rounded-3xl'>
            <button onClick={()=>{setcolor("red")}} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "red"}}>Red</button>

            <button onClick={()=>{setcolor("green")}} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "green"}}>Green</button>
            
            <button onClick={()=>{setcolor("black")}} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "black"}}>Black</button>

            <button onClick={()=>{setcolor("pink")}} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "pink"}}>Pink</button>

            <button onClick={()=>{setcolor("cyan")}} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "cyan"}}>Cyan</button>
            
            <button onClick={()=>{setcolor("purple")}} className='outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor: "purple"}}>Purple</button>
          </div>
        </div>
      </div>

    </>
   );
}

export default App;
