import { Heading } from '@chakra-ui/react'
import {Routes ,Route} from 'react-router-dom'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

const AllRoutes=()=>{
    return (
        <div>
         <Routes>
        <Route path="/"         element={<Home/>} />
        <Route path="/login"    element={<Heading>Login</Heading>}/>
        <Route path="/cart"  element={<Cart/>}/>
        
        </Routes>
        </div>
    ) 
    
     
}
export default AllRoutes;