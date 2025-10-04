import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>

      <div className='flex justify-center w-full absolute top-[2%] text-zinc-600 py-6' >Documents.</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] 
        text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900 '>Docs.</h1>
    </div>
    </>
  )
}

export default Background
