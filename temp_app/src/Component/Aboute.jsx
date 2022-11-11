import {
    Box,
    chakra,
    Image,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  
   
  function StatsCard(props ) {
    const { title, stat,icon } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        
        
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
           <Box> 
            <Image width={"15%"} src={icon} />
            </Box> 
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
         {title}
        </StatNumber>
        <StatLabel fontWeight={'medium'} isTruncated>
           {stat}
        </StatLabel>
        
      </Stat>
    );
  }
  
  export default function Aboute() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }  }   marginBottom={"100px"}  >
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          marginBottom={"100px"}
          fontWeight={'bold'}
          >
        
          There's more
to renting
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Finest-quality  products'} icon={"https://www.clipartmax.com/png/small/15-151551_social-media-quality-icon.png"} stat={"Quality matters to you, and us! That's why we do a strict quality-check for every product." } />
          <StatsCard title={'Free relocation'} icon={"https://www.clipartmax.com/png/small/17-170101_arrive-location-stand-here-comments-location-men-icon.png"}  stat={'Changing your house or even your city? We ll relocate your rentedproducts for free.'} />
          <StatsCard title={'Free maintenance'}  icon={"https://www.clipartmax.com/png/small/113-1131648_document-data-entry-services-document-processing-outsourcing-back-office-icon-png.png"}  stat={'Keeping your rented products in a spick and span condition is onus, so you can sit back and relax. '} />
          <StatsCard title={'Cancel anytime'}  icon={"https://www.clipartmax.com/png/small/40-401653_booking-of-e-appointment-for-pr-application-return-exchange-form-icon.png"}  stat={"Pay only for the time you use the product and close your subscription without any hassle.." } />
          <StatsCard title={'Easy return on delivery'}   icon={"https://www.clipartmax.com/png/small/53-532806_undo-arrow-of-circular-shape-with-half-broken-line-return-icon-free.png"}  stat={'If you dont like the product on delivery, you can return it right away—no questions asked'} />
          <StatsCard title={'Free maintenance'} icon={"https://www.clipartmax.com/png/middle/63-634014_user-maintenance-icon.png"} stat={'Keeping your rented products in a spick and span condition is onus, so you can sit back and relax. '} />
          
        </SimpleGrid>
      </Box>
    );
  }