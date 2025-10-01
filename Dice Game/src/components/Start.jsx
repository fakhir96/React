import React from 'react';

function Start({toggle}) {
    return ( 
    <>
        <div className='max-w-6xl flex mx-0 my-auto h-screen items-center'>
            <div>
                <img src="/images/dices.png" alt="" />
            </div>        
            <div>
                <h1 className='font-bold text-5xl'>Dice Game</h1>
                <button 
                onClick={toggle} 
                className='mt-4 px-4 py-2.5 min-w-[220px] bg-[#000000] text-white rounded transition duration-150 ease-in-out hover:bg-[#383838]'>
                    Play Now!
                </button>
            </div>
        </div>    
    </>
     );
}

export default Start;