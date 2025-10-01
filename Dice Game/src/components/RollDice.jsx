import React from 'react';

function RollDice({currentDice, roll}) {
    
    
    return ( 
        <>
        <div className='flex justify-center items-center flex-col mt-8'>
            <div onClick={roll}>
                <img src={`/images/dice_${currentDice}.png`} alt="DICE1" />
            </div>    
            <p className='font-semibold text-xl'>Click on Dice to Roll</p>
        </div>
        </>
     );
}

export default RollDice;