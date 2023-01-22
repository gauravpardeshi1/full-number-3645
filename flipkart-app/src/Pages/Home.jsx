import { Avatar, Box ,Text,Image,Heading ,Button} from '@chakra-ui/react';

import {useState,useEffect} from 'react'
import axios from 'axios';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useContext } from 'react'
import { Authcontext } from '../Context/AuthContext'

import { Navigate } from 'react-router-dom';

import Banner from './Slider ';



function Home(){
  const{isAuth}=useContext(Authcontext)
    const [slider1data,setslider1data]=useState([])
    const [slider2data,setslider2data]=useState([])
    const [slider3data,setslider3data]=useState([])
    const [slider4data,setslider4data]=useState([])
    const [nav,setnav]=useState(false)
    const [nav1,setnav1]=useState(false)
    const [nav2,setnav2]=useState(false)
    useEffect(()=>{
      axios.get('http://localhost:8080/slider1')
      .then((res)=>setslider1data(res.data))
      axios.get('http://localhost:8080/slider2')
      .then((res)=>setslider2data(res.data))
      axios.get('http://localhost:8080/slider3')
      .then((res)=>setslider3data(res.data))
      axios.get('http://localhost:8080/slider4')
      .then((res)=>setslider4data(res.data))


    },[])
  
//  console.log(slider1data)
  
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        },
      };
      const responsive1 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        },
      };
     
     // let navigate1 = useNavigate(); 
      const routeChange1 = () =>{ 
        setnav(true)
       
      }
      const routeChange = () =>{ 
        setnav1(true)
       
      }
      const routeChange2 = () =>{ 
        setnav2(true)
       
      }
      if(nav){
        return <Navigate to="/Electronicproducts"/>
      }
      if(nav1){
        return <Navigate to="/watchesproducts"/>
      }
      if(nav2){
        return <Navigate to="/mobilesproducts"/>
      }
      
      console.log(isAuth)

    return <Box >

<Box shadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px" display="grid" gridTemplateColumns="repeat(9,1fr)" gap="80px" padding="20px 40px 10px 40px"  h="125px">
   
   <Box onClick={routeChange} h="70px" _hover={{
              color:"blue",
                cursor:"pointer"
              }} > <Image h="100%" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100" /><Text    fontWeight={600}>Offers</Text></Box>
     <Box onClick={routeChange2} h="70px"  _hover={{
              color:"blue",
                cursor:"pointer"
              }} >     <Image  h="100%"src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f8bd5669e19e724.png?q=100"/><Text fontWeight={600}>Mobile</Text></Box>
     <Box onClick={routeChange1}  h="70px" _hover={{
              color:"blue",
                cursor:"pointer"
              }}  >  <Image  h="100%"src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/361d53b8725c2d2d.png?q=100"/><Text fontWeight={600}>Electronics</Text></Box>
     <Box  onClick={routeChange1} h="70px"  _hover={{
              color:"blue",
                cursor:"pointer"
              }} >  <Image  h="100%"src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/904f3c8e7101408b.png?q=100"/><Text fontWeight={600}>Appliances</Text></Box>
     <Box   h="70px"  _hover={{
              color:"blue",
                cursor:"pointer"
              }} >  <Image h="100%" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7f7355480c6adc16.png?q=100"/><Text fontWeight={600}>Fashion</Text></Box>
     <Box  h="70px" _hover={{
              color:"blue",
                cursor:"pointer"
              }}  >  <Image h="100%" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f97d6138516056bc.png?q=100"/><Text fontWeight={600}>Beauty</Text></Box>
     <Box  h="70px"  _hover={{
              color:"blue",
                cursor:"pointer"
              }} ><Image h="100%" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6728ed3cf145562c.png?q=100"/><Text fontWeight={600}>Home</Text></Box>
     <Box  h="70px"  _hover={{
              color:"blue",
                cursor:"pointer"
              }} > <Image  h="100%"src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/007910082ae6355b.png?q=100"/><Text fontWeight={600}>Flights</Text></Box>
     <Box  h="70px" _hover={{
              color:"blue",
                cursor:"pointer"
              }} > <Image h="100%" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/46376ceed3448aff.png?q=100"/><Text fontWeight={600}>Grocery</Text></Box>
    </Box>

    {/* ********MainBox Start********** */}
    <Box paddingRight={"10px"} paddingLeft="10px">
   
   <Box  w="100%" h="300px" marginTop={"10px"}> 
   <Banner/>
            </Box>
    <Box   paddingTop={"10px"}paddingBottom={"20px"}>
        <Box    >
           <Image 
             
               m="auto" w="100%" h="300px"src="https://images-static.nykaa.com/uploads/fe3ae51e-028c-47f2-91b8-ddbec3f11e7e.jpg?tr=w-1200,cm-pad_resize"/>
        
            </Box>
            </Box>
            <Box  w="100%" h="300px">
               {/* ********* Carousel-1******* */}

