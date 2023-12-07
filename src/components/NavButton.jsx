import React from 'react'

function NavButton({label,onClick}) {
  return (
    <button className='bg-gray-200 p-2 border-solid border-red-200 border-2 rounded-xl hover:bg-blue-500 hover:text-gray-200  text-lg font-semibold' onClick={onClick}>{label}</button>
  )
}

export default NavButton