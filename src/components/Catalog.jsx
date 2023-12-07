import React from 'react'
import Product from './Product'
import {connect} from 'react-redux'
import { setFilter,clearFilter } from '../store/actions/catalogActions'
import { addToCart } from '../store/actions/cartActions'

function Catalog({catalog,department,onSetFilter,onClearFilter,onAddToCart}) {
  return (
    <div>
        <h1 className='text-2xl font-bold text-center'>Home</h1>
        <div className='flex justify-evenly flex-wrap m-4'>
        {department && department.map(({ id,title })=>(
          <button className='text-lg font-semibold bg-gray-200 text-red-800 p-2 rounded-xl border-red-800 border-2 hover:text-gray-200 hover:bg-gradient-to-b from-pink-200 to-purple-400' key={id} onClick={()=>onSetFilter(title)}>{title}</button>
        ))}
        </div>
        <button className='text-center text-2xl font-extrabold bg-red-500 p-2 border-2 border-red-900 rounded-xl m-3' onClick={()=>onClearFilter()}>Clear Button</button>
        <div className='flex md:flex-row flex-col justify-center items-center md:justify-evenly m-4 md:flex-wrap gap-2'>
            {catalog && catalog.map(item =><Product key={item.id} {...item} onClickAddButton={()=>onAddToCart(item)}/>)}
        </div>
    </div>
  )
}

const filterProduct=(products,filter)=>
filter ? products.filter(item=>item.department===filter):products

const mapStateToProps=state=>{
  return {
    catalog:filterProduct(state.catalog.products,state.catalog.filter),
    department:state.catalog.departments
  }
}

const mapDispatchToProps=dispatch=>{
  return {
    onSetFilter:department=>dispatch(setFilter(department)),
    onClearFilter:()=>dispatch(clearFilter()),
    onAddToCart:product=>dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Catalog)