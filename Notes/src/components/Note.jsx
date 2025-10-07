import React from 'react'

function Note({ id, text, editHandler, deleteHandler }) {
    return (
        <div
            className="bg-[#fef3c7] rounded-[15px]
            text-white
            p-[15px]
            min-h-[140px]
            flex flex-col justify-between
            break-word"
        >
            <div className="whitespace-pre-wrap bg-transparent border-none text-[#1f2937] text-[18px]">
                {text}
            </div>

            <div className="flex items-center justify-end gap-[5px] ">
                <button
                    onClick={() => deleteHandler(id)}
                    className="
                        bg-[#ef4444]
                        rounded-[10px]
                        text-white
                        px-[10px] py-[4px]
                        text-[13px]
                        cursor-pointer
                        transition duration-200 ease-in
                        hover:bg-[#000000] hover:border hover:border-[#000] hover:text-white"
                >
                    Delete
                </button>

                <button
                    onClick={() => editHandler(id, text)}
                    className="
                        bg-[#0284c7]
                        rounded-[10px]
                        text-white
                        px-[14px] py-[4px]
                        text-[13px]
                        cursor-pointer
                        transition duration-200 ease-in
                        hover:bg-green-400 hover:border hover:border-green-400"
                >
                    Edit
                </button>
            </div>
        </div>
    )
}

export default Note
