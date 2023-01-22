import { Heading ,Box ,Image,Text,Button,MenuList,MenuItem,MenuDivider, useDisclosure,Menu,} from "@chakra-ui/react";
import {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import {ChevronDownIcon} from '@chakra-ui/icons'
export default function Watche(){
    const { isOpen, onOpen, onClose } = useDisclosure();
const[watchdata,setwatchdata]=useState([])
const[val,setval]=useState("")
useEffect(()=>{
    getData()
},[val])

const getData = ()=>{
    axios.get(`http://localhost:8080/Watches?_sort=price&_order=${val}`)
    .then((res)=>setwatchdata(res.data))
   
   }

const handleSort = (val)=>{
    console.log(val)
    setval(val)
  
    
 
 }
    return <>
    
  
    {/* {watchdata.map((e)=> */}


<Box  display="flex" justifyContent={"space-between"} gap="10px" padding="10px">

    
       
       
        
<Box w="25%" h="auto" shadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">

<Box  shadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"  w="100%" h="100px" display={"flex"} justifyContent="space-evenly" padding="25px">
    <Button bg="green.500" color="white" w="100px" onClick={()=>handleSort('asc')}>ASC</Button>
    <Button  bg="green.500" color="white" w="100px" onClick={()=>handleSort('desc')}>DSC</Button>
</Box>
<Box   w="100%" h="500px">

    <Box  shadow="rgba(17, 17, 26, 0.1) 0px 1px 0px" w="100%" h="50px" ><Heading padding="15px" fontWeight={"500"} color="gray.600" textAlign={"start"} as='h5' size='sm'>BRAND <ChevronDownIcon ml="152px" /></Heading></Box>
    <Box shadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"   w="100%" h="50px" ><Heading padding="15px" fontWeight={"500"} color="gray.600" textAlign={"start"} as='h5' size='sm'>DIAL SHAPE <ChevronDownIcon ml="210px" mt="-30px"/></Heading></Box>
    <Box shadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"   w="100%" h="50px" ><Heading padding="15px" fontWeight={"500"} color="gray.600" textAlign={"start"} as='h5' size='sm'>DISPLAY SIZE <ChevronDownIcon ml="210px" mt="-30px"/></Heading></Box>
    <Box shadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"   w="100%" h="50px" ><Heading padding="15px" fontWeight={"500"} color="gray.600" textAlign={"start"} as='h5' size='sm'>DISCOUNT <ChevronDownIcon ml="210px" mt="-30px"/></Heading></Box>
    <Box shadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"  w="100%" h="50px"><Heading padding="15px" fontWeight={"500"} color="gray.600" textAlign={"start"} as='h5' size='sm'>CUSTOMER RATING <ChevronDownIcon ml="210px" mt="-30px"/></Heading></Box>
    <Box shadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"  w="100%" h="50px"><Heading padding="15px" fontWeight={"500"} color="gray.600" textAlign={"start"} as='h5' size='sm'>DISPLAY TYPE <ChevronDownIcon ml="210px" mt="-30px" textAlign={'center'}/></Heading></Box>
   
</Box>
</Box>


<Box w="100%" shadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" >
{watchdata.map((e)=> 
<Box w="100%"     h="450px"shadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" display="flex" justifyContent={"space-between"} gap="10px" paddingBottom={"-10px"}>
   <Box w="25%" h="auto" padding="30px"><Image src={e.img}/></Box>
       <Box w="50%" h="auto" >

         
           <Heading   _hover={{
           color: 'blue.600',
         }} fontWeight={"600"} padding="15px" textAlign={"start"} as='h4' size='md'>  <Link to={`/single3/${e.id}`}  >Noise ColorFit Caliber Smart Watch with 15-day battery, 1.69" display, 60 Sports Modes Smartwatch  (Blue Strap, Regular)</Link></Heading>
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
        4.2
       </Button>      <Heading mt="3px" fontWeight={"600"} color="gray" as='h6' size='xs'>2,57,988 Ratings & 25,084 Reviews</Heading></Box>
          
           <Box padding="33px"paddingTop={"6px"} paddingBottom="5px">  
          <ul >
           <li > <Text  textAlign={"start"}>4.2 cm (1.69") LCD full touch screen</Text>
         </li>
         <li>  <Text  textAlign={"start"}>4.2 cm (1.69") LCD full touch screen</Text></li>
         
         <li> <Text   textAlign={"start"}>150+ customizable and cloud based watch faces</Text></li>
         <li> <Text   textAlign={"start"}>60 Sports Mode|Body Temperature senso</Text></li>
         <li><Text  textAlign={"start"}>IP68 water resistant</Text></li>
         <li> <Text   textAlign={"start"}>Quick replies (Android only)</Text></li>
         <li>  <Text  textAlign={"start"}>Blood oxygen, Heart rate monitor, Stress monitor and sleep monitor</Text></li>
         
         <li><Text   textAlign={"start"}>Touchscreen</Text></li>
         <li><Text  textAlign={"start"}>Fitness & Outdoor</Text></li>
         <li> <Text   textAlign={"start"}>Battery Runtime: Upto 15 days</Text></li>
         <li> <Text   textAlign={"start"}>1 Year Manufacturer Warranty</Text></li>
         </ul>
        
          
          
           
          
         
           
           
          
           </Box>
        
        </Box>
       <Box w="25%" h="500px" padding="20px">
           <Heading textAlign={"start"} as='h3' size='lg'>₹{e.price}</Heading>
              <Text color="green" textAlign={"start"}>70% off</Text>
               <Text textAlign={"start"}>Free Delivery</Text>

           <Heading fontWeight={"700"} color="green" textAlign={"start"} as='h5' size='sm'>Top Discount On sale Bank offer</Heading>

       </Box>
 
   </Box>
)}
</Box>
   
  
</Box>
    {/* )} */}


    </>
}








            
























            