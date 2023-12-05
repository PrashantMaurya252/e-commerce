import React from 'react'
import { useSelector } from 'react-redux';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom';
import NavButton from './components/NavButton';
import CartButton from './components/CartButton';
import Catalog from './components/Catalog'
import Cart from './components/Cart';

function App() {
  const totalProducts=useSelector(state=>state.cart.totalProducts)
  return (
    <BrowserRouter>
       <div>
        <div>
            <h1>ShopCart</h1>
            <div>
                <Link to='/'>
                   <NavButton label="CATALOG"/>
                </Link>
                <Link to='/cart'>
                   <CartButton items={totalProducts}/>
                </Link>
            </div>
        </div>
        <div>
            <Routes>
                <Route path='/' element={<Catalog/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </div>
       </div>
    </BrowserRouter>
  )
}

export default App