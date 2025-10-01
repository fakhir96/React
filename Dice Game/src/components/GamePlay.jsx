import {React, useState} from 'react';
import Score from './Score';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import Rules from './Rules';

function GamePlay() {
    const [score, setScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1
    };

    const roll = ()=>{
        if(!selectedNum){
            setError("You have not selected any number")
            return
        }
        
        const randNum = getRandomNumber();
        setCurrentDice(randNum);


        if(selectedNum == randNum){
            setScore((prev) => prev + 1);
        }
        else{
            setScore((prev)=> prev - 1)
        }

        setSelectedNum(undefined)
    }

    const resetScore = ()=>{
        setScore(0);
    }

    return ( 
    <>
        <main>
            <div className='flex items-center justify-between mt-5'>
                <Score score={score} />
                <NumberSelector 
                error={error} 
                setError={setError}
                selectedNum={selectedNum} 
                setSelectedNum={setSelectedNum}/>
            </div>
            <RollDice currentDice={currentDice} roll={roll}/>
            <div className='flex flex-col justify-center items-center'>
                <button onClick={resetScore} className='mt-4 px-4 py-2.5 min-w-[220px] bg-[#000000] text-white 
                rounded transition duration-150 ease-in-out hover:bg-[#383838]'>Reset Score</button>
                <button
                onClick={() => setShowRules((prev) => !prev)} 
                className='mt-4 px-4 py-2.5 min-w-[220px] bg-[#3498db] text-white 
                rounded transition duration-150 ease-in-out hover:bg-[#2980b9]'>
                    {showRules? "Hide":"Show"} Rules</button>
            </div>

            {showRules && <Rules />}
        </main>
    </>
    );
}

export default GamePlay;