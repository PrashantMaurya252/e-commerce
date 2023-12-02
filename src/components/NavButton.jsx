import React from 'react'

function NavButton({label,onClick}) {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default NavButton