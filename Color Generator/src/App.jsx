import React from 'react';
import { useState } from 'react';

function App() {
  const [copiedColor, setCopiedColor] = useState(null);

  const chars = "0123456789abcdef";
  
  const [colors, setColors] = useState(["#fd4040", "#3c8841", "#ba01ad", "#43addb", "#0937de"]);
  
  const changeColor = ()=>{
    let newColors = [];
    for (let i = 0; i < 5; i++) {
      let colorr = "";
      for (let j = 0; j < 6; j++) {
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        colorr += randomChar;
      }
      newColors.push(`#${colorr}`);
    }
    setColors(newColors);
    
  }

  return ( 
    <>
    <div className="h-[200px] w-[350px] rounded-xl overflow-hidden shadow-lg font-sans">
      {/* Palette Section */}
      <div className="flex h-[86%] w-full">
        {colors.map((color, index) => (
          <div 
            key={index}
            className="group flex-1 h-full flex items-center justify-center text-white font-semibold 
              tracking-wide transition-all duration-100 ease-linear hover:flex-[1.5] hover:shadow-xl"
            style={{ backgroundColor: color }}
            onClick={() => {
              navigator.clipboard.writeText(color); // copy to clipboard
              setCopiedColor(color);
              setTimeout(() => setCopiedColor(null), 1500);
            }}
          >
            <span className="opacity-0 transition-opacity duration-100 ease-linear group-hover:opacity-100">
              {/* {color.replace("#", "").toUpperCase()} */}
              {copiedColor === color ? "Copied!" : color.replace("#", "").toUpperCase()}
            </span>
          </div>
        ))}
      </div>
      
    </div>

    <button 
      onClick={changeColor}
      className='px-4 py-2 bg-green-400 text-black mt-3 rounded-3xl text-sm'>
        Generate Palette
    </button>

    </>
   );
}

export default App;
