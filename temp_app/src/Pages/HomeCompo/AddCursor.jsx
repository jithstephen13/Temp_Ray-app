import { Box, Image, VStack } from '@chakra-ui/react';
import React from 'react';

function AddCursor(props) {

    const Images=[
        {url:"https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg"},
        {url:"https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg"},
        {url:"https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg"},
        {url:"https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg"},
        {url:"https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg"},
    ]
    
    return (
        <VStack >
         {
            Images.map((item)=>{
             <Box>
                    <Image src={item.url} />
                </Box>
           } )
         }
            
        </VStack >
    
    );
}

export default AddCursor;