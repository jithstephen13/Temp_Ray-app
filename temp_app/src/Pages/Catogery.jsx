import { Flex, Image, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext } from 'react';

import instialState, { CatgortContex } from  '../Context/CatgortContex';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import SocialProfileWithImage from '../Component/ProductCard';


async function getUser(setData,state) {
    try {

      const response = await axios.get(`http://localhost:8080/${state.catagery}`);
      
      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }
function Catogery(props) { 
    const{state,dispatcher}=useContext(CatgortContex,instialState)
    const[data,setData]=useState([])

    useEffect(()=>{
          getUser(setData,state)

    },[])
    

    
  
    return (
        <div>
          <Flex  margin={"20px"}>
       <h1 s="20px"> Choos your Productes........</h1>
           </Flex>
            
            <SimpleGrid  columns={[1, 2, 3]} spacing='40px'>
 {
              data.map((item)=> {return <SocialProfileWithImage  {...item}/>  })
            }

            </SimpleGrid>
           
        </div>
    );
}

export default Catogery;