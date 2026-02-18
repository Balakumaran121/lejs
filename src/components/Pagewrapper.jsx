import React from 'react'

const Pagewrapper = ({children}) => {
  return (
    <div className='w-full min-h-[89vh] bg-gray-50'>
        {children}
    </div>
  )
}

export default Pagewrapper
