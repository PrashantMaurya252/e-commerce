import React from 'react'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

function Cart() {
  return (
    <div>
        <h1>Cart</h1>
        <div>
            <CartItem product={} cost={} quantity={}/>
        </div>
        <CartTotals totalProducts={} totalCost={}/>
    </div>
  )
}

export default Cart