<Box mt ="10px"  w="100%" h="300px" display="flex" justifyContent={"space-between"} shadow="rgba(50, 50,93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" >
    <Box w="17%" h="180px" paddingTop ="20px"shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px">
   <Box marginTop={"50px"} >   <Heading w="70%"  ml='40px' as='h3' size='lg'a>Top offers</Heading></Box>
      <Box>
      <Button 
              w="100px"
             marginTop={"5px"}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              mt="20px"
              color={'white'}
              bg={'blue.600'}
              marginBottom="10px"
              href={'#'}
              _hover={{
                bg: 'green.800',
              }}>
            View All
            </Button>
            </Box>
            <Box bg="green" h="70%" ></Box>
      </Box>
    <Box w="60%" paddingTop="10px"> 

  
     <Carousel  responsive={responsive}>
   
  {slider2data.map((e)=>
       <Box _hover={{
        cursor:"pointer"  ,     
        transform: "scale(1.06)"
      }}   >
        <Box w="170px" h="170px" padding="5px" 
        >  <Image w="100%" h="100%" ml="5px"src={e.img}/></Box>
      
       <Box  h="100px" padding="10px">
        <Heading as='h6' size='xs'>{e.title}</Heading>
       <Text color="green">{e.price}</Text>
                <Text color="gray">{e.des}</Text></Box>
       
       </Box>
  )}
 
  
  
   
  
 </Carousel>
 </Box>
 <Box w="17%"  shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px">
 <Image w="95%" h="95%" src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/75d268757cae49bf.jpeg?q=70"/>
 </Box>
 
</Box>




            </Box>
            <Box mt="10px"  w="100%" h="500px" display="grid" gridTemplateColumns="repeat(3,1fr)"   >
            <Box  w="1320px" h="500px" paddingLeft={"5px"} display="grid" gridTemplateColumns="repeat(3,1fr)" gap="20px" >
<Box> <Image _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)",
               shadow:" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
             }} src="https://images-static.nykaa.com/uploads/88a7cc59-5262-4ef2-8e2f-5c8d9475c47e.jpg?tr=w-600,cm-pad_resize" alt="" />   </ Box>
<Box><Image _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)",
               shadow:" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
             }} src="https://images-static.nykaa.com/uploads/c8bc8f6b-647b-4dfb-897f-d85330fdc747.jpg?tr=w-600,cm-pad_resize" alt=""/> </Box>
<Box><Image _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)",
               shadow:" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
             }} src="https://images-static.nykaa.com/uploads/2f8eafa3-ba57-42e3-825b-a50c1e478610.jpg?tr=w-600,cm-pad_resize" alt=""/> </Box>
<Box><Image _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)",
               shadow:" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
             }} src="https://images-static.nykaa.com/uploads/1ce2fd26-9ad5-44ba-9099-f9b44f59cc2d.jpg?tr=w-600,cm-pad_resize" alt=""/> </Box>
<Box><Image _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)",
               shadow:" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
             }} src="https://images-static.nykaa.com/uploads/0a66c6fe-084f-42e1-aae7-e6b4286ea20f.gif?tr=w-600,cm-pad_resize" alt=""/> </Box>
