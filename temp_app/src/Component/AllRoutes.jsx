import React from 'react';
import { Route, Routes } from 'react-router-dom';
 import Admin from '../AdminPage/Admin'
import Cart from '../Pages/Cart';
import Catogery from '../Pages/Catogery';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Productes from '../Pages/Productes';


function AllRoutes(props) {
    return (
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route  path='/login'   element={<Login/>} />
            <Route path='/cart'  element={<Cart/>}  />
            <Route  path='/Catogery' element={<Catogery/>} />
            <Route path='/Catogery/Productes'  element={<Productes/>} />
            <Route  path='/admin'  element={<Admin/>} />            
        </Routes>
    );
}

export default AllRoutes;