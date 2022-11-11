import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
import { CartContex } from '../Context/CartContex'
import instialState from  '../Context/CartContex'
  import { CartItem } from './CartPages/CartItem'
  import { CartOrderSummary } from './CartPages/CartOrderSummary'
   

function Cart(props) {



 

    const{state,dispatcher}=React.useContext(CartContex,instialState)
    console.log(state)

   // let Totel=state.reduce((a,c)=>a+c.minRentAmount,0)
    return (
        <Box
        maxW={{
          base: '3xl',
          lg: '7xl',
        }}
        mx="auto"
        px={{
          base: '4',
          md: '8',
          lg: '12',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
        width={"100%"}
      >
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          align={{
            lg: 'flex-start',
          }}
          spacing={{
            base: '8',
            md: '16',
          }}
         
        >
          <Stack
            spacing={{
              base: '8',
              md: '10',
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({`${state.length} items`} )
            </Heading>
    
            <Stack spacing="6">
              {state.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>
    
          <Flex direction="column"   bg={"yellow.200"} p={5} >
            <CartOrderSummary />
            <HStack mt="6"  fontWeight="semibold">
              <p>or</p>
              <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    
    );
}

export default Cart;