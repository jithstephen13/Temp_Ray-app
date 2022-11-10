import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useContext } from 'react';
import { CatgortContex } from '../Context/CatgortContex';
import instialState from '../Context/CatgortContex';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


  
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


  
  export default function SocialProfileWithImage({backgroundImage,filterName }) {
     
    // console.log(backgroundImage)


    const{state,dispatcher}=useContext(CatgortContex,instialState)
    const navigate=useNavigate()

    useEffect(()=>{

      getData(state,dispatcher)

    },[])
    return (
       
        <Box
          maxW={'370px'}
          maxH={"500px"}

          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          cursor='pointer'
          onClick={()=>{
            dispatcher({type:"subCatagery",catagery:state.catagery,
            payload:filterName})
            navigate('/Catogery/Productes')
          }}
          >
          <Image
            h={'full'}
            w={'full'}
            src={
              `https://www.rentomojo.com${backgroundImage}`
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Box h={"70px"}
             w={"60%"}
             bg="blue.700"
             textAlign={"center"}
             alignContent="center"
             borderRadius={"10px"}
             boxShadow={'2xl'}
             > 
             <h1>{filterName}</h1>

            </Box>
             
          </Flex>
          </Box>
  
     
    );
  }