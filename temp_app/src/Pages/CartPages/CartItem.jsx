import { Button, CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { CartContex } from '../../Context/CartContex'
import instialState from '../../Context/CartContex'

export const CartItem = (props) => {
  const {minRentAmount , name ,productImages,id} = props
  const{state,dispatcher}=React.useContext(CartContex,instialState)
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        image={productImages}
         
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        
        <PriceTag  
        price={minRentAmount}
        currency={"INR"} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={( )=>{dispatcher({type:"RemoveCart",payload:id}) }} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <CloseButton fontSize="sm" textDecor="underline" onClick={( )=>{dispatcher({type:"RemoveCart",payload:id})}}  >
          Delete
        </CloseButton>
        
        <PriceTag price={minRentAmount} currency={"INR"} />
      </Flex>
    </Flex>
  )
}