import React, { useContext } from 'react';
import { CartContex } from '../Context/CartContex';
import instialState from '../Context/CartContex';


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
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import CartageryBox from '../Pages/HomeCompo/CartageryBox';
  
  const data = {
    isNew: true,
    
  };


function CardProduct(props) {

    const{minRentAmount,name,productImages}=props
     

    const{state,dispatcher}=useContext(CartContex,instialState)

    return (
        
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={`https:${productImages}-500x500.jpg`}
          alt={`Picture of ${minRentAmount}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
        
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}   onClick={()=>{
                  console.log(props) 
                  dispatcher({ type:"AddCart",payload:props})
                }} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                Rent
              </Box>
              {minRentAmount}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
    );
}

export default CardProduct;