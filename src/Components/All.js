import {Box, Button, Flex,Text, Image,  Spacer, 
  Card, CardHeader, CardBody, CardFooter,Grid,Stack,Heading,Divider,ButtonGroup,
 
    Center,
    GridItem,} from '@chakra-ui/react';
    import { Link } from 'react-router-dom';
    import Carousel from 'react-multi-carousel';
    import 'react-multi-carousel/lib/styles.css';
    import { faStar } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SubscribePart(){
return(
<Box bg={"#ffe5d1"} p={["20px","30px","50px"]} borderRadius={"20px"} >
<Heading fontFamily={"serif"} fontSize={["20px","25px","30px","35px","40px"]}>GET STARTED WITH<Text color="#e2660f">TRAVELIOUS</Text></Heading>
<Text color={"#d9ac8b"} mt="20px" mb="20px" fontWeight={"600"} fontSize={["12px","15px","17px"]}>
  <Text>Subscribe and find super attractive price quotes</Text>
  <Text>from us, we wait for you at the best destinations</Text>
</Text>
<Button
 variant='solid' boxShadow={"dark-lg"} bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
  Get Started
 </Button>

</Box>
)
}

export function Experience(){
    return(
        <Box bg="gray.300"  p={["10px","20px"]} mt="30px" display={"flex"}>
<Box w="45%">
  <Image src="https://i.pinimg.com/564x/03/36/5e/03365eeadb5e90404e301411346ae681.jpg"
   h="100%" w="100%" />
</Box>
<Box bg="#f3f3f3" p="10px" w="55%" justifyContent={"center"}>
<Text
 mb="20px"  color="#333f48" fontFamily="serif" fontSize={["l","2xl","3xl","4xl","4xl"]} fontWeight={"800"}
 >
 OUR
  <Text as="span" color={"#e2660f"}> STORIES </Text>
  WITH <Text>ADVENTURERS</Text>
  </Text>
<Center>
<Text w="55%" textAlign={"center"} justifyContent={"center"} display={["none","none","flex"]}>
  We are experienced in bringing adventures to
   start their journey, all outdoor destinations in
    the world are specialities .  So don't hesitate to start your adventure right
 now, nature has already called you!
</Text>
</Center>


<Flex gap={["7px","7px","15px"]} mb="10%" mt="5%" justifyContent={"center"}>
  <Box bg="white" p={["4px","5px","15px"]} mt="20px">
    <Heading color="#e2660f" fontFamily={"cursive"} fontSize={["sm","xl","3xl"]}>12K+</Heading>
    <Text align={"left"} color={"gray.500"} fontSize={["10px","15px"]}>Success
    <Text>Journey</Text></Text>
  </Box>
  <Box bg="white" p={["4px","5px","15px"]} mt="20px">
    <Heading color="#e2660f" fontFamily={"cursive"} fontSize={["sm","xl","3xl"]}>16+</Heading>
    <Text  align={"left"} color={"gray.500"}  fontSize={["10px","15px"]}>Awards
    <Text>Winning</Text></Text>
  </Box>
  <Box bg="white" p={["4px","5px","15px"]} mt="20px">
    <Heading color="#e2660f" fontFamily={"cursive"} fontSize={["sm","xl","3xl"]}>20+</Heading>
    <Text  align={"left"} color={"gray.500"}  fontSize={["10px","15px"]}>Years Of
    <Text>Experience</Text></Text>
  </Box>
</Flex>
<Box bg="#9cacbe" p="10px" mt="30px"  display={["none","none","flex"]}>
<Box display={"flex"} alignItems={"center"} >
 
  <Text ml="0px" fontWeight={"500"} fontSize={["8px","8px","10px","13px","15px"]}>100% customizable</Text>
</Box>
<div class="vertical-line"></div>
<Box display={"flex"} alignItems={"center"}>
  
  <Text ml="10px" fontWeight={"500"} fontSize={["8px","8px","10px","13px","15px"]}>Instant booking in real time</Text>
</Box>
<div class="vertical-line"></div>
<Box display={"flex"} alignItems={"center"}>
 
  <Text  ml="10px" fontWeight={"500"} fontSize={["8px","8px","10px","13px","15px"]}>One stop experiential travel platform</Text>
</Box>

</Box>
</Box>

</Box>
    )
}

