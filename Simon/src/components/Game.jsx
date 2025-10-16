import {React, useEffect, useState} from 'react'
import Cnote from '../assets/Cnote.mp3';
import Enote from '../assets/Enote.mp3';
import Note from '../assets/Note.mp3';
import e5note from '../assets/e5-piano-note.mp3';

const Game = ({start}) => {
    
    const [activeBtn, setActiveBtn] = useState(null); // for highlighting
    const [current, setCurrent] = useState(null);
    const [round, setRound] = useState(0);

    const playSound1 = () => new Audio(Cnote).play();
    const playSound2 = () => new Audio(Enote).play();
    const playSound3 = () => new Audio(Note).play();
    const playSound4 = () => new Audio(e5note).play();

    const buttons = [
        { id: 0, color: 'bg-red-600', rounded: 'rounded-tl-full', sound: playSound1 },
        { id: 1, color: 'bg-yellow-500', rounded: 'rounded-tr-full', sound: playSound2 },
        { id: 2, color: 'bg-green-400', rounded: 'rounded-bl-full', sound: playSound3 },
        { id: 3, color: 'bg-blue-600', rounded: 'rounded-br-full', sound: playSound4 },
    ];

    useEffect(()=>{

        if(!start) return

        let val = Math.floor(Math.random() * 4);
        
        setCurrent(val)
        setActiveBtn(val); // 1️⃣ Highlight that button 
        buttons[val].sound(); // Play a sound for random button

        const timer = setTimeout(() => setActiveBtn(null), 500);
        return () => clearTimeout(timer);
        
    }, [start, round])


    const checkSound = (id)=>{
        console.log("User Clicked Box: "+id)

        if(current === id){
            console.log("Correct Button Clicked")
            buttons[id].sound()

            setActiveBtn(id)
            setTimeout(() => setActiveBtn(null), 300);

            // move to next round
            setTimeout(() => setRound(prev => prev + 1), 800);
        }   
    }   

    return (
        <div className='w-[40%] h-[58%] grid grid-cols-2 gap-4'>
            {buttons.map((btn) => (
                <button
                    key={btn.id}
                    id={btn.id}
                    onClick={() => checkSound(btn.id)}
                    className={`w-full transition duration-200 ${btn.rounded} ${
                        activeBtn === btn.id ? 'bg-amber-100' : btn.color
                    }`}>
                </button>
            ))}
        </div>
    )
}

export default Game
