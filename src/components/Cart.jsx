import React from 'react'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

function Cart() {
  return (
    <div>
        <h1>Cart</h1>
        <div>
            <CartItem product='Fancy Robotic Sushi Maker' cost={200} quantity={2}/>
        </div>
        <CartTotals totalProducts={2} totalCost={400}/>
    </div>
  )
}

export default Cart