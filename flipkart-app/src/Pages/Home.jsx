import { Avatar, Box ,Text,Image,Heading} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return <>

<Box border="1px solid red" display="grid" gridTemplateColumns="repeat(9,1fr)" gap="80px" padding="20px 30px">
   
   <Box> <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100" size="20px" /><Text    fontWeight={600}>Top offers</Text></Box>
     <Box>     <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f8bd5669e19e724.png?q=100"/><Text fontWeight={600}>Mobile & Tablets</Text></Box>
     <Box>  <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/361d53b8725c2d2d.png?q=100"/><Text fontWeight={600}>Electronics</Text></Box>
     <Box>  <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/904f3c8e7101408b.png?q=100"/><Text fontWeight={600}>TV Appliances</Text></Box>
     <Box>  <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7f7355480c6adc16.png?q=100"/><Text fontWeight={600}>Fashion</Text></Box>
     <Box>  <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f97d6138516056bc.png?q=100"/><Text fontWeight={600}>Beauty</Text></Box>
     <Box><img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6728ed3cf145562c.png?q=100"/><Text fontWeight={600}>Home & Furniture</Text></Box>
     <Box> <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/007910082ae6355b.png?q=100"/><Text fontWeight={600}>Flights</Text></Box>
     <Box> <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/46376ceed3448aff.png?q=100"/><Text fontWeight={600}>Grocery</Text></Box>
    </Box>

    {/* ********MainBox Start********** */}
    <Box paddingRight={"10px"} paddingLeft="10px">
   
   <Box  border="1px solid blue" w="100%" h="300px" marginTop={"20px"}> 
   <Carousel>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/8fa1b0a2-80af-4f6d-85f6-9af376c2abf6.jpg?tr=w-1200,cm-pad_resize" />
                   
                </div>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/5642d441-3632-4529-86a8-3febfbeac3b9.jpg?tr=w-1200,cm-pad_resize"/>
                   
                </div>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/a5331485-39ce-4652-8d66-4b3679670a9d.jpg?tr=w-1200,cm-pad_resize" />
                   
                </div>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/f3d93a48-43fa-4a30-b546-98faf39d0492.jpg?tr=w-1200,cm-pad_resize" />
                   
                </div>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/8857bca2-a61e-47bf-9acc-e8cb6ecda223.jpg?tr=w-1200,cm-pad_resize" />
                   
                </div>
            </Carousel></Box>
    <Box mt="10px"  paddingTop={"20px"}paddingBottom={"20px"}>
        <Box  border="1px solid red"  >
           <Image _hover={{
               
               shadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
             
               transform: "scale(1.03)"
             }}  m="auto" w="90%" h="300px"src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Jan_23/Jan_ART/1150x323_GW-editorial._CB615648357_.jpg"/>
        
            </Box>
            </Box>
            <Box mt="10px" border="1px solid red" w="100%" h="300px"></Box>
            <Box mt="10px"  w="100%" h="500px" display="grid" gridTemplateColumns="repeat(3,1fr)" >
            <Box  w="1320px" h="500px" paddingLeft={"5px"} display="grid" gridTemplateColumns="repeat(3,1fr)" gap="20px" >