export function CommentBox(){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
           // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            // slidesToSlide: 3 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            // slidesToSlide: 3 // optional, default to 1.
          }
      };
    
    return(
        <Box bg="#f9f9f9" mt="30px" display={"flex"}>
<Box w="45%" p={["10px","15px","40px"]}>
<Heading display={["none","grid"]} color="#333f48" w="85%" textAlign={"left"} fontSize={["md","lg","2xl","3xl","4xl"]} mb="5%">
WHAT ADVENTURERS SAY
 <Text as="span" color="#e2660f"> ABOUT US</Text>
 </Heading>
 <Text fontSize={["10px","sm","sm","lg"]}
 textAlign={"left"}  mt={["10%","0"]} color="gray"  fontWeight={"500"}>
  See and discover what adventures tell us about their journey with us, we always listen to whatever experience the have to say
 </Text>
 <Carousel
arrows={true} renderButtonGroupOutside={true}
  swipeable={false}
  draggable={false}
  showDots={true}
   responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={false}
  autoPlay={false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
 
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div> 
  <Box bg="white" p="3%" mt="5%"  borderRadius={"20px"} display={["none","none","none","grid"]}>
  <Text textAlign={"left"} ml="3%"  fontStyle={"italic"} color="gray" fontSize={["sm","m"]}>
    "Travelious really helped me in finding the best location for
     my first adventure trip. Their respinse was very fast and able to tell in detail about the ceita or the history
     of the place I was going to visit "
  </Text>
 
  <Flex mt="5%" ml="3%">
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  </Flex>
 
<Text ml="3%" textAlign={"left"} color="gray.700" fontSize={"xl"} fontWeight={"700"}>Alice Agasta</Text>
<Text ml="3%" textAlign={"left"} color="gray">Entrepreneur</Text>
 </Box>
 </div>
 <div> 
  <Box bg="white" p="3%" mt="5%"  borderRadius={"20px"} display={["none","none","none","grid"]}>
  <Text textAlign={"left"} ml="3%"  fontStyle={"italic"} color="gray" fontSize={["sm","m"]}>
  "I recently booked a trip through this travel website and I must say, the experience was amazing! 
  The website was user-friendly,
   the booking process was seamless, and the customer service was top-notch. Highly recommended!"
  </Text>
 
  <Flex mt="5%" ml="3%">
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  </Flex>
 
<Text ml="3%" textAlign={"left"} color="gray.700" fontSize={"xl"} fontWeight={"700"}>Prakhar Sharma</Text>
<Text ml="3%" textAlign={"left"} color="gray">Entrepreneur</Text>
 </Box>
 </div>
 <div> 
  <Box bg="white" p="3%" mt="5%"  borderRadius={"20px"} display={["none","none","none","grid"]}>
  <Text textAlign={"left"} ml="3%"  fontStyle={"italic"} color="gray" fontSize={["sm","m"]}>
  "I've been using this travel website for years now, and it never disappoints. 
  They offer a wide range of destinations and options, and their prices are always competitive.
   I've had incredible travel experiences thanks to this website."
  </Text>
 
  <Flex mt="5%" ml="3%">
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  </Flex>
 
<Text ml="3%" textAlign={"left"} color="gray.700" fontSize={"xl"} fontWeight={"700"}>Meghna Meena</Text>
<Text ml="3%" textAlign={"left"} color="gray">Entrepreneur</Text>
 </Box>
 </div>
 <div> 
  <Box bg="white" p="3%" mt="5%"  borderRadius={"20px"} display={["none","none","none","grid"]}>
  <Text textAlign={"left"} ml="3%"  fontStyle={"italic"} color="gray" fontSize={["sm","m"]}>
  "The travel website made it so easy for me to plan my vacation.
   I could compare different flights, hotels, and activities all in one place.
    Plus, they provided detailed information and reviews, 
  which helped me make informed decisions.
   I'll definitely be using this website again!"
  </Text>
 
  <Flex mt="5%" ml="3%">
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  </Flex>
 
<Text ml="3%" textAlign={"left"} color="gray.700" fontSize={"xl"} fontWeight={"700"}>Khushi Sharma</Text>
<Text ml="3%" textAlign={"left"} color="gray">Entrepreneur</Text>
 </Box>
 </div>
 <div> 
  <Box bg="white" p="3%" mt="5%"  borderRadius={"20px"} display={["none","none","none","grid"]}>
  <Text textAlign={"left"} ml="3%"  fontStyle={"italic"} color="gray" fontSize={["sm","m"]}>
  "I stumbled upon this travel website while searching for a last-minute getaway, and I'm so glad I did.
   They had fantastic deals on flights and accommodations,
    and I was able to find a perfect package within my budget.
   I had a fantastic trip thanks to this website."
  </Text>
 
  <Flex mt="5%" ml="3%">
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#e2660f' }} />
  </Flex>
 
<Text ml="3%" textAlign={"left"} color="gray.700" fontSize={"xl"} fontWeight={"700"}>Ashi Jain</Text>
<Text ml="3%" textAlign={"left"} color="gray">Entrepreneur</Text>
 </Box>
 </div>
</Carousel>

</Box>
<Box 
w="55%" borderRadius={"30px"} >
 
 <Image
  borderBottomLeftRadius={"50%"} borderTopLeftRadius={"50%"}
  src="https://img.freepik.com/premium-photo/young-mixed-race-hiker-couple-isolated-blue-background-looks-aside-smiling-cheerful-pleasant_1187-185562.jpg?w=1060" />

  
</Box>
</Box>
    )
}

