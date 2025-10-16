import { useState } from 'react'
import Game from './components/Game';

function App() {
  const [score, setScore] = useState(0)
  const [start, setStart] = useState(false);


  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h2 className='mb-7 bg-amber-200 px-4 py-2 text-xl'>Your Score = {score}</h2>
        <Game start={start}/>
        <button 
        className='mt-7 bg-green-400 px-4 py-2 text-xl'
        onClick={()=> setStart(true) }
        >
          Start
        </button>
      </div>
      
    </>
  )
}

export default App
