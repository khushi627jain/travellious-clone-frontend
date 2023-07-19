import {Box, Button, Flex,Text, Image,  Spacer, 
    Link, Card, CardHeader, CardBody, CardFooter,Grid,Stack,Heading,Divider,ButtonGroup,
 
    Center,
    GridItem,} from '@chakra-ui/react'

export function Footer(){
    const showStyleOfHead={
        fontSize:"27px" ,
        fontFamily:"sans-serif",
        marginBottom:"5px",
         color:"#333f48"
      }
    
    return(
        <>
            <Flex
    mt="150px"
    justifyContent="space-around"
 alignContent={"center"}
 gap="40px"
    flexWrap="wrap"
   
    mx="auto"
  >
    <Box ><Heading color="#e2660f" fontFamily={"revert-layer"}>O TRLVS</Heading>
<Text color="gray" fontWeight={"500"} lineHeight={"25px"} fontSize={"17px"}>
  Our mission is to make everyone 
  <Text> able to feel the attachment</Text>
 <Text> back to nature by providing an </Text>
  <Text> unforgottable experience</Text>
 
</Text>
</Box>
    <Box ><Heading fontSize={"27px"} fontFamily={"revert-layer"} color="#333f48">ABOUT</Heading>
<ul>
  <li className='list-item'><Link _hover={{ color:"#e2660f"}}>About Us</Link></li>
  <li className='list-item'><Link _hover={{ color:"#e2660f"}}>Features</Link></li>
  <li className='list-item'><Link _hover={{ color:"#e2660f"}}>News & Blog</Link></li>
</ul>
</Box>
    <Box ><Heading style={showStyleOfHead}>MOVEMENT</Heading>
<ul >
  <li className='list-item'  ><Link _hover={{ color:"#e2660f"}}>What Travelleous</Link></li>
  <li className='list-item' ><Link _hover={{ color:"#e2660f"}}>Support Us</Link></li>
</ul>
</Box>
    <Box ><Heading style={showStyleOfHead}>COMPANY</Heading>
<ul>
  <li className='list-item'><Link _hover={{ color:"#e2660f"}}>Why Travelleous</Link></li>
  <li className='list-item'><Link _hover={{ color:"#e2660f"}}>Capital</Link></li>
  <li className='list-item'><Link _hover={{ color:"#e2660f"}}>Security</Link></li>
</ul>
</Box>
    <Box ><Heading style={showStyleOfHead} fontFamily={"sans-serif"}>SUPPORT</Heading>
<ul>
  <li className='list-item'><Link _hover={{ color:"#e2660f"}}>FAQs</Link></li>
  <li className='list-item'><Link _hover={{ color:"#e2660f"}}>Support Center</Link></li>
  <li className='list-item'><Link _hover={{ color:"#e2660f"}}>Contact Us</Link></li>
</ul>
</Box>
  </Flex>

<Flex mt="80px" mb="50px" flexWrap={"wrap"} 
 justifyContent={"center"} alignItems={"center"}>
 
<Box justifyContent={"center"} justifySelf={"center"}
ml="20px" mr="20px">
 <Text className='list-item' >
    @2021 Travelleous. All rights reserved
  </Text>
  </Box>

  <Spacer/>
<Box display={"flex"} flexWrap={"wrap"} gap="30px" justifySelf={"center"}
 justifyContent={"center"} alignItems={"center"} 
 ml="20px" mr="20px">
  <Text className='list-item'><Link _hover={{ color:"#e2660f"}}>Terms & Agreements</Link></Text>
  <Text className='list-item'><Link _hover={{ color:"#e2660f"}}>Privacy Policy</Link></Text>
</Box>
 
</Flex>
        </>
    )
}