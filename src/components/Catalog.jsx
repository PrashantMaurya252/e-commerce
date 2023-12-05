import React from 'react'
import Product from './Product'
import {connect} from 'react-redux'
import { setFilter,clearFilter } from '../store/actions/catalogActions'
import { addToCart } from '../store/actions/cartActions'

function Catalog({catalog,department,onSetFilter,onClearFilter,onAddToCart}) {
  return (
    <div>
        <h1>Catalog</h1>
        {department && department.map(({ id,title })=>(
          <button key={id} onClick={()=>onSetFilter(title)}>{title}</button>
        ))}
        <button onClick={()=>onClearFilter()}>Clear Button</button>
        <div>
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