import {React, useEffect, useState} from 'react'
import CreateNote from './CreateNote'
import Note from './Note';

function List() {
    const [input, setInput] = useState("")
    const [notes, setNotes] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [editToggle, setEditToggle] = useState(null);

    const editHandler = (id, text)=>{
        setEditToggle(id);
        setInput(text)
    }

    const saveHandler = ()=>{

        if(!input.trim()) return
        
        if(editToggle){
            setNotes(notes.map((note)=>(
                note.id === editToggle ? {...note, text: input} : note
            )))
        }
        else{
            setNotes((prev)=> [
                ...prev, {
                    id: Date.now(),
                    text: input
                }
            ])
        }

        setInput("")
        setEditToggle(null)
    } 

    const deleteHandler = (id)=>{
        const newNotes = notes.filter(n => n.id !== id)
        setNotes(newNotes)
    }

    useEffect(()=>{
        const raw = JSON.parse(localStorage.getItem("Notes")) || [];
        
        setNotes(raw);
        setIsLoaded(true);
    },[])

    useEffect(()=>{
        if (isLoaded) {
            localStorage.setItem("Notes", JSON.stringify(notes));
          }
    },[notes, isLoaded])

    return (
    <>
    <main className="max-w-[960px] mx-auto px-4 min-h-screen">
        <div  className="max-w-[1200px] mx-auto grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-2" >
            {
                notes.map((note)=>(
                    
                    editToggle === note.id ?
                    <CreateNote 
                    input={input} 
                    setInput={setInput} 
                    saveHandler={saveHandler}
                    />
                    :
                    <Note 
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                    />
                ))
            }

            {
                editToggle === null ?             
                    <CreateNote 
                    input={input} 
                    setInput={setInput} 
                    saveHandler={saveHandler}
                    /> 
                    :
                    <></> 

            }
         </div>
    </main>
    </>
  )
}

export default List
