import { Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import Aboute from '../Component/Aboute';
import AddCursor from './HomeCompo/AddCursor';
import CartageryBox from './HomeCompo/CartageryBox';
import HighlitedProduct from './HomeCompo/HighlitedProduct';

 



function Home(props) {

    
    return (
        <>
        <VStack marginBottom={"100px"}>
            <h1>welcome home</h1>
            <AddCursor/>
            <CartageryBox/>
            
        </VStack  >
        <HighlitedProduct/> 
        <Aboute/>
            
        
        </>
    );
}

export default Home;