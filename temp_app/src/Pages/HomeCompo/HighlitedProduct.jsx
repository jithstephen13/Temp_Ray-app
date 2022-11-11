// import "./Style.CSS"
 import React, { useContext, useEffect } from 'react';
// import {motion} from 'framer-motion'
import { CatgortContex } from '../../Context/CatgortContex';
import instialState from '../../Context/CatgortContex';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardProduct from '../../Component/CardProduct';

// import HighCard from "./HighCard";
// import { HStack, VStack } from "@chakra-ui/react";

import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Badge, Box, Flex, Icon, Image, Tooltip } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';




async function getData(state,dispatcher) {
    try {
  
      const response = await axios.get(`http://localhost:8080/Productes`);
       
       dispatcher({
        type:"CompleteData",
        catagery:state.catagery,
       subCatagery:state.subCatagery ,
        payload:response.data
  
       })
      
      
    } catch (error) {
      console.error(error);
    }
  }
  
  
// function HighlitedProduct(props) {


//     return (
//         <motion.div className="Curser"  height={"400px"} width={"200px"} >
 
              
//              <HStack display="flex" gap="50px" overflow={"hidden"}  h >
//                {
//                 CompleteData.map((item)=>{
//                    return( 
//                     <HighCard  key={item.id}  {...item}/>
                   
//                     )
//                 })
//             }
            
//               </HStack>
//         </motion.div>
//     );
// }

// export default HighlitedProduct;


  function HighlitedProduct () {
        const{state,dispatcher}=useContext(CatgortContex,instialState)
    const navigate=useNavigate()

    useEffect(()=>{

      getData(state,dispatcher)

    },[])
     const{CompleteData}=state
  return ( 
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
        
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >



            {
                CompleteData.map((item)=>{
                   return( 
                    <SwiperSlide key={item.id}> 
                    
                    <Box  h={"350px"} w={"90%"}   >
              <div  border={"1px solid "}>
       

        <Image
          src={`https:${item.productImages}-500x500.jpg`}
          alt={`Picture of ${item.minRentAmount}`}
          roundedTop="lg"
        />

        <div width="100%"  >
          <Box d="flex" alignItems="baseline">
            
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
        <Flex mt="1" justifyContent="space-evenly" alignContent="center">
            <Box
              fontSize="s"
              
              as="h6"
              lineHeight="tight"
              isTruncated>
              {item.name}
            </Box>
            <Tooltip
              label="Add to cart"
             
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <div display={'flex'}>
                 
              </div>
            </Tooltip>
          </Flex>
          </Box>
          

          <Flex   alignContent="center">
            
            <Box fontSize="xl"  textAlign={"center"}>
              <Box as="span" ml={"90px"} color={'gray.600'} fontSize="lg">
                Rent
              </Box>
              {item.minRentAmount}
            </Box>
          </Flex>
        </div>
      </div>
          
      </Box>
                    
                    </SwiperSlide>
                   
                    )
                })
            }

        
       
    </Swiper>
  </>
  );
};

export default HighlitedProduct;