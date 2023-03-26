import React from 'react'

const Modal = ({isVisible , onClose, children}) => {

  if(!isVisible) return null;

  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={()=> onClose()}>
      <div className='w-[600px] flex flex-col'>
        <button className='text-white text-xl place-self-end' onClick={()=> onClose()}>X</button>
        <div className='bg-white text-black p-2 rounded' >
        {children}
        </div>

      </div>

    </div>
  )
}

export default Modal
