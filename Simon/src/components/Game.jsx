import {React, useEffect, useState} from 'react'
import Cnote from '../assets/Cnote.mp3';
import Enote from '../assets/Enote.mp3';
import Note from '../assets/Note.mp3';
import e5note from '../assets/e5-piano-note.mp3';

const Game = ({start, setScore, restart }) => {
    
    const [sequence, setSequence] = useState([]) // full generated sequence
    const [userIndex, setUserIndex] = useState(0) // track where user is in the sequence
    const [activeBtn, setActiveBtn] = useState(null) // for highlight animation
    const [isPlaying, setIsPlaying] = useState(false) // to block clicks during playback


    // Sound setup
    const buttons = [
        { id: 0, color: 'bg-red-600', rounded: 'rounded-tl-full', sound: () => new Audio(Cnote).play() },
        { id: 1, color: 'bg-yellow-500', rounded: 'rounded-tr-full', sound: () => new Audio(Enote).play() },
        { id: 2, color: 'bg-green-400', rounded: 'rounded-bl-full', sound: () => new Audio(Note).play() },
        { id: 3, color: 'bg-blue-600', rounded: 'rounded-br-full', sound: () => new Audio(e5note).play() },
    ]

    // Start game or next round
    useEffect(() => {
        if (!start) return
        
        startNewGame()
    }, [start])

    // Restart Game
    useEffect(() => {
        if (!start) return
      
        setSequence([])
        setUserIndex(0)
        setIsPlaying(false)
        setActiveBtn(null)
        setScore(0)
      
        const timer = setTimeout(() => addNewStep([]), 500)
        return () => clearTimeout(timer)
    }, [restart])
      

    
    // Start the game
    const startNewGame = () => {
        setSequence([]) 
        setScore(0)
        setUserIndex(0)
        addNewStep([])
    }
    
    
    // Add a random step to the sequence
    const addNewStep = (prevSeq) => {
        const next = Math.floor(Math.random() * 4)
        const newSeq = [...prevSeq, next]
        setSequence(newSeq)
        playSequence(newSeq)
    }

    // Play the full sequence
    const playSequence = async (seq) => {
        setIsPlaying(true)
        for (let i = 0; i < seq.length; i++) {
            await highlightButton(seq[i])
        }
        setIsPlaying(false)
    }

    // Flash + play sound
    const highlightButton = (id) => {
        return new Promise((resolve) => {
        setTimeout(() => {
            setActiveBtn(id)
            buttons[id].sound()
            setTimeout(() => {
                setActiveBtn(null)
                setTimeout(resolve, 250)
            }, 400)
        }, 400)
        })
    }

    // Handle user clicks
    const handleUserClick = (id) => {
        if (isPlaying || sequence.length === 0) return // block during playback

        if (id === sequence[userIndex]) {
            // Correct click
            buttons[id].sound()
            setActiveBtn(id)
            setTimeout(() => setActiveBtn(null), 300)

            if (userIndex + 1 === sequence.length) {
                // Round complete 
                setScore((prev) => prev + 1)
                setTimeout(() => addNewStep(sequence), 700)
                setUserIndex(0)
            } 
            else {
                // Move to next user step
                setUserIndex((prev) => prev + 1)
            }
        } 
        else {
            // Wrong click
            alert('Game Over!')
            setSequence([])
            setUserIndex(0)
            setScore(0)
        }
    }

    return (
        <div className='w-[80vw] max-w-[400px] aspect-square grid grid-cols-2 gap-4'>
            {buttons.map((btn) => (
                <button
                key={btn.id}
                onClick={() => handleUserClick(btn.id)}
                className={`
                    transition duration-200 
                    ${btn.rounded} 
                    ${activeBtn === btn.id ? 'bg-amber-100' : btn.color}
                    w-full h-full
                    sm:p-4 md:p-6 lg:p-8 
                    shadow-md active:scale-95`}
                >
                </button>
            ))}
        </div>
        
    )
}

export default Game;
