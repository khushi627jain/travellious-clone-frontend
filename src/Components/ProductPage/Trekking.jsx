import { Box, Button, Flex , Table,
 Checkbox, CheckboxGroup, Select, Input, Stack,
 Image, Badge, Text, VStack,
SimpleGrid,
 
  Heading,} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import axios from "axios"

export default function Dashboard(){

  const [data,setData]=useState([]);
  const[page,setPage]=useState(1);

 
const[paginationArray,setPaginationArray]=useState([])



  const navigate=useNavigate();
const dispatch=useDispatch();

const [sortByRating, setSortByRating] = useState("");
const [searchByName, setSearchByName] = useState("");
const [paymentModes, setPaymentModes] = useState([]);
const [filterByRating, setFilterByRating] = useState("");
const [priceRange, setPriceRange] = useState([]);
const [selectedTags, setSelectedTags] = useState([]);


const handleSortByRatingChange = (event) => {
  setSortByRating(event.target.value);
};

const handleSearchByNameChange = (event) => {
  setSearchByName(event.target.value);
};

const handlePaymentModesChange = (selectedOptions) => {
  setPaymentModes(selectedOptions);
};

const handleFilterByRatingChange = (event) => {
  setFilterByRating(event.target.value);
};

const handlePriceRangeChange = (selectedOptions) => {
  setPriceRange(selectedOptions);
};

const handleTagsChange = (selectedOptions) => {
  setSelectedTags(selectedOptions);
};

useEffect(()=>{
let token =localStorage.getItem("token")
axios
.get(`https://travellious-clone.onrender.com/trekking/${page}`, {
headers: { Authorization: `Bearer ${token}` },
params: {
  sortByRating,
  searchByName,
  priceRange,
  filterByRating, 
  paymentModes,
  selectedTags,
},
})
  .then(res=>{
      const totalItems = res.data.totalItems;
const pageCount = Math.ceil(totalItems / 5);
const arr = new Array(pageCount > 0 ? pageCount : 1).fill(0);
setPaginationArray(arr);
setData(res.data.data);
  })
  .catch(err=>console.log(err))
},[page,sortByRating,searchByName,priceRange,filterByRating,paymentModes,selectedTags])



  return(
      <Box m="auto" w="95%" mt="20px">


<Flex m="auto" w="100%">
  {/* Filter */}
<Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Stack spacing={4}>

        <Select
          placeholder="Sort by Rating"
          value={sortByRating}
          onChange={handleSortByRatingChange}
        >
          <option value="asc">Rating - Ascending</option>
          <option value="desc">Rating - Descending</option>
        </Select>
        <Box
    borderBottom="1px solid"
    borderColor="gray.200" // Sets the border color to gray.500
    mt="10px"
    mb="10px"
  />

        <Input
          placeholder="Search by Place Name"
          value={searchByName}
          onChange={handleSearchByNameChange}
        />
          <Box
    borderBottom="1px solid"
    borderColor="gray.200" // Sets the border color to gray.500
    mt="10px"
    mb="10px"
  />

        <Text align={"left"}>PAYMENT MODE</Text>
        <CheckboxGroup
          colorScheme="green"
          value={paymentModes}
          onChange={handlePaymentModesChange}
        >
          <Stack spacing={2}>
            <Checkbox value="Pay at Hotel">Pay at Hotel</Checkbox>
            <Checkbox value="Pre-Pay">Pre-Pay</Checkbox>
            <Checkbox value="Book Now Pay Later">Book Now Pay Later</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Box
    borderBottom="1px solid"
    borderColor="gray.200" // Sets the border color to gray.500
    mt="10px"
    mb="10px"
  />

        <Select
          placeholder="Filter by Rating"
          value={filterByRating}
          onChange={handleFilterByRatingChange}
        >
          <option value="2+">2+</option>
          <option value="3+">3+</option>
          <option value="4+">4+</option>
          <option value="4.5+">4.5+</option>
        </Select>
        <Box
    borderBottom="1px solid"
    borderColor="gray.200" // Sets the border color to gray.500
    mt="10px"
    mb="10px"
  />

<Text align={"left"}>PRICE FOR 3 NIGHTS</Text>
        <CheckboxGroup
          colorScheme="blue"
          value={priceRange}
          onChange={handlePriceRangeChange}
        >
          <Stack spacing={2}>
            <Checkbox value="100-200">$100 - $200</Checkbox>
            <Checkbox value="200-300">$200 - $300</Checkbox>
            <Checkbox value="300-400">$300 - $400</Checkbox>
            <Checkbox value="400+">$400+</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Box
    borderBottom="1px solid"
    borderColor="gray.200" // Sets the border color to gray.500
    mt="10px"
    mb="10px"
  />

<Text align={"left"}>SHOW HOTELS WITH</Text>
        <CheckboxGroup
          colorScheme="purple"
          value={selectedTags}
          onChange={handleTagsChange}
        >
          <Stack spacing={2}>
            <Checkbox value="Palace">Palace</Checkbox>
            <Checkbox value="Architecture">Architecture</Checkbox>
            <Checkbox value="History">History</Checkbox>
            <Checkbox value="Amusement Park">Amusement Park</Checkbox>
            <Checkbox value="Family">Family</Checkbox>
            <Checkbox value="Animals">Animals</Checkbox>
            <Checkbox value="Thrills">Thrills</Checkbox>
            <Checkbox value="Aquarium">Aquarium</Checkbox>
            <Checkbox value="Marine Life">Marine Life</Checkbox>
            <Checkbox value="Lake">Lake</Checkbox>
            <Checkbox value="Boat Ride">Boat Ride</Checkbox>
            <Checkbox value="Nature">Nature</Checkbox>
            <Checkbox value="Adventure">Adventure</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Box
    borderBottom="1px solid"
    borderColor="gray.200" // Sets the border color to gray.500
    mt="10px"
    mb="10px"
  />

      </Stack>
    </Box>


  <SimpleGrid columns={3} spacing={4}>
{
  data.map((ele, idx) => {
  return (
    <Box
      key={idx}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
    >
      <Image src={ele.imageURL} alt={ele.name} />
      <Box mt={4}>
        <Text fontSize="xl" fontWeight="semibold">
          {ele.name}
        </Text>
        <Text color="gray.600">{ele.description}</Text>
      </Box>
      <VStack mt={4} spacing={2}>
        <Badge colorScheme="green">${ele.price}</Badge>
        <Badge colorScheme="blue">{ele.duration}</Badge>
      </VStack>
      <Box mt={4}>
      
        <Text>
          <strong>Accommodation:</strong> {ele.accommodation}
        </Text>
        <Text>
          <strong>Activities:</strong> {ele.activities.join(", ")}
        </Text>
        <Text>
          <strong>Rating:</strong> {ele.rating}
        </Text>
        <Button bg="#e2660f" p="5px" m="5px" onClick={()=>navigate(`/productDetails/${ele._id}`)} >View Details</Button>
      </Box>
    </Box>
  );
})
}
</SimpleGrid>

</Flex>


<Box mt="20px">
{
paginationArray.length > 1 &&
  paginationArray.map((_, idx) => (
    <Button p="20px" m="5px" bg="#2d2c2c" color={"white"} key={idx} onClick={() => setPage(idx + 1)}>
      {idx + 1}
    </Button>
  ))
}
</Box>
      </Box>
  )
}
















