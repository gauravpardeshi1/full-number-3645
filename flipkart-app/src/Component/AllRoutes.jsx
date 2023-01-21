import { Heading } from '@chakra-ui/react'
import {Routes ,Route} from 'react-router-dom'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import Signup from '../Pages/signup'
import SingleProcuct from '../Pages/SingleProduct'
import Electronic from '../Products/Electronic'
import Mobile from '../Products/Mobile'
import Watche from '../Products/Watche'

const AllRoutes=()=>{
    return (
        <div>
         <Routes>
        <Route path="/"         element={<Home/>} />
        <Route path="/login"    element={<Login/>}/>
        <Route path="/signup"    element={<Signup/>}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route  path="/watchesproducts" element={<Watche/>}/>
        <Route  path="/mobilesproducts" element={<Mobile/>}/>
        <Route  path="/Electronicproducts" element={<Electronic/>}/>
        <Route  path="/single/:user_id" element={<SingleProcuct/>}/>
        </Routes>
        </div>
    ) 
    
     
}
export default AllRoutes;