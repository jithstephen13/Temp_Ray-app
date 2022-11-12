import React, { useContext } from 'react';
import instialState, { CatgortContex } from  '../Context/CatgortContex';

import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import CardProduct from '../Component/CardProduct';
import { SimpleGrid, VStack } from '@chakra-ui/react';
   
const filterData=(state,dispatcher)=>{
 const{ CompleteData }= state
  const{subCatagery } =state
  
    
}




 
async function getData(state,dispatcher) {
    try {

       const{subCatagery}=state
      const response = await axios.get(`http://localhost:8080/Productes?filterSlug=${subCatagery} `);
       dispatcher({
        type:"SubData",
        catagery:state.catagery,
        subCatagery:state.subCatagery ,
        CompleteData:state.CompleteData,
        payload:response.data
       })
       console.log(state)
      
    } catch (error) {
      console.error(error);
    }
  }
  


function Productes(props) {
     const{state,dispatcher}=useContext(CatgortContex,instialState)
   
    
    useEffect(()=>{
       getData(state,dispatcher)
       console.log(state)
       },[])
    
     const{CompleteData}=state
     return (
        <SimpleGrid  columns={[1, 2, 3]} spacing='40px'>
            {
                CompleteData.map((item)=>{
                return <CardProduct  key={item.id}  {...item}/>
                })
            }
        </SimpleGrid>
       
    );
}

export default Productes;