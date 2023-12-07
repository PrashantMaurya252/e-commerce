import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom';
import NavButton from './components/NavButton';
import CartButton from './components/CartButton';
import Catalog from './components/Catalog'
import Cart from './components/Cart';

import { initCatalog } from './store/actions/catalogActions';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(initCatalog())
  },[])
  const totalProducts=useSelector(state=>state.cart.totalProducts)
  return (
    <BrowserRouter>
       <div>
        <div >
            <h1 className='text-blue-900 text-5xl font-semibold text-center'>ShopCart</h1>
            <div className='flex items-center justify-end mr-6 gap-4 bg-gradient-to-r from-green-400 to-blue-300 h-24 m-2 p-4'>
                <Link to='/'>
                   <NavButton label="HOME"/>
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