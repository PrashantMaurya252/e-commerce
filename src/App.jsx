import React from 'react'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom';
import NavButton from './components/NavButton';
import CartButton from './components/CartButton';
import Catalog from './components/Catalog'
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
       <div>
        <div>
            <h1>ShopCart</h1>
            <div>
                <Link to='/'>
                   <NavButton/>
                </Link>
                <Link to='/cart'>
                   <CartButton/>
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