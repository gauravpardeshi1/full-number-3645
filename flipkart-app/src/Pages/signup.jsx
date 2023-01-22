import toast, { Toaster } from 'react-hot-toast';

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  
  import axios from 'axios'
  import { useRef } from 'react';
  import { useState,useEffect } from 'react';
  import { useNavigate } from "react-router-dom";
  import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Navigate } from 'react-router-dom';

  export default function SignupCard() {
    const name=useRef(' ')
    const surname=useRef(' ')
    const email=useRef(' ')
    const pass=useRef(' ')
    const [showPassword, setShowPassword] = useState(false);
    const[auth,setauth]=useState(false)

   
    const handleclick= async()=>{
      setauth(true)
      const Name=name.current.value +" " +surname.current.value
      const Pass=pass.current.value
      const Email=email.current.value
 
 
  
  if(Name=="" ){
    toast.error("please fill the name")
  }
  else if(Pass==""){
    toast.error("please fill the password")
  }
  else if(Email==""){
    toast.error("please fill the email")
  }
  else{
    
    localStorage.setItem( "email",Email);
    localStorage.setItem( "pass",Pass);
    toast.success("Signup successfully")
   
    setInterval(function () {window.location.href = "/login"}, 400);
  }
    
  }
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }

    return (
        
      <Flex

        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
            
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
          <Toaster/>
            <Heading fontSize={'3xl'} textAlign={'center'} color="gray.600">
              SIGN UP
            </Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" ref={name} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text"  ref={surname}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"  ref={email}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  ref={pass}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button onClick={handleclick}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link  color={'blue.400'} onClick={()=> window.location.href = "/login"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

     



    );
  }