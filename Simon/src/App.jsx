import { useState } from 'react'
import Game from './components/Game';

function App() {
  const [score, setScore] = useState(0)
  const [start, setStart] = useState(false);
  const [restart, setRestart] = useState(false)

  const handleStart = () => {
    setScore(0)
    setStart(true)
  }

  const restartGame = () => {
    setScore(0)
    setRestart(prev => !prev)
  }

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center bg-sky-200'>
        <h2 className='mb-7 bg-amber-200 px-4 py-2 text-xl'>Your Score = {score}</h2>
        <Game start={start} restart={restart} setScore={setScore} />
        <div className='flex gap-5'>

          <button 
          className='mt-7 bg-black px-4 py-2 text-xl text-white'
          onClick={handleStart}
          >
            Start
          </button>

          <button 
          className='mt-7 bg-black px-4 py-2 text-xl text-white'
          onClick={restartGame}
          >
            Restart
          </button>
        </div>

      </div>
      
    </>
  )
}

export default App
