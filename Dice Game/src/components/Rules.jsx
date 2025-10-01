import React from 'react';

function Rules() {
    return ( 
    <>
        <div className='max-w-[740px] bg-[#d1b4b4] my-0 mx-auto p-[20px] mt-[40px] rounded-xl   '>
            <h2 className='font-bold text-xl'>How to play dice game</h2>
            <div className="mt-4">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>
                after click on dice if selected number is equal to dice number you
                will get same point as dice{" "}
                </p>
                <p>if you get wrong guess then 2 point will be dedcuted </p>
            </div>
      </div>

    </>
    );
}

export default Rules;