import React from 'react';

function Score({score}) {
    return ( 
    <>
        <div className='text-center max-w-[150px]'>
            <h1 className='font-semibold text-6xl'>{score}</h1>
            <p className='font-semibold text-2xl mt-2'>Total Score</p>
        </div>
    </>
    );
}

export default Score;