import {
    Button,
    Flex,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
import { CartContex } from '../../Context/CartContex'
import instialState from '../../Context/CartContex'
 
  import { formatPrice } from './PriceTag'
import { useNavigate } from 'react-router-dom'
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = () => {

    const{state,dispatcher}=React.useContext(CartContex,instialState)
    const navigate=useNavigate()

    return (
      <Stack spacing="8" borderWidth="1px" marginTop={"50px"} rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={state.reduce((a,c)=>a+c.minRentAmount,0)} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
           
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {state.reduce((a,c)=>a+c.minRentAmount,0)}
            </Text>
          </Flex>
          <Input bg={"gray.800"} placeholder='Name' />
          <Input bg={"gray.800"} placeholder='Address..' />
        </Stack>
        <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}
        onClick={()=>{
            alert("Order Placed")
            dispatcher({type:"Checkout"})
            navigate('/')
        }}
        >
          Checkout
        </Button>
      </Stack>
    )
  }