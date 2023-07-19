import { Box,Card, CardBody, CardFooter,Image,Stack, Text,Heading,Divider,ButtonGroup,Button,Flex } from "@chakra-ui/react"
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";

export default function  ConfirmationPage() {


    const [data,setData] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        const data = {name:localStorage.getItem("name"),
        price:localStorage.getItem("price"),
        totalMembers:localStorage.getItem("totalMembers"),
        contact:localStorage.getItem("contact"),
        date: localStorage.getItem("date"),
    }
        handleData(data)
    },[])

    function handleData(data) {
        setData(data)
    }
    return  <Box w={['0em', '30em', '48em', '62em', '80em', '96em']} m="auto" p="20px">
        
<Card w="60%" m="auto" justify="center" textAlign="center">
<Image src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" w="100%" h="600px" borderRadius="20px"></Image>
<CardBody>

<Stack mt='6' spacing='3'>
    <Heading size='md'>You Got 10% discount !</Heading><br></br>
    <Text fontSize="xl" color ="red">
     Make sure your online trasenction is made on official page of the website.
    </Text><br></br>
    <Text color='blue.600' fontSize='2xl'>
    Plese read the below details carefully !
    </Text><br></br>
    <Box fontSize="2xl"  color='blue.600'>
    <span>Name :</span> {data.name} <br></br>
    
    <span>Contact details :</span> {data.contact} <br></br>
    <span>Total number of people :</span> {data.totalMembers}<br></br>
    <span>Date-Timing :</span> {data.date}<br></br>
    <span>Total Price :</span> {data.price}<br></br>
    <span>Discount : 10%</span><br></br>
    </Box>
    
</Stack>
</CardBody>
<Divider />
<CardFooter justify="center">
<ButtonGroup spacing='2' >
    <Button variant='solid'  _hover={{ bg: 'green.300',color:"black" }} bg="tomato" color="white" size="lg" onClick={()=>{
        navigate("/payment")
    }}>
    Confirm Payment
    </Button>
    <Button variant='ghost' _hover={{ bg: 'green.300',color:"black" }} bg="tomato" color="white" size="lg" onClick={()=>{
        alert("Payment Cancelled !")
        navigate("/")
    }}>
    Cancel
    </Button>
</ButtonGroup>
</CardFooter>
</Card>

</Box>
}