import { VStack } from '@chakra-ui/react';
import React from 'react';
import AddCursor from './HomeCompo/AddCursor';
import CartageryBox from './HomeCompo/CartageryBox';
import ProductCursel from './HomeCompo/ProductCursel';



function Home(props) {

    
    return (
        <VStack>
            <h1>welcome home</h1>
            <AddCursor/>
            <CartageryBox/>
            <ProductCursel/>
           
            
        </VStack>
    );
}

export default Home;