import { useRef } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react'
import { Authcontext } from '../Context/AuthContext'

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
import Home from './Home';
import { useState,useEffect } from 'react';


import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Navigate } from 'react-router-dom';

 const Login=()=>{
  const name=useRef(' ')
 
  
 
  const email=useRef(' ')
  const pass=useRef(' ')
  const [showPassword, setShowPassword] = useState(false);
  

 
  const handleclick=()=>{
   //console.log("login")
    
    const Pass=pass.current.value
    const Email=email.current.value

    let email1 = localStorage.getItem('email')
    let pass1 = localStorage.getItem('pass')

if(Email==email1 && Pass==pass1 ){

  localStorage.setItem( "name",name.current.value);

  toast.success("login successfully")

  setInterval(function () {window.location.href = "/"}, 400);
  
}

else if(Pass!=pass){
  toast.error("Wrong credentials")
}else if(Email!=email){
  alert("Email is not match")
}

  
}


  return (
    <>
   
      
    <Flex
   
 
      minH={'10vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
          
      <Stack spacing={8} mx={'auto'}  w="30%" py={12} px={6}>
     
        <Stack align={'center'}>
        <Toaster/>
          <Heading fontSize={'3xl'} textAlign={'center'} color="gray.600">
          LOGIN IN
          </Heading>
         
        </Stack>
        <Box 
        w="100%"
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="firstName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" ref={name} />
                  </FormControl>
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
             Login In
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                New user? <Link  color={'blue.400'} onClick={()=> window.location.href = "/signup"}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
   

   


    </>
  )
 
}



export default Login;