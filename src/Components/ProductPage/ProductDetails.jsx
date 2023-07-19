import { Box,Flex,SimpleGrid,Heading,Image,Text,Input,Button,useDisclosure,UnorderedList,ListItem,} from "@chakra-ui/react";
import {StarIcon,AddIcon,MinusIcon} from "@chakra-ui/icons"
import { useState,useEffect } from "react";
import { SendEnquiryModal } from "./SendEnquiryModal";
import { Accordian } from "./Accordian";
import { useParams } from "react-router-dom";
import { singleProductAction } from "../../Redux/action";
import { useDispatch,useSelector} from "react-redux";
import axios from "axios";

function ProductDetails() {
let[adult,setAdult] = useState(0);
let[child,setChild] = useState(0);
const { isOpen, onOpen, onClose } = useDisclosure()
const dispatch=useDispatch()
const {id} = useParams();


const [data,setData]=useState([])
useEffect(()=>{
  let token =localStorage.getItem("token")
  console.log(id)
  axios.get(`https://travellious-clone.onrender.com/trekking/single/${id}`,{headers: { Authorization: `Bearer ${token}` }})
  .then(res=>{console.log(res.data)
  setData(res.data)
  
  })
  .catch(err=>console.log(err))

},[])


const cPrice = Math.floor((data.price*10)/100);
var s = ""


    const prop = {image: 'https://bit.ly/2Z4KKcF',
    description:'For a travel site, this means that design can be the determining factor in whether a visitor trusts recommendations and information.And considering the significant investments that go into planning a trip, trust is essential.It can make or break a traveler’s decision to take a certain tour, stay at a certain hotel, or even visit a city or country altogether.Plus, beyond serving as a trustworthy source of inspiration, a travel site also needs to give would-be travelers all the information they need to arrange their travel plans.Once a visitor is convinced that they need to see the sights in the photos for themselves, it should be easy for them to plan their trip.',
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: 900,
    strikedOffPrice:1100,
    reviewCount: 34,
    rating: 4,
  }
    return(
     <Box w = "100%">
      <Flex p="20px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"  gap="20px" m="auto" justifyContent="space-between" w="100%">
                <Box  w="50%"  textAlign="left" p="30px">
                    <Image src={data.imageURL} borderRadius="20px" w="100%" mb="20px"></Image>
                    <Text mb="20px">{data.description}</Text>
                </Box>

                <Box mt="50px" mb="50px" textAlign="left" p="30px" w="50%" justifyContent="center">
                <Heading mb="20px">{data.name}</Heading>
                <Flex  mt='2' alignItems='center' mb="20px" >
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < data.rating ? 'tomato' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      50+ reviews
                    </Box>
                  </Flex>
                  <Text fontSize="xl">Starting from</Text>
                  <Flex w="45%" justify="space-between">
                  <Heading> ₹  {data.price}</Heading>
                  <Heading display="flex" gap="10px"> ₹ <Text textDecoration="line-through">{data.price+cPrice}</Text></Heading>
                  </Flex>
                  <Text fontSize="xl">Per adult</Text>
                  {/* <SimpleGrid columns={[1,2]} w="60%" p="20px" h="300" justifyContent="space-evenly">
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p="20px" textAlign="center">
                        <Image 
                        src="data:image/png;base64,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"
                         m="auto"  h="200px"></Image>
                        <Text>Accommodation</Text>
                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p="20px" textAlign="center">
                        <Image src="https://admin.banbanjara.com/public/frontend/uploads/masters/1560171281311-activitiesicon.svg" m="auto" mb = "40px" h="40px"></Image>
                        <Text>Activities</Text>
                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"p="20px" textAlign="center">
                        <Image src="https://admin.banbanjara.com/public/frontend/uploads/masters/1560171322872-guideicon.svg" m="auto" mb = "40px" h="40px"></Image>
                        <Text>Guide</Text>
                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p="20px" textAlign="center">
                        <Image src="https://admin.banbanjara.com/public/frontend/uploads/masters/1560171393204-mealicon.svg" m="auto" mb = "40px" h="40px"></Image>
                        <Text>Meals</Text>
                    </Box>
                  </SimpleGrid> */}
                  <Flex mt="10%"  w="100%" h="70px" gap="10px" justify="space-evenly" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" ml="20px" fontSize="md">
                        <Box display="flex" gap="10px" h="70px" alignItems="center"  p="10px"  w="100%">
                          {/* <Image src="https://banbanjara.com/assets/images/day-icon.png" w="20%" h="40px"></Image> */}
                          <Text>4 Days  |</Text>
                        </Box>
                        <Box display="flex" gap="10px" h="70px" alignItems="center"  p="10px"  w="100%">
                          {/* <Image src="https://banbanjara.com/assets/images/night-icon.png" w="20%" h="40px"></Image> */}
                          <Text>3 Nights  |</Text>
                        </Box>
                        <Box display="flex" gap="10px" h="70px" alignItems="center"  p="10px"  w="100%">
                          {/* <Image src="https://banbanjara.com/assets/images/location-icon.png" w="20%" h="40px"></Image> */}
                          <Text >India</Text>
                        </Box>
                  </Flex>
                </Box>
            </Flex>

            <Flex gap="20px" bg="teal" alignItems="center" p="20px" h="90px" justify="space-evenly" w="100%" fontSize="md">
                <Input placeholder="Select Date and Time" size="md" type="datetime-local" w="15%" borderColor="black" bg="white"/>
                <Flex w={["60px","90px","120px"]} h = "50">
                  <Text mr="10px"  alignItems="center" p="10px">Adult </Text>
                  <Box display="flex" gap="10px" alignItems="center">
                    <Button bg="tomato" color="white" onClick={()=>{
                    setAdult(adult+1);
                  }}  _hover={{ bg: 'green.300',color:"black" }}><AddIcon/></Button>
                  <Text fontSize="lg">{adult<0?setAdult(0):adult}</Text>
                  <Button bg="tomato" color="white" onClick={()=>{
                    setAdult(adult-1);
                  }}  _hover={{ bg: 'green.300',color:"black" }}><MinusIcon/></Button></Box>
                </Flex>

                <Flex w={["60px","90px","120px"]} h = "50" ml="70px">
                  <Text mr="10px" fontSize="lg" alignItems="center" p="10px">Child </Text>
                  <Box display="flex" gap="10px" alignItems="center">
                    <Button bg="tomato" color="white" onClick={()=>{
                    setChild(child+1);
                  }}  _hover={{ bg: 'green.300',color:"black" }}><AddIcon/></Button>
                  <Text fontSize="lg">{child<0?setChild(0):child}</Text>
                  <Button bg="tomato" color="white" onClick={()=>{
                    setChild(child-1);
                  }}  _hover={{ bg: 'green.300',color:"black" }}><MinusIcon/></Button></Box>
                </Flex>

                <Flex gap="20px">
                  <Button _hover={{ bg: 'green.300',color:"black" }} bg="tomato" color="white" size="lg" onClick={onOpen}>Book Now</Button>
                  <Button _hover={{ bg: 'green.300', color:"black"}} bg="tomato" color="white" onClick={onOpen} size="lg">Send Enquiry</Button>
                  {onOpen?<SendEnquiryModal  onClose={onClose}  isOpen={isOpen} adult={adult} child={child} price={data.price}/>:false}
                </Flex>
            </Flex> 

            <Box  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" w="95%" m="auto">
              <Accordian img={data.imageURL}/>


              <Flex w="100%" justify="space-between" gap="20px" p="20px" fontSize={["sm","md","lg"]}>
                <Box w="60%">
                <Box h="85px" bg="gray.100" w="100%" p="20px" textAlign="left" alignItems="center" fontSize="3xl" fontWeight="bold">
                  Confirmation Policy
              </Box>
              <Box p="20px">
                <UnorderedList color="tomato" textAlign="left" fontSize="3xl">
                  <ListItem ><Text color="black" fontSize="xl">Upon booking, the traveller will receive a confirmation voucher via email, within 24 hours.</Text></ListItem>
                  <ListItem ><Text color="black" fontSize="xl">In the special cases of slots not being available, feasible alternatives will be provided to the customer, in regards to the customer’s preference. In such cases, a new voucher would be sent via email, consisting of the new travel details.</Text></ListItem>
                </UnorderedList>
              </Box>


              <Box h="85px" bg="gray.100" w="100%" p="20px" textAlign="left" alignItems="center" fontSize="3xl" fontWeight="bold">
              Cancellation Policy
              </Box>
              <Box p="20px">
                <UnorderedList color="tomato" textAlign="left" fontSize="xl">
                  <ListItem ><Text color="black" fontSize="xl">Any cancellation made before 25 days prior to the date of departure, would levy a 50% of total tour cost as cancellation charges.</Text></ListItem>
                  <ListItem ><Text color="black" fontSize="xl">Any cancellation made within 0-25 days prior to the date of departure, would levy a 100% of total tour cost as cancellation charges.</Text></ListItem>
                  <ListItem ><Text color="black" fontSize="xl">Due to any restrictions such as sudden government policies or regulations, health hazards, medical emergencies, or unprecedented weather conditions, activities and tours may be nonoperational and be cancelled. In cases such as these, operators will attempt to cater to the traveller an alternate, which is feasible in nature. However, any refund would not be catered.</Text></ListItem>
                </UnorderedList>
                
              </Box>
              </Box>


              <Box alignItems={"center"}  alignContent={"center"} p="5% 0px 5% 0px">
                <Image  src="https://admin.banbanjara.com/public/frontend/uploads/product/1633584633283-KEDARKANTHATREKWEBSITEADD.jpg" borderRadius="50px"></Image>
              </Box>

              </Flex>

              
              
            </Box> 

            
             
    </Box>
)}

export default ProductDetails;