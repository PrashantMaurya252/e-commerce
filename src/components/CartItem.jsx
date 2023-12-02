import React from 'react'

function CartItem({product,quantity,cost,onQuantityChange,onItemRemove}) {
  return (
    <div>
        <div>{product}</div>
        <div>
            <input type="number" defaultValue={quantity} min='1' onChange={e=>onQuantityChange(Number(e.target.value))} onKeyUp={e=>{if(e.keyCode===13){
                onQuantityChange(Number(e.target.value))
            }}} />
        </div>
        <button onClick={onItemRemove}>Remove</button>
        <div>{cost}</div>
        <div>{cost*quantity}</div>
    </div>
  )
}

export default CartItem