<Box> <img src="https://images-static.nykaa.com/uploads/88a7cc59-5262-4ef2-8e2f-5c8d9475c47e.jpg?tr=w-600,cm-pad_resize" alt="" />   </ Box>
<Box><Image src="https://images-static.nykaa.com/uploads/c8bc8f6b-647b-4dfb-897f-d85330fdc747.jpg?tr=w-600,cm-pad_resize" alt=""/> </Box>
<Box><Image  src="https://images-static.nykaa.com/uploads/2f8eafa3-ba57-42e3-825b-a50c1e478610.jpg?tr=w-600,cm-pad_resize" alt=""/> </Box>
<Box><Image  src="https://images-static.nykaa.com/uploads/1ce2fd26-9ad5-44ba-9099-f9b44f59cc2d.jpg?tr=w-600,cm-pad_resize" alt=""/> </Box>
<Box><Image  src="https://images-static.nykaa.com/uploads/0a66c6fe-084f-42e1-aae7-e6b4286ea20f.gif?tr=w-600,cm-pad_resize" alt=""/> </Box>
<Box><Image h="90%" w="110%" src="https://images.meesho.com/images/marketing/1631722939962.webp" alt=""/> </Box>
</Box>
            </Box>

            <Box mt="10px" w="100%" h="auto" display="grid" gridTemplateColumns="repeat(6,1fr)"  paddingTop={"30px"} paddingLeft="40px">
            <Box    _hover={{
               
                transform: "scale(1.06)"
              }}   w="160px" h="300px"><Image   w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/b/m/n/8-thar-01-asian-slate-blue-orange-original-imaghcknzyx8zr2x.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Labbin Asin</Heading>
                <Text color="green">From ₹199</Text>
                <Text color="gray">Sport Shoes</Text>
                </Box>
                <Box  _hover={{
               
               transform: "scale(1.06)"
             }}  w="160px" h="300px"><Image w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/xif0q/jacket/8/n/c/xxl-sfjckt6149-sassafras-original-imafwyyf9yrkerhh-bb.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Never Offer before</Heading>
                <Text color="green">Min 30% off</Text>
                <Text color="gray">Jacket</Text>
                </Box>
                <Box _hover={{
               
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"   h="210px"src="https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/i/i/t/8-hl-wv-001270-42-highlander-white-original-imaghfyzkmzq8wsz.jpeg?q=70"/>
                <Heading as='h6' size='xs'>ADDIUS PUMA</Heading>
                <Text color="green">Min 15% off</Text>
                <Text color="gray">Sport Shoes</Text>
                </Box>
                <Box  _hover={{
               
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%" h="210px" src="https://rukminim1.flixcart.com/image/200/200/l44hyfk0/sari/v/d/s/free-orwv5792-belt-chhabra-555-unstitched-original-imagf3kd73r8bbdp.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Wedding Sarres</Heading>
                <Text color="green">Min 35% off</Text>
                <Text color="gray">Banarasi</Text>
                </Box>
                <Box  _hover={{
               
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/jwqpocw0/t-shirt/j/w/z/m-fmts8273-flying-machine-original-imafhd87dbpancde.jpeg?q=70"/>
                <Heading as='h6' size='xs'>SAREES</Heading>
                <Text color="green">Start ₹350</Text>
                <Text color="gray">Proffesional</Text>
                </Box>
                <Box  _hover={{
               
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"  h="210px"  src="https://rukminim1.flixcart.com/image/200/200/l1nwnm80/sari/e/b/a/free-2267s101b-saara-unstitched-original-imagd6hvjtmhwueg.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Sarees</Heading>
                <Text color="green">Min 45% off</Text>
                <Text color="gray">Wedding</Text>
                </Box>
            </Box>
            <Box mt="10px"w="100%" h="auto" display="grid" gridTemplateColumns="repeat(6,1fr)"  paddingTop={"30px"} paddingLeft="40px">
                <Box  _hover={{
               
               transform: "scale(1.06)"
             }}    w="160px" h="300px"><Image   w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/kvba7bk0/shoe/x/b/p/-original-imag88gaxkksgrnp.jpeg?q=70"/>
                <Heading as='h6' size='xs'>ADDIUS PUMA</Heading>
                <Text color="green">Min 15% off</Text>
                <Text color="gray">Sport Shoes</Text>
                </Box>
                <Box  _hover={{
               
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/k7dnonk0/t-shirt/3/9/h/l-11012234-hrx-by-hrithik-roshan-original-imafpmhbueehv2pk.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Ti -Shirts</Heading>
                <Text color="green">Min 30% off</Text>
                <Text color="gray">Sport </Text>
                </Box>
                <Box  _hover={{
               
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"   h="210px"src="https://rukminim1.flixcart.com/image/200/200/xif0q/trouser/o/3/j/32-maw21ct301i-metronaut-original-imag8vfqwu5xnzkc-bb.jpeg?q=70"/>
                <Heading as='h6' size='xs'>ADDIUS PUMA</Heading>
                <Text color="green">Min 15% off</Text>
                <Text color="gray">Sport Shoes</Text>
                </Box>
                <Box  _hover={{
               
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%" h="210px" src="https://rukminim1.flixcart.com/image/200/200/kqgyhe80/shirt/e/7/k/m-men-slim-fit-solid-mandarin-collar-casual-shirt-juhil-bazar-original-imag4h5nphqhwh9h.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Shirts</Heading>
                <Text color="green">Min 35% off</Text>
                <Text color="gray">Trending</Text>
                </Box>
                <Box  _hover={{
               
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"  h="210px" src="https://rukminim1.flixcart.com/image/200/200/xif0q/sari/d/x/o/free-al-almaari-237-orange-avantika-fashion-unstitched-original-imaggzz8xpasewpb.jpeg?q=70"/>
                <Heading as='h6' size='xs'>SAREES</Heading>
                <Text color="green">Start ₹350</Text>
                <Text color="gray">Proffesional</Text>
                </Box>
                <Box  _hover={{
               
               transform: "scale(1.06)"
             }}   w="160px" h="300px"><Image w="100%"  h="210px"  src="https://rukminim1.flixcart.com/image/200/200/xif0q/short/w/i/r/l-solid-men-dark-blue-shorts-adrenex-original-imaghvhr2zvbgp6t.jpeg?q=70"/>
                <Heading as='h6' size='xs'>Short</Heading>
                <Text color="green">Min 25% off</Text>
                <Text color="gray">Sport </Text>
                </Box>
                
                
            </Box>

            <Box mt="10px"  w="100%" h="500px" display="grid" gridTemplateColumns="repeat(3,1fr)" >
            <Box  w="1320px" h="500px" paddingLeft={"5px"} display="grid" gridTemplateColumns="repeat(3,1fr)" gap="20px" >
<Box> <img src="https://images-static.nykaa.com/uploads/78882d64-589e-4759-afe1-90b56d2593c8.jpg?tr=w-600,cm-pad_resize" alt="" />   </ Box>
<Box><Image src="https://images-static.nykaa.com/uploads/6488fa68-0be2-482f-ac2c-61935e41c2cc.gif?tr=w-600,cm-pad_resize" alt=""/> </Box>
<Box><Image  src="https://images-static.nykaa.com/uploads/4b3d2f2b-3c2a-4d50-bd67-d578055dac40.jpg?tr=w-600,cm-pad_resize" alt=""/> </Box>

</Box>
            </Box>







          




{/* *********Main Box End********* */}
    </Box>

    
    </>
}

export default Home;