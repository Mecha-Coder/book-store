import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi" 

function BookModel({book,onClose}) {
  return (
    <div onClick={onClose} className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 botton-0 z-50 flex justigy-center items-center" >
      
      <div onClick={e=>{e.stopPropagation()}}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >

      <AiOutlineClose className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
        onClick={onClose}
      />
          <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">{book.publishYear}</h2>
          <h4 className="my- text-gray-500">{book._id}</h4>

          <div className='flex justify-start items-center gap-x-2'>
            <PiBookOpenTextLight className="text-red-300 text-2x1"/>
            <h2 className='my-1'>{book.title}</h2>
          </div>

          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2x1"/>
            <h2 className="my-1">{book.author}</h2>
          </div>

          <p className="mt-4">Anything you want to show</p>
          <p className="my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

      </div>

    </div>
  )
}

export default BookModel