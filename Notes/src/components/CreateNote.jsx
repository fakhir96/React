import { React, useEffect, useRef } from 'react'

function CreateNote({ input, setInput, saveHandler }) {

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus();
    }
  }, []); 


  return (
    <>
      <div className=' bg-[#e78383]
        rounded-[15px]
        text-black
        p-[15px]
        min-h-[140px]
        flex flex-col justify-between
        break-words'>
        
        <textarea
          ref={textRef}
          maxLength={100}
          rows={5}
          cols={10}
          value={input}
          placeholder='Type here...'
          onChange={(e) => setInput(e.target.value)}
          className="whitespace-pre-wrap bg-transparent border-none text-black text-[18px] resize-none placeholder:text-black focus:outline-none">
        </textarea>
        
        <div className="flex items-center justify-end gap-[5px]">
          <button className="bg-[#2b9700] rounded-[10px] text-white
            px-[14px] py-[4px] text-[13px]
            cursor-pointer
            transition duration-100 ease-in-out
            hover:bg-black hover:border hover:border-black hover:text-white" 
            onClick={saveHandler}>
            Save
          </button>
        </div>
      </div>
    </>
  )
}

export default CreateNote;
