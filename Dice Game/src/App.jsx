import { useState } from 'react'
import Start from './components/Start'
import GamePlay from './components/GamePlay';


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=> !prev);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <Start toggle={toggleGamePlay} />}
    </>
  )
}

export default App
