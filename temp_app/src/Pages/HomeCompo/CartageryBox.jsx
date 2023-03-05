import React, { useContext } from 'react';
import { GoPackage,IoBedOutline,GiWashingMachine,AiOutlineMobile,GiWeightLiftingUp, FaBox, FaBed, FaTablet, FaDiagnoses, FaTv } from 'react-icons/fa';
import {Flex,Box,IconButton, SimpleGrid, Grid} from "@chakra-ui/react"
import { CatgortContex } from '../../Context/CatgortContex';
import instialState from '../../Context/CatgortContex'
import { useNavigate } from 'react-router-dom';

function CartageryBox(props) {
   const{state,dispatcher}=useContext(CatgortContex,instialState)
   const navigate=useNavigate()
     
    return (
        <Grid w={"80%"} mt={"50px"}  pt={10} mb={"100px"}
         
        >
              <SimpleGrid columns={{ base: 3, md: 5 }} paddingBottom={"150px"} paddingTop={"150px"} spacing={{ base: 5, lg: 8 }}>
            <Box onClick={()=>{
                dispatcher({
                   type:  "catagery",
                   payload:"packages"
                })
                navigate('/Catogery')

                   }} 
                 textAlign={"center"}>
                <IconButton icon={<FaBox/>} ></IconButton>
                <p>Packages</p>
                </Box>
                 <Box 
                 onClick={()=>{
                    dispatcher({
                       type:  "catagery",
                       payload:"furniture"
                    }) 
                      navigate('/Catogery') }}  textAlign={"center"} >
                <IconButton icon={<FaBed/>} ></IconButton>
                <p>Furniture</p>
                </Box>
                <Box 
                  onClick={()=>{
                    dispatcher({
                       type:  "catagery",
                       payload:"appliances"
                    })
                    navigate('/Catogery') }}
                textAlign={"center"} >
                <IconButton icon={< FaTv/>} ></IconButton>
                <p> Appliances</p>
                </Box  >
                <Box   onClick={()=>{
                    dispatcher({
                       type:  "catagery",
                       payload:"electronics"
                    }) 
                    navigate('/Catogery')}}
                 textAlign={"center"} >
                <IconButton icon={<FaTablet/>} ></IconButton>
                <p>Electronics </p>
                </Box  >
               <Box    onClick={()=>{
                    dispatcher({
                       type:  "catagery",
                       payload:"fitness-equipment"
                    }) 
                    navigate('/Catogery')}} 
                 textAlign={"center"}>
                <IconButton icon={<FaDiagnoses/>} ></IconButton>
                <p> Fitness</p>
                </Box  >

                 </SimpleGrid>
          
            
        </Grid>
    );
}

export default CartageryBox;