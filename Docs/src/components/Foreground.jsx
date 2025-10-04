import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    
    const ref = useRef(null)
    const data = [
        {
            desc: "Lorem ipsum dolor sit .",
            fileSize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
        {
            desc: "Lorem ipsum dolor sit .",
            fileSize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
        },
        {
            desc: "Lorem ipsum dolor sit .",
            fileSize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
        }

    ]
  
    return (
    <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-7 flex-wrap p-5' >
        {data.map((item, index)=> (
            <Card data={item} reference={ref}/>
        ))}
    </div>

  )
}

export default Foreground