<Box><Image  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)",
               shadow:" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
             }}  h="87%" w="110%" src="https://images.meesho.com/images/marketing/1631722939962.webp" alt=""/> </Box>
</Box>
            </Box>

            <Box mt="10px" w="100%" h="auto" display="grid" gridTemplateColumns="repeat(6,1fr)"  paddingTop={"30px"} paddingLeft="40px" shadow="rgba(50, 50,93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">
            <Box    _hover={{
                cursor:"pointer"  ,   
                transform: "scale(1.06)"
              }}   w="160px" h="300px"><Image   w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/b/m/n/8-thar-01-asian-slate-blue-orange-original-imaghcknzyx8zr2x.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Labbin Asin</Heading>
                <Text color="green">From ₹199</Text>
                <Text color="gray">Sport Shoes</Text>
                </Box>
                <Box  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}  w="160px" h="300px"><Image w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/xif0q/jacket/8/n/c/xxl-sfjckt6149-sassafras-original-imafwyyf9yrkerhh-bb.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Never Offer before</Heading>
                <Text color="green">Min 30% off</Text>
                <Text color="gray">Jacket</Text>
                </Box>
                <Box _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"   h="210px"src="https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/i/i/t/8-hl-wv-001270-42-highlander-white-original-imaghfyzkmzq8wsz.jpeg?q=70"/>
                <Heading as='h6' size='xs'>ADDIUS PUMA</Heading>
                <Text color="green">Min 15% off</Text>
                <Text color="gray">Sport Shoes</Text>
                </Box>
                <Box  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%" h="210px" src="https://rukminim1.flixcart.com/image/200/200/l44hyfk0/sari/v/d/s/free-orwv5792-belt-chhabra-555-unstitched-original-imagf3kd73r8bbdp.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Wedding Sarres</Heading>
                <Text color="green">Min 35% off</Text>
                <Text color="gray">Banarasi</Text>
                </Box>
                <Box  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/jwqpocw0/t-shirt/j/w/z/m-fmts8273-flying-machine-original-imafhd87dbpancde.jpeg?q=70"/>
                <Heading as='h6' size='xs'>SAREES</Heading>
                <Text color="green">Start ₹350</Text>
                <Text color="gray">Proffesional</Text>
                </Box>
                <Box  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"  h="210px"  src="https://rukminim1.flixcart.com/image/200/200/l1nwnm80/sari/e/b/a/free-2267s101b-saara-unstitched-original-imagd6hvjtmhwueg.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Sarees</Heading>
                <Text color="green">Min 45% off</Text>
                <Text color="gray">Wedding</Text>
                </Box>
            </Box>
            <Box mt="10px"w="100%" h="auto" display="grid" gridTemplateColumns="repeat(6,1fr)"  paddingTop={"30px"} paddingLeft="40px" shadow="rgba(50, 50,93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">
                <Box  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}    w="160px" h="300px"><Image   w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/kvba7bk0/shoe/x/b/p/-original-imag88gaxkksgrnp.jpeg?q=70"/>
                <Heading as='h6' size='xs'>ADDIUS PUMA</Heading>
                <Text color="green">Min 15% off</Text>
                <Text color="gray">Sport Shoes</Text>
                </Box>
                <Box  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/k7dnonk0/t-shirt/3/9/h/l-11012234-hrx-by-hrithik-roshan-original-imafpmhbueehv2pk.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Ti -Shirts</Heading>
                <Text color="green">Min 30% off</Text>
                <Text color="gray">Sport </Text>
                </Box>
                <Box  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"   h="210px"src="https://rukminim1.flixcart.com/image/200/200/xif0q/trouser/o/3/j/32-maw21ct301i-metronaut-original-imag8vfqwu5xnzkc-bb.jpeg?q=70"/>
                <Heading as='h6' size='xs'>ADDIUS PUMA</Heading>
                <Text color="green">Min 15% off</Text>
                <Text color="gray">Sport Shoes</Text>
                </Box>
                <Box  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%" h="210px" src="https://rukminim1.flixcart.com/image/200/200/kqgyhe80/shirt/e/7/k/m-men-slim-fit-solid-mandarin-collar-casual-shirt-juhil-bazar-original-imag4h5nphqhwh9h.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Shirts</Heading>
                <Text color="green">Min 35% off</Text>
                <Text color="gray">Trending</Text>
                </Box>
                <Box  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/xif0q/sari/d/x/o/free-al-almaari-237-orange-avantika-fashion-unstitched-original-imaggzz8xpasewpb.jpeg?q=70"/>
                <Heading as='h6' size='xs'>SAREES</Heading>
                <Text color="green">Start ₹350</Text>
                <Text color="gray">Proffesional</Text>
                </Box>
                <Box  _hover={{
                cursor:"pointer"  ,   
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"  h="210px"  src="https://rukminim1.flixcart.com/image/200/200/xif0q/short/w/i/r/l-solid-men-dark-blue-shorts-adrenex-original-imaghvhr2zvbgp6t.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Short</Heading>
                <Text color="green">Min 25% off</Text>
                <Text color="gray">Sport </Text>
                </Box>
                
                
            </Box>

            <Box mt="10px"  w="100%" h="250px" display="grid" gridTemplateColumns="repeat(3,1fr)" >
            <Box  w="1320px" h="500px" paddingLeft={"5px"} display="grid" gridTemplateColumns="repeat(3,1fr)" gap="20px" >
<Box> <img src="https://images-static.nykaa.com/uploads/78882d64-589e-4759-afe1-90b56d2593c8.jpg?tr=w-600,cm-pad_resize" alt="" />   </ Box>
<Box><Image src="https://images-static.nykaa.com/uploads/6488fa68-0be2-482f-ac2c-61935e41c2cc.gif?tr=w-600,cm-pad_resize" alt=""/> </Box>
<Box><Image  src="https://images-static.nykaa.com/uploads/4b3d2f2b-3c2a-4d50-bd67-d578055dac40.jpg?tr=w-600,cm-pad_resize" alt=""/> </Box>

</Box>
            </Box>


 {/* ********* Carousel-2******* */}

<Box mt ="10px"  w="100%" h="300px" display="flex" justifyContent={"space-between"} shadow="rgba(50, 50,93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">
    <Box w="17%" mt="20px" shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px">
      <Heading w="70%"   ml='40px'mt="20px" as='h3' size='lg'a>Best of Electronis</Heading>
      <Button 
              w="130px"
             marginTop={"5px"}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              mt="60px"
              color={'white'}
              bg={'blue.600'}
              href={'#'}
              _hover={{
                bg: 'green.800',
              }}>
              View All
            </Button>
      </Box>
    <Box w="80%"> 

  
     <Carousel  responsive={responsive1}>
   
  {slider1data.map((e)=>
       <Box _hover={{
        cursor:"pointer"  ,        
        transform: "scale(1.06)"
      }}   >
        <Box h="200px" padding="10px"  onClick={routeChange}
        >  <Image h="100%" ml="5px"src={e.img}/></Box>
      
       <Box  h="100px" padding="10px">
        <Heading as='h6' size='xs'>{e.title}</Heading>
       <Text color="green">{e.price}</Text>
                <Text color="gray">{e.des}</Text></Box>
       
       </Box>
  )}
 
  
  
   
  
 </Carousel>
 </Box>
 
</Box>

<Box mt="10px"  w="100%" h="250px" display="grid" gridTemplateColumns="repeat(3,1fr)" >
            <Box  w="1320px" h="500px" paddingLeft={"5px"} display="grid" gridTemplateColumns="repeat(3,1fr)" gap="20px" >
<Box> <img src="https://images-static.nykaa.com/uploads/a347c589-a317-4e47-b6cc-3da12019048e.jpg?tr=w-400,cm-pad_resize" alt="" />   </ Box>
<Box><Image src="https://images-static.nykaa.com/uploads/2162e758-1aa6-4663-9f11-be2013e2f3cd.jpg?tr=w-400,cm-pad_resize" alt=""/> </Box>
<Box><Image  src="https://images-static.nykaa.com/creatives/cd024e6f-a9d4-4db1-81e5-fa68e85534aa/default.jpg?tr=w-400,cm-pad_resize" alt=""/> </Box>

</Box>
            </Box>
{/* ********* Carousel-3******* */}

<Box mt ="10px"  w="100%" h="300px" display="flex" justifyContent={"space-between"} shadow="rgba(50, 50,93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">
    <Box w="17%" mt="20px" shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px">
      <Heading w="70%"   ml='40px'mt="20px" as='h3' size='lg'a>Best Fashion Brand For you</Heading>
      <Button 
              w="130px"
             marginTop={"5px"}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              mt="60px"
              color={'white'}
              bg={'blue.600'}
              href={'#'}
              _hover={{
                bg: 'green.800',
              }}>
              View All
            </Button>
      </Box>
    <Box w="80%"> 
   
  
     <Carousel  responsive={responsive1}>
   
  {slider3data.map((e)=>
       <Box _hover={{
        cursor:"pointer"  , 
        transform: "scale(1.06)"
      }}   >
        <Box h="200px" padding="10px" 
        >  <Image h="100%" ml="5px"src={e.img}/></Box>
      
       <Box  h="100px" padding="10px">
        <Heading as='h6' size='xs'>{e.title}</Heading>
       <Text color="green">{e.price}</Text>
                <Text color="gray">{e.des}</Text></Box>
       
       </Box>
  )}
 
  
  
   
  
 </Carousel>
 </Box>
 
</Box>


{/* ********* Carousel-4******* */}

<Box mt ="10px"  w="100%" h="300px" display="flex" justifyContent={"space-between"} shadow="rgba(50, 50,93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">
    <Box w="17%" mt="20px" shadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px">
      <Heading w="70%"   ml='40px'mt="20px" as='h3' size='lg'a>TV'S and Appliances</Heading>
      <Button 
              w="130px"
             marginTop={"5px"}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              mt="60px"
              color={'white'}
              bg={'blue.600'}
              href={'#'}
              _hover={{
                bg: 'green.800',
              }}>
              View All
            </Button>
      </Box>
    <Box w="80%"> 

  
     <Carousel  responsive={responsive1}>
   
  {slider4data.map((e)=>
       <Box _hover={{
        cursor:"pointer"  ,       
        transform: "scale(1.06)"
      }}   >
        <Box h="200px" padding="10px" onClick={routeChange1}
        >  <Image w="80%" h="80%" ml="5px"src={e.img}/></Box>
      
       <Box  h="100px" padding="10px">
        <Heading as='h6' size='xs'>{e.title}</Heading>
       <Text color="green">{e.price}</Text>
                <Text color="gray">{e.des}</Text></Box>
       
       </Box>
  )}
 
  
  
   
  
 </Carousel>
 </Box>
 
</Box>


    

{/* *********Auto Slider********* */}
    <Box  w="100%" h="290px" bg="gray.800" display="flex"  gap="0px" padding="10px">
      <Box  color="white" h="100%" w="15%" padding="25px" >

        <Heading as='h6' size='xs' fontWeight={500} textAlign={"start"}   _hover={{
               
                cursor:"pointer"
              }} >ABOUT</Heading>
        <Heading _hover={{
               
                cursor:"pointer"
              }}  as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Contact Us</Heading>
        <Heading  _hover={{
                
                cursor:"pointer"
              }} as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">About Us</Heading>
        <Heading _hover={{
               
                cursor:"pointer"
              }}  as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Careers</Heading>
        <Heading _hover={{
               
                cursor:"pointer"
              }}  as='h6' size='xs' fontWeight={400}textAlign={"start"} mt="7px">Flipkart Stories</Heading>
        <Heading  _hover={{
             
                cursor:"pointer"
              }} as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Press</Heading>
        <Heading _hover={{
              
                cursor:"pointer"
              }}  as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Flipkart</Heading>
        <Heading  _hover={{
               
                cursor:"pointer"
              }} as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Wholesale</Heading>
        <Heading _hover={{
                
                cursor:"pointer"
              }} as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Corporate</Heading>
        <Heading _hover={{
              
                cursor:"pointer"
              }} as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Information</Heading>
      </Box>
      <Box color="white"  h="100%" w="15%" padding="25px" _hover={{
                
                cursor:"pointer"
              }} >
        <Heading as='h6' size='xs' fontWeight={500} textAlign={"start"} >HELP</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Payments</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Shipping</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Cancellation</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Returns</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">FAQ</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Report</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Infrigement</Heading>
      </Box>
      <Box  color="white"  h="100%" w="15%" padding="25px" _hover={{
               
                cursor:"pointer"
              }} >

        <Heading as='h6' size='xs' fontWeight={500} textAlign={"start"} >POLICY</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Return policy</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Terms of Use</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Sequrity</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px"> Privicy</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Sitemap</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">EPR Compliance</Heading>
      </Box>
      <Box  color="white"  h="100%" w="15%" padding="25px" _hover={{
                
                cursor:"pointer"
              }} >

        <Heading as='h6' size='xs' fontWeight={500} textAlign={"start"}>Social</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Facebook</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Twitter</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">YouTube</Heading>
      </Box>
      <Box  color="white"  h="100%" w="15%" padding="25px"  _hover={{
                color: 'lightblue',
                cursor:"pointer"
              }}>
        <Heading as='h6' size='xs' fontWeight={500} textAlign={"start"}>Mail Us</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Flipkart Internert private</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Building Alyssa</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Clove Embassy Tech</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Outer Ring Road</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Benglaure,5601103</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Karnataka,India</Heading>
      </Box>
      <Box  color="white"  h="100%" w="17%" padding="25px" _hover={{
                
                cursor:"pointer"
              }} >

        <Heading as='h6' size='xs' fontWeight={400}textAlign={"start"} >Flipkart Internet Privet Limited</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Building Alyssa Begonia</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Outer Ring Road</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Bangaluru 560103</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">Karnatka India</Heading>
        <Heading as='h6' size='xs' fontWeight={400} textAlign={"start"} mt="7px">CIN:U51109KA2012PTC066107</Heading>
        <Heading as='h6' size='xs' fontWeight={400}  textAlign={"start"} mt="7px">Telephone : 004-4561 47000</Heading>
        
      </Box>
     
    {/* <App1/> */}
  
    </Box>

    
          
    <Box borderTop="1px solid gray" w="100%" h="70px" display="flex" justifyContent={"space-evenly"} bg="gray.800" color="white" paddingTop={"20px"}>
        <Box w="20%" h="100%"  ><Heading as='h5' size='sm' fontWeight={500}   _hover={{
                color: 'lightblue',
                cursor:"pointer"
              }}>Become a seller</Heading></Box>
        <Box w="20%" h="100%"   _hover={{
                color: 'lightblue',
                cursor:"pointer"
              }}><Heading as='h5' size='sm' fontWeight={500}>Advertise</Heading></Box>
        <Box w="20%" h="100%"  _hover={{
                color: 'lightblue',
                cursor:"pointer"
              }} ><Heading as='h5' size='sm' fontWeight={500}>Gift Card</Heading></Box>
        <Box w="20%" h="100%"  _hover={{
                color: 'lightblue',
                cursor:"pointer"
              }} ><Heading as='h5' size='sm' fontWeight={500}>Help Center</Heading></Box>
        <Box w="20%" h="100%" _hover={{
                color: 'lightblue',
                cursor:"pointer"
              }} ><Heading as='h5' size='sm' fontWeight={500}>2007 -2023 Flipkart.com</Heading></Box>
        <Box w="45%" h="100%" paddingLeft="10px"  ><Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"/></Box>
      </Box>



{/* *********Main Box End********* */}
    </Box>

    
    </Box>
}

export default Home;