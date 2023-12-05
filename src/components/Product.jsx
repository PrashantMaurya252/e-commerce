import React from 'react'

function Product({department,product,cost,onClickAddButton}) {
  return (
    <div>
        <div>{department.toUpperCase()}</div>
        <div>{product}</div>
        <div>{cost}₹</div>
        <button onClick={onClickAddButton}>Add To Cart</button>
    </div>
  )
}

export default Product