import {Accordion,AccordionItem,AccordionButton,AccordionPanel,Box,ListItem,UnorderedList,Image,Text} from '@chakra-ui/react'
import { useState } from 'react'

export const Accordian=({img})=>{
    let[option,setOption] = useState({
        stayType:false,
        meals:false,
        activity:false,
        inclusion:false,
        thingToCarry:false
    })
    const images={
      img1:"https://media.istockphoto.com/id/1422162778/photo/stylish-room-interior-with-sleeper-sofa-near-white-wall-additional-place-for-guest.webp?b=1&s=170667a&w=0&k=20&c=3mswQ57tUyw16lIWGpYZ3W7mqmT9Lr1eoxEDKrfcucI=",
      img2:"https://media.istockphoto.com/id/1262278932/photo/ready-healthy-food-catering-menu-in-lunch-boxes-fish-and-vegetable-packages-as-daily-meal.webp?b=1&s=170667a&w=0&k=20&c=5cgdTB4TCKHx_nhhz-d704K7H6Ja68kTcZCH8GOZ7J4=",
      img3:"https://media.istockphoto.com/id/113232749/photo/overhead-of-young-girl-in-orange-life-preserver.webp?b=1&s=170667a&w=0&k=20&c=ttD2E6o0crKWxHzlxmkpSQJULWAwb1_tBqqhCCtxVWQ=",
      img4:"https://media.istockphoto.com/id/1161578650/photo/unrecognizable-small-passenger-van-hurry-up-on-highway-at-city-street-traffic-with-urban.webp?b=1&s=170667a&w=0&k=20&c=UjmGkC6PnxehHcVbKTkU7-qwchInFV4Cwt328VsYPa4=",
      img5:"https://media.istockphoto.com/id/895081824/photo/tourist-visiting-spain.webp?b=1&s=170667a&w=0&k=20&c=ptIdYDtsmEhWJ7aVg-88Egu93-jmSYh3QfxobCR_Mjo="
    }
    
    return <Box w="100%" textAlign="left" justifyContent="center" m="auto">
        <Accordion display="flex" w="100%"  h="500px">
  <AccordionItem w="33%" p="15px" m="auto">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300',color:"black" }} fontSize="30px" textAlign="center" justifyContent="center" bg="tomato" color="white" onClick={()=>{
        setOption({stayType:!option.stayType,meals:false,activity:false,inclusion:false,thingToCarry:false})
      }} borderRadius="20px">
      Stay Type
      </AccordionButton>
    </h2>
    {
    option.stayType?
    <AccordionPanel pb={4}>
    
    <UnorderedList color="tomato" fontSize="3xl">
            <ListItem><Text color="black" fontSize="xl">For the duration of this adventure, you will be staying in camps on a sharing basis.</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">We will provide you with adequate camping gear like waterproof tents and sleeping bags</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">All our provisions follow the strictest standards of hygiene.</Text></ListItem>
        </UnorderedList>
    
    </AccordionPanel>:<Image src={images.img1} w="100%" h="300px" mt="20px" borderRadius="20px"></Image>}
    
  </AccordionItem>

  <AccordionItem w="33%" p="15px" m="auto">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300',color:"black" }} fontSize="30px" textAlign="center" justifyContent="center" bg="tomato" color="white" onClick={()=>{
        setOption({stayType:false,meals:!option.meals,activity:false,inclusion:false,thingToCarry:false})
      }} borderRadius="20px">
      Meals
      </AccordionButton>
    </h2>
    {
        option.meals?<AccordionPanel pb={4}>
        <UnorderedList color="tomato" fontSize="3xl">
            <ListItem><Text color="black" fontSize="xl">For the duration of this adventure, you will be staying in camps on a sharing basis.</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">We will provide you with adequate camping gear like waterproof tents and sleeping bags</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">All our provisions follow the strictest standards of hygiene.</Text></ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src={images.img2} w="100%" h="300px" mt="20px" borderRadius="20px"></Image>
    }
  </AccordionItem>

  <AccordionItem w="33%" p="15px" m="auto">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300',color:"black" }} fontSize="30px" textAlign="center" justifyContent="center" bg="tomato" color="white" onClick={()=>{
        setOption({stayType:false,meals:false,activity:!option.activity,inclusion:false,thingToCarry:false})
      }} borderRadius="20px">
      Activity
      </AccordionButton>
    </h2>
    {
        option.activity?<AccordionPanel pb={4}>
        <UnorderedList color="tomato" fontSize="3xl">
            <ListItem><Text color="black" fontSize="xl">For the duration of this adventure, you will be staying in camps on a sharing basis.</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">We will provide you with adequate camping gear like waterproof tents and sleeping bags</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">All our provisions follow the strictest standards of hygiene.</Text></ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src={images.img3} w="100%" h="300px" mt="20px" borderRadius="20px"></Image>
    }
  </AccordionItem>


  <AccordionItem w="33%" p="15px" m="auto">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300',color:"black" }} fontSize="30px" textAlign="center" justifyContent="center" bg="tomato" color="white" onClick={()=>{
        setOption({stayType:false,meals:false,activity:false,inclusion:!option.inclusion,thingToCarry:false})
      }} borderRadius="20px">
      Inclusions
      </AccordionButton>
    </h2>
    {
        option.inclusion?<AccordionPanel pb={4}>
        <UnorderedList color="tomato" fontSize="3xl">
            <ListItem><Text color="black" fontSize="xl">For the duration of this adventure, you will be staying in camps on a sharing basis.</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">We will provide you with adequate camping gear like waterproof tents and sleeping bags</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">All our provisions follow the strictest standards of hygiene.</Text></ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src={images.img4} w="100%" h="300px" mt="20px" borderRadius="20px"></Image>
    }
  </AccordionItem>
  <AccordionItem w="33%" p="15px" m="auto">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300',color:"black" }} fontSize="30px" textAlign="center" justifyContent="center" bg="tomato" color="white" onClick={()=>{
        setOption({stayType:false,meals:false,activity:false,inclusion:false,thingToCarry:!option.thingToCarry})
      }} borderRadius="20px">
      Things To Carry
      </AccordionButton>
    </h2>
    {
        option.thingToCarry?<AccordionPanel pb={4}>
        <UnorderedList color="tomato" fontSize="3xl">
            <ListItem><Text color="black" fontSize="xl">For the duration of this adventure, you will be staying in camps on a sharing basis.</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">We will provide you with adequate camping gear like waterproof tents and sleeping bags</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">All our provisions follow the strictest standards of hygiene.</Text></ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src={images.img5} w="100%" h="300px" mt="20px" borderRadius="20px"></Image>
    }
  </AccordionItem>
</Accordion>
    </Box>
}