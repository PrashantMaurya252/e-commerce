import React from 'react'

function CartButton({items,onClick}) {
  return (
    <button onClick={onClick}>CART {items>0 ?<span>{items}</span>:null}</button>
  )
}

export default CartButton