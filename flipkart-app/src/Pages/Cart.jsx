import {Heading ,Box,Image,Button,Text} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import axios from 'axios';

import {AddIcon,MinusIcon} from '@chakra-ui/icons'
export default function Cart(){
  
const [cartdata,setcartdata]=useState([])

const[quantity,setquantity]=useState(1)
   
   const getdata=()=>{
      axios.get('https://kind-cyan-snapper-hose.cyclic.app/cart')
      .then((res)=>setcartdata(res.data) )
     
   }


   useEffect(()=>{
      getdata()


    },[])
   //console.log(cartdata)
    let sum=0
   for (let i=0; i<cartdata.length; i++){
       sum+=cartdata[i].price
   }
   // console.log(sum)
   
   let total=sum*quantity
   let dis=Math.floor(total-(total/10))
  
   return <> 
   {/* **********Main Box********** */}
   
   <Box bg="gray.500" h="50px" > <Heading paddingTop={"12px"}  as='h3' size='md' color="white"> CART SECTION</Heading></Box>


   
    
   <Box>
     
  
     <Box display="flex"  padding="40px"  gap="30px">
     <Box   w="70%"  shadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"  padding="30px">
    {cartdata.map((e)=>  
     <Box   h="250px" display={"flex"} shadow="rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset" >
        <Box  w="30%" h="100%" padding="25px" paddingTop="40px">
           <Image src={e.img}/>
           <Button
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
      </Button>
        </Box >
        <Box textAlign={"start"} w="70%" h="100%" padding="20px" paddingTop="40px" >

        
        <Heading as='h4' size='md' textAlign={"start"}>{e.title}</Heading>
        <Heading textAlign={"start"} ml="30px"  mt="10px"as='h3' size='lg'  >₹{e.price}</Heading>
       <Box display={"flex"} gap="20px" ml="25px" mt="50px">
       
        <Button  color={'white'}
       borderRadius="0.2rem"
        bg={'red.500'} w="20%" onClick={  async()=>  await axios.delete(`https://kind-cyan-snapper-hose.cyclic.app/cart/${e.id}`).then((res)=>getdata() )  }   >Remove</Button>
        
        <Button w="30%" color={'white'}
       borderRadius="0.2rem"
        bg={'green.400'}>Buy Now</Button>
        
        <Box  display="flex" justifyContent={"space-evenly"} padding="10px" gap="10px"  >
           <MinusIcon  mt="5px"  onClick={()=>  setquantity(quantity-1) }   />
           <Heading  as='h4' size='md'>{quantity}</Heading>
           <AddIcon  mt="5px" onClick={()=>  setquantity(quantity+1) }    />
        
        </Box>
        
        
        </Box>
        
        </Box>
     </Box>
    
    )}
     </Box>
   
<Box shadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"  w="35%" h="300px" display="flex" justifyContent={"space-evenly"} padding="20px">
   <Box  w="70%" h="500px"padding="10px" ml="10px" >
 <Box w="100%" h="50px" paddingTop={"6px"} > <Heading as='h4' size='md' textAlign={"start"}>PRICE DETAILS</Heading></Box>
 <Box w="100%" h="50px" paddingTop={"6px"} ><Text   textAlign={"start"} fontWeight={500}>Price</Text></Box>
 <Box w="100%" h="50px" paddingTop={"6px"} ><Text textAlign={"start"} fontWeight={500}>Discount</Text></Box>
 <Box w="100%" h="50px" paddingTop={"6px"}  ><Text textAlign={"start"} fontWeight={500}> Delivery Charges</Text></Box>
 <Box w="100%" h="50px" paddingTop={"6px"}   > <Heading as='h4' size='md' textAlign={"start"}>Total Amount
</Heading></Box>
 <Box w="100%" h="50px" ></Box></Box>
   <Box  w="40%" h="500px" padding="10px" >
   <Box w="100%" h="50px" paddingTop={"6px"} > <Heading as='h4' size='md' textAlign={"start"}></Heading></Box>
 <Box w="100%" h="50px" paddingTop={"6px"} ><Text   textAlign={"start"} fontWeight={500}>₹ {total}</Text></Box>
 <Box w="100%" h="50px" paddingTop={"6px"}  ><Text color="green" textAlign={"start"} fontWeight={500}>10% off</Text></Box>
 <Box w="100%" h="50px" paddingTop={"6px"}  ><Text color="green" textAlign={"start"} fontWeight={500}>Free</Text></Box>
 <Box w="100%" h="50px" paddingTop={"6px"}  > <Heading as='h4' size='md' textAlign={"start"}>₹ {dis}
</Heading></Box>
   </Box>
 
</Box>

     </Box>

     

      
   </Box>
   

    </>
}























{/* <Button  disabled w="5px" h="35px" border="1px solid red" bg="none" onClick={()=> setquantity(quantity-1)}>-1</Button><Button border="1px solid red" bg="none" w="5px" h="35px">{quantity}</Button><Button w="5px" border="none" bg="none" h="35px"  border="1px solid red" onClick={()=> setquantity(quantity+1)}>+1</Button> */}