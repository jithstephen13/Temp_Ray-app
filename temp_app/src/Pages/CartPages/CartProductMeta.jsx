import {
    Box,
    HStack,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
import { motion } from 'framer-motion'
  import * as React from 'react'
   
  
  export const CartProductMeta = (props) => {
    const {   image, name } = props
    return (
      <motion.div direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={`https:${image}-500x500.jpg`}
          alt={name}
          draggable="false"
          loading="lazy"
          border={"6px solid green"}
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{name}</Text>
             
          </Stack>
           
        </Box>
      </motion.div>
    )
  }