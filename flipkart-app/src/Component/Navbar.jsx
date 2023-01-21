import { Search2Icon } from '@chakra-ui/icons'
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'


import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Text,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Navigate } from 'react-router-dom';

const Links = ['Become a seller', 'More', 'Cart' ];

const NavLink = ({ children }) => (
  <Link
  fontWeight={600}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/cart'}>
    {children}
  </Link>
);

export default function Navbar() {
   
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login,setlogin]=useState(false)
  
  const login1=()=>{
   setlogin(true)
  }
  if(login){
   return  <Navigate to="/"/>
   }
   
  
  return (
    <>
      <Box bg={('blue.400')} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
          <HStack spacing={8} alignItems={'center'}>
            <Box ml="250px"  w="50px" h="50px" > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoD94XDfvj9BmL6IA0Svzisv6poq3NNOX9g&usqp=CAU" /></Box>
           <Box w="400px"  display="flex"  bg="white"><Input w="100%" placeholder="Search for Products Brands & more" borderRadius={"0rem"} bg="white"  paddingLeft={"35px"} /><Search2Icon position={"absolute"} mt="12px" ml="5px" fontSize="18px" color="blue"/></Box> 
           <Menu   isOpen={isOpen}>
            <MenuButton 
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
               
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
              <Button  
              w="100px"
             marginTop={"5px"}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'blue'}
              bg={'white'}
              href={'#'}
              _hover={{
                bg: 'green.100',
              }}>
              Login 
            </Button>
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            <MenuItem>New Customer?<Text ml="10px" fontWeight={500} color="blue" > <Link to={`/login`}>Sign Up</Link></Text></MenuItem>
                <MenuDivider />
                <MenuItem>My Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Flipcart Plus Zone</MenuItem>
                <MenuDivider />
                <MenuItem>Orders</MenuItem>
                <MenuDivider />
                <MenuItem>Wishlist</MenuItem>
                <MenuDivider />
                <MenuItem>Rewards</MenuItem>
                <MenuDivider />
                <MenuItem>Gift Card</MenuItem>
              
                
            </MenuList>
        </Menu>
            
            <HStack 
              color="white"
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => ( */}
             <NavLink  >Become a seller</NavLink>
             <NavLink  >More</NavLink>
             <NavLink >Cart</NavLink>
              {/* // ))} */}
              
            </HStack>
          </HStack>
          <Flex alignItems={'center'} marginRight="30px">
          <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              <Avatar 
                  size={'sm'}
                  src={
                    'https://media.licdn.com/dms/image/D5603AQGopbg0SN2XkQ/profile-displayphoto-shrink_100_100/0/1672951836707?e=1679529600&v=beta&t=QxbebalxSFJ-ZFBQKWY2NBfJr0bjvKUkeu40NkpM8nE'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
     
   
    </>
  );
}