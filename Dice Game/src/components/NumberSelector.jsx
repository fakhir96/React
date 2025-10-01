import React, { useState } from 'react';

function NumberSelector({error, setError ,selectedNum, setSelectedNum}) {

    const arr = [1,2,3,4,5,6]

    const NumberSelectorHandler = (val)=>{
        setSelectedNum(val);
        setError("")
    } 

    return ( 
    <>  
    <div className='flex flex-col items-end'>
        <p className='text-red-500'>{error}</p>
        <div className='flex gap-4'>
            {arr.map((val, i) =>{
                return (
                    <div 
                        onClick={() => NumberSelectorHandler(val)}
                        key={i} 
                        className={`h-[60px] w-[60px] border-2 grid place-items-center font-bold cursor-pointer
                        ${val === selectedNum ? 'bg-black text-white border-black' : 'bg-white text-black border-black'}`}
                        >
                        {val}
                    </div>  
            )})}   
        </div>
        <p className='font-semibold text-xl mt-1'>Select Number</p>
    </div>

    </>
     );
}

export default NumberSelector;