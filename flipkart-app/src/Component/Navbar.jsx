import { Search2Icon } from '@chakra-ui/icons'

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
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Become a seller', 'More', 'Team' ];

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
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('blue.400')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
          <HStack spacing={8} alignItems={'center'}>
            <Box ml="250px"  w="50px" h="50px"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2DAqDI_bCUv59V0fKRl4gC5prkJQ4uizqw&usqp=CAU" /></Box>
           <Box w="390px" display="flex"  bg="white"><Input w="350px" placeholder="Search Products here"  bg="white" border="none"  baseStyle="none"  /><Search2Icon mt="10px" fontSize="20px" color="blue"/></Box> 
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
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
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
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
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
     
     
      <Box p={4}>Main Content Here</Box>
    </>
  );
}