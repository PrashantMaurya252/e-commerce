import React from 'react'

function CartTotals({totalProducts,totalCost}) {
  return (
    <div>
        <div>{totalProducts}</div>
        <div>{totalCost}</div>
    </div>
  )
}

export default CartTotals