import { Heading ,Box ,Image,Text,Button,MenuList,MenuItem,MenuDivider, useDisclosure,Menu,} from "@chakra-ui/react";
import axios from "axios";
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useContext } from 'react'
import { Authcontext } from '../Context/AuthContext'
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const getdata=(id)=>{
  return fetch(`https://kind-cyan-snapper-hose.cyclic.app/watches/${id}`).then((res)=> res.json())
}

export default function SingleProduct3(){
  const{val}=useContext(Authcontext)
   const [Data,setData]=useState({})
   let params=useParams()
   // console.log(params)
   const newdata=(id)=>{
     getdata(id).then((data)=> 
     
     setData(data))

   }
    useEffect(()=>{
     newdata(params.user_id)
    },[params.user_id])
    const Name=Data.title
    const Img =Data.img 
    const Price =Data.price
    const addcart=()=>{
      console.log(val)
      toast.success("Product added to cart")
        axios.post('https://kind-cyan-snapper-hose.cyclic.app/cart', {
            title: "Noise ColorFit Caliber Smart Watch with 15-day battery, 1.69 display, 60 Sports Modes Smartwatch (Blue Strap, Regular)",
            price: Price,
            img:Img
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    console.log(val)

   return <> 
   <Toaster/>
   <Box bg="gray.500" h="50px" > <Heading paddingTop={"12px"}  as='h3' size='md' color="white"> DESCRIPTION PAGE OF THE PRODUCT</Heading></Box>
 
  
 <Box w="100%" m="auto"  mt="20px" h="400px"shadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" display="flex" justifyContent={"space-between"} gap="10px" paddingBottom={"-10px"}>
   <Box w="35%" h="auto" padding="10px" ml="30px" ><Image mt="30px" src={Data?.img}/>
  <Box  mt="70px" padding="30px" mr="70px" display="flex" justifyContent={"space-evenly"} gap="10px"> <Button
              w="130px"
             marginTop={"5px"}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'orange'}
              href={'#'}
              _hover={{
                bg: 'green.100',
              }}
             onClick={addcart}
              >
            Add To Cart
            </Button> <Button
              w="130px"
             marginTop={"5px"}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'orange.500'}
              href={'#'}
              _hover={{
                bg: 'green.100',
              }}>
              Buy Now
            </Button></Box>
   </Box>
    
    
       <Box w="50%" h="auto" >

         
           <Heading   _hover={{
           color: 'blue.600',
         }} fontWeight={"600"} padding="15px" textAlign={"start"} as='h4' size='md' >Noise ColorFit Caliber Smart Watch with 15-day battery, 1.69" display, 60 Sports Modes Smartwatch (Blue Strap, Regular)</Heading>
          <Box  display="flex" > <Button
         w="50px"
         h="25px"
         marginRight={"5px"}
        marginLeft="10px"
        
         fontSize={'sm'}
         fontWeight={600}
         color={'white'}
        borderRadius="0.2rem"
         bg={'green.400'}
        
         _hover={{
           bg: 'green.100',
         }}>
        4.4
       </Button>      <Heading mt="3px" fontWeight={"600"} color="gray" as='h6' size='xs'>2,57,988 Ratings & 25,084 Reviews</Heading></Box>
          
           <Box padding="33px"paddingTop={"6px"} paddingBottom="5px">  
          <ul >
           <li > <Text  textAlign={"start"}       >Operating System: Android (Google Assistant & Chromecast in-built)</Text>
         </li>
         <li>  <Text  textAlign={"start"}>Resolution: HD Ready 1366 x 768 Pixels</Text></li>
         
         <li> <Text   textAlign={"start"}>Sound Output: 20 W</Text></li>
         <li> <Text   textAlign={"start"}>Refresh Rate: 60 Hz</Text></li>
         <li> <Text   textAlign={"start"}>Bank Offer10% off on Citi Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹5,000 and above</Text></li>
         <li> <Text   textAlign={"start"}>Bank OfferGet additional ₹1000 off on Debit/Credit Card and EMI transactionsT&C</Text></li>
         <li> <Text   textAlign={"start"}>Bank Offer10% off on ICICI Bank Credit Card Transactions, up to ₹1250. On orders of ₹5000 and aboveT&C</Text></li>
         <li> <Text   textAlign={"start"}>Partner OfferBuy this product and get upto ₹500 off on Flipkart FurnitureKnow More</Text></li>
         
         </ul>
        
          
          
           
          
         
           
           
          
           </Box>
        
        </Box>
       <Box w="25%" h="500px" padding="20px">
           <Heading textAlign={"start"} as='h3' size='lg'  >{Data?.price}</Heading>
              <Text color="green" textAlign={"start"}>70% off</Text>
               <Text textAlign={"start"}>Free Delivery</Text>

           <Heading fontWeight={"700"} color="green" textAlign={"start"} as='h5' size='sm'>Top Discount On sale Bank offer</Heading>
          
          
       </Box>
 
   </Box>


   
    </>
}