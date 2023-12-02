import React from 'react'

function NavButton({label,onClick}) {
  return (
    <button onClick={onClick}>{label.toUpperCase()}</button>
  )
}

export default NavButton