// import { Box,Button,Image, SimpleGrid} from "@chakra-ui/react";
// import {StarIcon} from "@chakra-ui/icons"
// import { productAction } from "../../Redux/action";
// import { useSelector,useDispatch } from "react-redux";
// import SortingControls from "./SortingControls";
// import { useNavigate } from "react-router-dom";
// import { useEffect,useState } from "react";



// function Trekking() {
//   const [sort,setSort] = useState("");
//   const[page,setPage]=useState(1);

//   const disptach = useDispatch()

//   const handleSort=(val)=>{
//       setSort(val)
//   }
  
 

//   const products= useSelector((store)=>{
//     return store.productReducer.products
//   })
//   const navigate= useNavigate();

//   useEffect(()=>{
//     disptach({type:"PRODUCT_TYPE",payload:"trekking"})
//     handleProducts("trekking")

//     let token =localStorage.getItem("token")

//   },[sort,page])
//   // console.log(products)

//   const handleProducts = (type)=>{
    
//     disptach(productAction(type,sort))
//   }
    
    
//     return (
//         <Box  m="auto" p="10px" w={['0em', '30em', '48em', '62em', '80em', '96em']}>
//           <SortingControls handleSort={handleSort} />

//           <SimpleGrid columns={[1, 2, 3,]} gap="20px" p="20px">
//         {
//             products.map((property)=>{
//                 return (<Box w="100%" h="550px" borderWidth='1px' borderRadius='20px' overflow='hidden' textAlign="center" >
//                 <Image src={property.image} alt={property.imageAlt} w="100%" h="300px" borderRadius="20px"/>
//                 <Box p='6'>
                  
//                   <Box
//                     mt='1'
//                     fontWeight='semibold'
//                     as='h4'
//                     lineHeight='tight'
//                     noOfLines={1}
//                     fontSize="3xl"
//                   >
//                     {property.title}
//                   </Box>
          
//                   <Box>
//                     {property.price}
//                     <Box as='span' color='gray.600' fontSize='sm'>
//                       / wk
//                     </Box>
//                   </Box>
          
//                   <Box display='flex' mt='2' alignItems='center'>
//                     {Array(5)
//                       .fill('')
//                       .map((_, i) => (
//                         <StarIcon
//                           key={i}
//                           color={i < property.rating ? 'teal.500' : 'gray.300'}
//                         />
//                       ))}
//                     <Box as='span' ml='2' color='gray.600' fontSize='sm'>
//                       50+ reviews
//                     </Box>
//                   </Box>
//                 </Box>
                
//                 <Button bg="tomato" color="white" onClick={()=>{
//                     // alert(`Sorry! Page is not working.${property.id}`)
//                     navigate(`/productDetails/${property.id}`)
//                 }}_hover={{ bg: 'green.300',color:"black" }} >View Details</Button>
//               </Box>)
//             })
//         }
//         </SimpleGrid>
//         </Box>
//         )
// }

// export default Trekking;