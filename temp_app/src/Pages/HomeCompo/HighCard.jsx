import React, { useContext } from 'react';
import {   Stack, Text } from "@chakra-ui/react";
import {motion} from 'framer-motion'
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContex } from '../../Context/CartContex';

import instialState from '../../Context/CartContex';

  const data = {
    isNew: true,
    
  };


function HighCard(props) {
    const {   productImages
        , name ,minRentAmount} = props
    console.log(props)

    const{state,dispatcher}=useContext(CartContex,instialState)

    return (
        <Box  h={"350px"} w={"200px"}  bg={"red.200"}  >
              <motion.div  border={"1px solid black"}>
       

        <Image
          src={`https:${productImages}-500x500.jpg`}
          alt={`Picture of ${minRentAmount}`}
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
              {name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="red"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <div display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}   onClick={()=>{
                  console.log(props) 
                  dispatcher({ type:"AddCart",payload:props})
                }} />
              </div>
            </Tooltip>
          </Flex>
          </Box>
          

          <Flex   alignContent="center">
            
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                Rent===
              </Box>
              {minRentAmount}
            </Box>
          </Flex>
        </div>
      </motion.div>
          
      </Box>
    );
}

export default HighCard;