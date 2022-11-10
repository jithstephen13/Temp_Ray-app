
 import React from 'react';
        import { Box, Button, Flex, HStack, Img, Input, Select, useDisclosure} from '@chakra-ui/react'
        import Temp_Ray from '../imges/Temp_Ray.png'
        import {  IconButton, useColorMode, VStack } from '@chakra-ui/react';
        import {FaCartPlus, FaHamburger, FaMoon, FaSun}  from 'react-icons/fa'
import { HamburgerIcon } from '@chakra-ui/icons';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LogibContext } from '../Context/LogibContext';
import instialState from '../Context/LogibContext'



function Navbar(props) {

    const { colorMode,toggleColorMode } = useColorMode()
    const isDark=colorMode==='dark'
    const navigate = useNavigate();
    const { isOpen, onToggle } = useDisclosure();
    const{state,dispatcher} =useContext(LogibContext,instialState)
    console.log(state)
    return (
       
                <Flex
                as="nav"
                align="center"
                justify="space-between"
                zIndex={6}
                backdropBlur="18px"
                boxShadow='dark-lg'
                
                w="100%"
                h="100px"
                
                mb={8}
                p={8}
                position="sticky"
                top={0}
                
               
              >
          
                <Flex m={"auto"} width={"80%"} h="100%"   align="center"  justify="space-between"  >
        
                  <Box h={"100%"}>
                    <Img src={Temp_Ray} h={'100%'} />
                  </Box >
                  <Box h={"100%"}  display={{base: "none", md:"block"  }}>
                    <Button display={{base: "none", md:"block"  }} h="100%" bg="tranceparent">Location</Button>
        
                  </Box>
                  <Box h={"100%"} w={"30%"}>
                   <Input placeholder='Search for Prductes.................        🔍' />
                  </Box>
                  <Box>  
                  <Flex w={'100%'}>
                   <IconButton  icon={!isDark ? <FaSun/> :<FaMoon/> } isRound='true'  onClick={toggleColorMode}></IconButton>

                 </Flex>

                  </Box>

                  <HStack  onClick={toggleColorMode} border={"1px solid  black"} p='5px' borderRadius={"20px"} >
                  <IconButton  icon={ <FaCartPlus/>}  ></IconButton><p>Cart</p>
                  </HStack>

                  <HStack>
                    <Box display={{base: "none", md:"block"  }}>
                       {!state.isAouth && <Button onClick={()=>{navigate('/login')}}>Login/SignUP</Button>}
                       {state.isAouth && <Button onClick={()=>dispatcher({type:"logout", isAouth:false,
                        isName:""})}>Logout</Button>}
                    </Box>
                    <Box display={{base:"block" , md: "block", lg:"none" }} icon={<FaHamburger/>}> <IconButton icon={<FaHamburger/>}  ></IconButton></Box>
                  </HStack>


                
                  
             
        
         
                </Flex>
               
              </Flex>
                
            );
        
    
}

export default Navbar;