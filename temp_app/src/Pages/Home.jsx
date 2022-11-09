import { VStack } from '@chakra-ui/react';
import React from 'react';
import AddCursor from './HomeCompo/AddCursor';



function Home(props) {

    
    return (
        <VStack>
            <h1>welcome home</h1>
            <AddCursor/>
           
            
        </VStack>
    );
}

export default Home;