import React from 'react';

import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
 import  Electronic from './Categories/Electronics';
import BeautyAndFashion from './Categories/BeautyAndFashio';
import ClothingFashion from './Categories/ClothingFashio';

import ToyAndGame from './Categories/ToyGame';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Product from './Product';
import FilterList from './FilterList';
const Structure = () => {
    return (
        <>
           <BrowserRouter>
           <FilterList/>   
             <Routes>
 <Route path='/toygame' element={<ToyAndGame/>}></Route>
   <Route path='/beautyandfashion' element={<BeautyAndFashion/>}></Route> 
    <Route path='/clothing' element={<ClothingFashion/>}></Route> 
    <Route path='/electronic' element={<Electronic/>}></Route>
             </Routes>
            </BrowserRouter>
        </>
    )
}

export default Structure