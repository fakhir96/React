import React from 'react'

function Note({ id, text, editHandler, deleteHandler }) {
    return (
        <div
            className="bg-[#4b1589] rounded-[15px]
            text-white
            p-[15px]
            min-h-[140px]
            flex flex-col justify-between
            break-word"
        >
            <div className="whitespace-pre-wrap bg-transparent border-none text-white text-[18px]">
                {text}
            </div>

            <div className="flex items-center justify-end gap-[5px] ">
                <button
                    onClick={() => deleteHandler(id)}
                    className="
                        bg-black
                        rounded-[10px]
                        text-white
                        px-[10px] py-[4px]
                        text-[13px]
                        cursor-pointer
                        transition duration-100 ease-in-out
                        hover:bg-white hover:border hover:border-white hover:text-[#4b1589]"
                >
                    Delete
                </button>

                <button
                    onClick={() => editHandler(id, text)}
                    className="
                        bg-black
                        rounded-[10px]
                        text-white
                        px-[10px] py-[4px]
                        text-[13px]
                        cursor-pointer
                        transition duration-100 ease-in-out
                        hover:bg-white hover:border hover:border-white hover:text-[#4b1589]"
                >
                    Edit
                </button>
            </div>
        </div>
    )
}

export default Note