export function PopularAttraction(){
  const countries=["Bangkok","Shanghai","Hong Kong","Tokyo","Los Angeles","Manila"]
  return(
    <Box  bg={"#e2f6f5"} p="40px" mt="30px" >
<Text mb="20px"  color="#e2660f" fontFamily="serif" fontSize={"5xl"} fontWeight={"800"} textAlign={"left"} >Popular Attractions</Text>
 
 <Grid alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"} display={"flex"} gap="50px">
  <GridItem display={"flex"}  >
    <Image w="20px"  src="https://ak-d.tripcdn.com/images/0AS5f120008whj34f2145.png" />
    <Text ml="6px" textDecoration={"underline"}   textDecorationLine={"underline"} textDecorationStyle="dashed" paddingBottom= "2px" textUnderlineOffset={"7px"}>We Price Match</Text>
  </GridItem>
  <GridItem   display={"flex"} >
    <Image w="20px"  src="https://ak-d.tripcdn.com/images/0AS6o120009gxfriv28B3.png" />
    <Text ml="6px" textDecoration={"underline"}   textDecorationLine={"underline"} textDecorationStyle="dashed" paddingBottom= "2px" textUnderlineOffset={"7px"}> Booking Guarantee</Text>
  </GridItem>
  <GridItem   display={"flex"}>
    <Image w="20px"  src="https://ak-d.tripcdn.com/images/0AS2j120009gxknwsA052.png" />
    <Text ml="6px" textDecoration={"underline"}   textDecorationLine={"underline"} textDecorationStyle="dashed" paddingBottom= "2px" textUnderlineOffset={"7px"}> Stay Guarantee</Text>
  </GridItem>
 </Grid>

{/* buttons */}
<Flex gap="15px" flexWrap={"wrap"} mt="20px" alignItems={"center"} justifyContent={"center"}>
  {countries.map(function(ele){
    return (
      <Button 
      bg={"white"} color="#e2660f" _hover={{ color: "white","bg":"#e2660f" }}>{ele}
      </Button>
    )
  })}
</Flex>

<Grid templateColumns={["repeat(1,3fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} mt="7%" columnGap={"10px"} rowGap={"20px"}  alignItems={"center"} justifyContent={'space-evenly'}>
<GridItem w="90%" m="auto">
<Card >
  <CardBody>
    <Image
      src='https://youimg1.tripcdn.com/target/0105212000a4sy6yy5993_W_1000_750_Q80.jpg?proc=source%2ftrip&proc=source%2ftrip'
      alt='Kedarnath trip'
      borderRadius='lg' w="100%" h="230px"
    />
    <Stack mt='5' spacing='3'>
      <Heading 
       fontSize={"30px"} color="#43464f" fontFamily={"cursive"} mt="-12px">
      SEA LIFE Bangkok Ocean World
       </Heading>
    
 

    </Stack>

    
  </CardBody>
  {/* <Divider /> */}
  <CardFooter mt="-30px">
  <Flex justifyContent="space-around" w="100%"  >

  <Box
    bg="#e2660f"
  borderTopLeftRadius={"10px"}
  borderBottomLeftRadius={"10px"}
  borderBottomRightRadius={"10px"} w="70px" h="30px" mt="5px"
   >
     
        <Text as="span" color="white" fontWeight="700" fontSize={"2xl"} >
          4.7
        </Text>
        <Text color="white" fontSize="sm" as="span">
          /5
        </Text>
    
    </Box>

  <Box fontSize="2xl">
  <Text color="#e2660f" as="span" fontWeight={"700"}>
    $
  </Text>
  <Text color="#43464f" as="span" fontWeight={"700"} >
    450
  </Text>
  <Text color="grey" as="span" fontSize={"sm"} fontWeight={"600"} >
    /Person
  </Text>
</Box>
{/* <Spacer/> */}
<Box>
<Link to="/camping">
<Button variant='solid'  bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
        Buy now
      </Button>
</Link>

</Box>
  </Flex>
 

  </CardFooter>
</Card>
</GridItem>

<GridItem  w="90%" m="auto">
<Card >
  <CardBody>
    <Image
      src='https://youimg1.tripcdn.com/target/100s0q000000gg1fs4B9F_W_1000_750_Q80.jpg?proc=source%2ftrip&proc=source%2ftrip'
      alt='Kedarnath trip'
      borderRadius='lg' w="100%" h="230px"
    />
    <Stack mt='6' spacing='3'>
      <Heading 
       fontSize={"30px"} color="#43464f" fontFamily={"cursive"}>
     The Grand Palace
       </Heading>
    
 

    </Stack>

    
  </CardBody>
  {/* <Divider /> */}
  <CardFooter mt="-15px">
  <Flex  w="100%" justifyContent="space-around">

  <Box
    bg="#e2660f"
  borderTopLeftRadius={"10px"}
  borderBottomLeftRadius={"10px"}
  borderBottomRightRadius={"10px"} w="70px" h="30px" mt="5px"
   >
     
        <Text as="span" color="white" fontWeight="700" fontSize={"2xl"} >
          4.5
        </Text>
        <Text color="white" fontSize="sm" as="span">
          /5
        </Text>
    
    </Box>

  <Box fontSize="2xl">
  <Text color="#e2660f" as="span" fontWeight={"700"}>
    $
  </Text>
  <Text color="#43464f" as="span" fontWeight={"700"} >
    450
  </Text>
  <Text color="grey" as="span" fontSize={"sm"} fontWeight={"600"} >
    /Person
  </Text>
</Box>
{/* <Spacer/> */}
<Box>
<Link to="/activities">
<Button variant='solid'  bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
        Buy now
      </Button>
</Link>

</Box>
  </Flex>
 

  </CardFooter>
</Card>
</GridItem>

<GridItem w="90%"  m="auto">
<Card >
  <CardBody>
    <Image
      src='https://youimg1.tripcdn.com/target/1lo3112000axoz3wj2934_W_1000_750_Q80.png?proc=source%2ftrip&proc=source%2ftrip'
      alt='Kedarnath trip'
      borderRadius='lg' w="100%" h="230px"
    />
    <Stack mt='6' spacing='3'>
      <Heading 
       fontSize={"30px"} color="#43464f" fontFamily={"cursive"}>
      Ice Magic
       </Heading>
    
 

    </Stack>

    
  </CardBody>
  {/* <Divider /> */}
  <CardFooter mt="-15px">
  <Flex w="100%" justifyContent="space-around">

  <Box
    bg="#e2660f"
  borderTopLeftRadius={"10px"}
  borderBottomLeftRadius={"10px"}
  borderBottomRightRadius={"10px"} w="70px" h="30px" mt="5px"
   >
     
        <Text as="span" color="white" fontWeight="700" fontSize={"2xl"}  >
          4.8
        </Text>
        <Text color="white" fontSize="sm" as="span" >
          /5
        </Text>
    
    </Box>

  <Box fontSize="2xl">
  <Text color="#e2660f" as="span" fontWeight={"700"}>
    $
  </Text>
  <Text color="#43464f" as="span" fontWeight={"700"} >
    450
  </Text>
  <Text color="grey" as="span" fontSize={"sm"} fontWeight={"600"} >
    /Person
  </Text>
</Box>
{/* <Spacer/> */}
<Box>
<Link to="/trekking">
<Button variant='solid'  bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
        Buy now
      </Button>
</Link>

</Box>
  </Flex>
 

  </CardFooter>
</Card>
</GridItem>

</Grid>

</Box>

  )
}

export function PopularDestination(){
  const responsiveSlider = {
    desktop: {
        breakpoint: { max: 3000, min: 1088 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1088, min: 800 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 800, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
  };


  return(
<Box  bg={"#fdf6f5"} p="40px" mt="30px" >
        <Text mb="15px" color="#59696a" fontFamily="serif" fontSize={"4xl"} fontWeight={"800"} textAlign={"left"} >FIND <Text as="span" color="#e2660f">POPULAR</Text><Text>DESTINATIONS</Text> </Text>
<Carousel
gap="40px"  alignSelf="center" justifyContent="center"
         swipeable={false}
        
      draggable={false}
      showDots={true}
      responsive={responsiveSlider}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-60-px"
        >
  <div class="sliderClass">
  <Card >
  <CardBody>
    <Image
      src='https://www.euttaranchal.com/tourism/photos/kedarnath-2240900.jpg'
      alt='Kedarnath trip'
      borderRadius='lg'  w="95%" m="auto" h="250px" margin="auto"
    />
    <Stack mt='6' spacing='3'>
      <Heading 
       fontSize={"30px"} color="#43464f" fontFamily={"cursive"}>
       Kedarnath Trip
       </Heading>
      <Text color="#43464f">
      Your trip to Kedarnath must include a visit to Gaurikhand, the starting point of the Char Dham trek, especially since it's mostly covered in snow!
      </Text>
      <Text
       color={"grey"} fontWeight={"500"} fontFamily={"inherit"} >
       Uttarakhand,India</Text>

    </Stack>
  </CardBody>
  {/* <Divider /> */}
  <CardFooter mt="-15px">
  <Flex gap="40px" w="100%" justifyContent={"center"} >
  <Box fontSize="2xl">
  <Text color="#e2660f" as="span" fontWeight={"700"}>
    $
  </Text>
  <Text color="#43464f" as="span" fontWeight={"700"} >
    450
  </Text>
  <Text color="grey" as="span" fontSize={"sm"} fontWeight={"600"} >
    /Person
  </Text>
</Box>
{/* <Spacer/> */}
<Box>
<Link to="/trekking">

<Button variant='solid'  bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
        Buy now
      </Button>
</Link>

</Box>
  </Flex>
 
  </CardFooter>
</Card>
</div>
   <div class="sliderClass">
   <Card>
  <CardBody>
    <Image
      src='https://www.euttaranchal.com/tourism/photos/rishikesh-3715497.jpg'
      alt='Kedarnath trip'
      borderRadius='lg'  w="95%" m="auto" h="250px" margin="auto"
    />
    <Stack mt='6' spacing='3'>
      <Heading 
       fontSize={"30px"} color="#43464f" fontFamily={"cursive"}>
       Rishikesh Trip
       </Heading>
      <Text color="#43464f">
      Rishikesh or the “Gateway to Garhwal Himalayas”,
       is the Yoga Capital of the world.
        Located in the foothills of the Himalayas,
        
      </Text>
      <Text
       color={"grey"} fontWeight={"500"} fontFamily={"inherit"} >
       Uttarakhand,India</Text>

    </Stack>
  </CardBody>
  {/* <Divider /> */}
  <CardFooter mt="-15px">
  <Flex gap="40px" w="100%" justifyContent={"center"} >
  <Box fontSize="2xl">
  <Text color="#e2660f" as="span" fontWeight={"700"}>
    $
  </Text>
  <Text color="#43464f" as="span" fontWeight={"700"} >
    400
  </Text>
  <Text color="grey" as="span" fontSize={"sm"} fontWeight={"600"} >
    /Person
  </Text>
</Box>
{/* <Spacer/> */}
<Box>
<Link to="/camping">
<Button variant='solid'  bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
        Buy now
      </Button>
</Link>

</Box>
  </Flex>
 
  </CardFooter>
</Card>
</div>
  <div class="sliderClass">
  <Card >
  <CardBody>
    <Image
      src='https://assets.gqindia.com/photos/5cdc1e9478abdc6a505bfad6/16:9/pass/kerala.jpg'
      alt='Kedarnath trip'
      borderRadius='lg'  w="95%" m="auto" h="250px" margin="auto"
    />
    <Stack mt='6' spacing='3'>
      <Heading 
       fontSize={"30px"} color="#43464f" fontFamily={"cursive"}>
       kerala Trip
       </Heading>
      <Text color="#43464f">
      Kerala – the ‘Queen of the Malabar Coast’, 
      is indeed one of the most gorgeous and enticing holiday destinations in the entire country.
      </Text>
      <Text
       color={"grey"} fontWeight={"500"} fontFamily={"inherit"} >
       Malabar Coast,India</Text>

    </Stack>
  </CardBody>
  {/* <Divider /> */}
  <CardFooter mt="-15px">
  <Flex gap="40px" w="100%" justifyContent={"center"} >
  <Box fontSize="2xl">
  <Text color="#e2660f" as="span" fontWeight={"700"}>
    $
  </Text>
  <Text color="#43464f" as="span" fontWeight={"700"} >
    450
  </Text>
  <Text color="grey" as="span" fontSize={"sm"} fontWeight={"600"} >
    /Person
  </Text>
</Box>
{/* <Spacer/> */}
<Box>
<Link to="/activities">
<Button variant='solid'  bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
        Buy now
      </Button>
</Link>

</Box>
  </Flex>
 
  </CardFooter>
</Card>
</div>
  <div class="sliderClass">
  <Card >
  <CardBody>
    <Image
      src='https://www.jetsetter.com//uploads/sites/7/2018/04/FGps06eu-1380x1035.jpeg'
      alt='Kedarnath trip'
      borderRadius='lg'  w="95%" m="auto" h="250px" justifyContent={"center"}
    />
    <Stack mt='6' spacing='3'>
      <Heading 
       fontSize={"30px"} color="#43464f" fontFamily={"cursive"}>
     Nubra Valley, Ladakh
       </Heading>
      <Text color="#43464f">
      Your trip to Nubra Valley must include a visit to cold desert valley,
     especially since it's mostly covered in water!
      </Text>
      <Text
       color={"grey"} fontWeight={"500"} fontFamily={"inherit"} >
       Ladakh,India</Text>

    </Stack>
  </CardBody>
  {/* <Divider /> */}
  <CardFooter mt="-15px">
  <Flex gap="40px" w="100%" justifyContent={"center"} >
  <Box fontSize="2xl">
  <Text color="#e2660f" as="span" fontWeight={"700"}>
    $
  </Text>
  <Text color="#43464f" as="span" fontWeight={"700"} >
    450
  </Text>
  <Text color="grey" as="span" fontSize={"sm"} fontWeight={"600"} >
    /Person
  </Text>
</Box>
{/* <Spacer/> */}
<Box>
<Link to="/trekking">
<Button variant='solid'  bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
        Buy now
      </Button>
</Link>

</Box>
  </Flex>
 
  </CardFooter>
</Card>
</div>
  <div class="sliderClass"  >
  <Card >
  <CardBody>
    <Image
      src='https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Munnar-Kerala-1.jpg'
      alt='Kedarnath trip'
      borderRadius='lg'  w="95%" m="auto" h="250px" justifyContent={"center"}
    />
    <Stack mt='6' spacing='3'>
      <Heading 
       fontSize={"30px"} color="#43464f" fontFamily={"cursive"}>
        Munnar in Kerala
       </Heading>
      <Text color="#43464f">
      This idyllic hill station, nestled in the Western Ghats
       Verdant green and rolling hills, beautiful tea plantations,
       and charming towns make Munnar . 
      </Text>
      <Text
       color={"grey"} fontWeight={"500"} fontFamily={"inherit"} >
       Kerala,India</Text>

    </Stack>
  </CardBody>
  {/* <Divider /> */}
  <CardFooter mt="-15px">
  <Flex gap="40px" w="100%" justifyContent={"center"} >
  <Box fontSize="2xl">
  <Text color="#e2660f" as="span" fontWeight={"700"}>
    $
  </Text>
  <Text color="#43464f" as="span" fontWeight={"700"} >
    450
  </Text>
  <Text color="grey" as="span" fontSize={"sm"} fontWeight={"600"} >
    /Person
  </Text>
</Box>
{/* <Spacer/> */}
<Box>
<Link to="/activities">
<Button variant='solid'  bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
        Buy now
      </Button>
</Link>

</Box>
  </Flex>
 
  </CardFooter>
</Card>
</div>
  <div class="sliderClass">
  <Card >
  <CardBody>
    <Image
      src='https://www.fabhotels.com/blog/wp-content/uploads/2016/02/dal-lake.jpg'
      alt='Kedarnath trip'
      borderRadius='lg'  w="95%" m="auto" h="250px" justifyContent={"center"}
    />
    <Stack mt='6' spacing='3'>
      <Heading 
       fontSize={"30px"} color="#43464f" fontFamily={"cursive"}>
        Dal Lake
       </Heading>
      <Text color="#43464f">
      The serene Dal Lake is one of the most beautiful places in India to visit before you die.
      A shikara ride on the lake can lift your spirits instantly. 
      </Text>
      <Text
       color={"grey"} fontWeight={"500"} fontFamily={"inherit"} >
       Srinagar,India</Text>

    </Stack>
  </CardBody>
  {/* <Divider /> */}
  <CardFooter mt="-15px">
  <Flex gap="40px" w="100%" justifyContent={"center"} >
  <Box fontSize="2xl">
  <Text color="#e2660f" as="span" fontWeight={"700"}>
    $
  </Text>
  <Text color="#43464f" as="span" fontWeight={"700"} >
    450
  </Text>
  <Text color="grey" as="span" fontSize={"sm"} fontWeight={"600"} >
    /Person
  </Text>
</Box>
{/* <Spacer/> */}
<Box>
<Link to="/camping">
<Button variant='solid'  bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
        Buy now
      </Button>
</Link>

</Box>
  </Flex>
 
  </CardFooter>
</Card>
</div>
  <div class="sliderClass">
  <Card >
  <CardBody>
    <Image
      src='https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Khajjiar1.jpg'
      alt='Kedarnath trip'
      borderRadius='lg'  w="95%" m="auto" h="250px" justifyContent={"center"}
    />
    <Stack mt='6' spacing='3'>
      <Heading 
       fontSize={"30px"} color="#43464f" fontFamily={"cursive"}>
       Khajjiar 
       </Heading>
      <Text color="#43464f">
       Khajjiar deserves your attention .
       Here, you can enjoy adventures like trekking, zorbing, jungle safari and paragliding. 
      </Text>
      <Text
       color={"grey"} fontWeight={"500"} fontFamily={"inherit"} >
      Himachal Pradesh,India</Text>

    </Stack>
  </CardBody>
  {/* <Divider /> */}
  <CardFooter mt="-15px">
  <Flex gap="40px" w="100%" justifyContent={"center"} >
  <Box fontSize="2xl">
  <Text color="#e2660f" as="span" fontWeight={"700"}>
    $
  </Text>
  <Text color="#43464f" as="span" fontWeight={"700"} >
    450
  </Text>
  <Text color="grey" as="span" fontSize={"sm"} fontWeight={"600"} >
    /Person
  </Text>
</Box>
{/* <Spacer/> */}
<Box>
<Link to="/activities">
<Button variant='solid'  bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}>
        Buy now
      </Button>
</Link>

</Box>
  </Flex>
 
  </CardFooter>
</Card>
</div>
</Carousel>
</Box>
  )
}

export function MainFront(){
  return(
    <Flex w="100%" bg="#122722" color="white">
    <Box w="40%"  justifyContent={"center"} alignItems={"center"} >
   <Box textAlign={"left"} w="80%" m="auto">
   <Heading mt="25%" fontSize={["17px","25px","40px","55px","70px"]}>LIVE YOUR <Text color="#e2660f">ADVENTURE</Text></Heading>
<Text mt="10%" color="grey"
 mb="5%" fontWeight={"500"} fontSize={["10px","13px","17px","18px","20px"]}>
Dont't wait until tomorrow, discover your adventure now and fell the sensation of closeness to nature around you
</Text>
   </Box>
    
    </Box>
    <Box w="60%">
<Image w="100%" src="https://img.freepik.com/free-photo/front-view-young-male-with-backpack-preparing-hiking_179666-41653.jpg?w=1060&t=st=1684946091~exp=1684946691~hmac=712076e669e63e517c3f6de12d21ee4da1aefd1aa2d5707e44f798c08e616874" />
    </Box>
  </Flex>
  )
}