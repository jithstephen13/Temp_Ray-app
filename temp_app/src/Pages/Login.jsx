import React, { useContext, useState } from 'react';
import axios from 'axios'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Stack,
  Center,
  PinInputField,
  PinInput,
  HStack,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LogibContext } from '../Context/LogibContext';
import instialState from '../Context/LogibContext';

async function postUser( mobile,
    email,
    firstname,
    lastname,navigate,dispatcher) {
    try {
      const response = await axios.post('https://backmock-app.onrender.com/user',{
        mobile,
        email,
        firstname,
        lastname
      });
       console.log(response)
       dispatcher({type:"login",isAouth:true,
       payload:firstname})
        navigate("/")
        
      
    } catch (error) {
      console.error(error);
    }
  }

const Form3 = ({mobile, email, setEmail, firstname,setFirstname, lastname, setlastname }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
   
   
   console.log( mobile,
    email,
    firstname,
    lastname)
    
    setShow(!show)};

    
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" onChange={(e)=>{setFirstname(e.target.value)}} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="Last name" onChange={(e)=>{setlastname(e.target.value)}} />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      
    </>
  );
};

const Form1 = ({setMobile}) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
       
      </Heading>
      <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter Your Mobile No.
        </Heading>
        <FormControl id="email" isRequired>
          <Input
            placeholder="your-+91 9874563210"
            _placeholder={{ color: 'gray.500' }}
            type="Number"
            onChange={(e)=>setMobile(e.target.value)}
          />
        </FormControl>
        
       
      </Stack>
    </Flex>
    </>
  );
};

async function getUser(setUser) {
    try {
      const response = await axios.get('https://backmock-app.onrender.com/user',{
        params: {
            _page:1,
            _limit:10
          }
      });
      console.log(response.data);
      setUser(response.data)
    } catch (error) {
      console.error(error);
    }
  }

const Form2 = ({mobile,user,setUser}) => {
    console.log(mobile)
    const navigate = useNavigate();
     
    useEffect(()=>{
        getUser(setUser)

    },[])
const{state,dispatcher} =useContext(LogibContext,instialState)
setTimeout(() => {
    user.forEach((item)=>{
        if(item.mobile==mobile){
           
            dispatcher({type:"login",isAouth:true,
             payload:user.firstname})
              navigate("/")
        }
    })
    
}, 2000);


  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
      <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
      
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Mobile No
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          >
          We have sent code to your  number
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          >
         
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          
        </Stack>
      </Stack>
    </Flex>
      </SimpleGrid>
    </>
  );
};

export default function Login() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [mobile,setMobile]=useState('')
  const [firstname,setFirstname]=useState('')
  const[lastname,setlastname]=useState('')
  const [email,setEmail]=useState('')
  const[user,setUser]=useState([])
  const navigate = useNavigate();
const{state,dispatcher} =useContext(LogibContext,instialState)
const handleClick =()=>{
     postUser( mobile,
    email,
    firstname,
    lastname,navigate,dispatcher)
}


  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 mobile={mobile} setMobile={setMobile} /> : step === 2 ? <Form2 mobile={mobile}  setUser={setUser} user={user}  /> : <Form3 mobile={mobile}  email={email} setEmail={setEmail} firstname={firstname} setFirstname={setFirstname} lastname={lastname} setlastname={setlastname} />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    
                  })
                  handleClick()
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}