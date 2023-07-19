import { Box,Button,Image, SimpleGrid} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons"
import { productAction } from "../../Redux/action";
import { useSelector,useDispatch } from "react-redux";
import SortingControls from "./SortingControls";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";



function Camping() {
  const [sort,setSort] = useState("");
  


  const disptach = useDispatch()

  const handleSort=(val)=>{
      setSort(val)
  }
  

  const products= useSelector((store)=>{
    return store.productReducer.products
  })
  const navigate= useNavigate();

  useEffect(()=>{
    handleProducts("camping")
  },[sort])
  // console.log(products)

  const handleProducts = (type)=>{
    disptach({type:"PRODUCT_TYPE",payload:type})
    disptach(productAction(type,sort))
  }
    
    
    return (
        <Box w={['0em', '30em', '48em', '62em', '80em', '96em']} m="auto" p="10px">
          <SortingControls handleSort={handleSort}/>

          <SimpleGrid columns={[1, 2, 3,]} gap="20px" p="20px">
        {
            products.map((property)=>{
                return (<Box w="100%" h="550px" borderWidth='1px' borderRadius='20px' overflow='hidden' textAlign="center">
                <Image src={property.image} alt={property.imageAlt} w="100%" h="300px" borderRadius="20px"/>
                <Box p='6'>
                  
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    fontSize="3xl"
                  >
                    {property.title}
                  </Box>
          
                  <Box>
                    {property.price}
                    <Box as='span' color='gray.600' fontSize='sm'>
                      / wk
                    </Box>
                  </Box>
          
                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      50+ reviews
                    </Box>
                  </Box>
                </Box>
                
                <Button bg="tomato" color="white" onClick={()=>{
                    // alert(`Sorry! Page is not working.${property.id}`)
                    navigate(`/productDetails/${property.id}`)
                }} _hover={{ bg: 'green.300',color:"black" }} >View Details</Button>
              </Box>)
            })
        }
        </SimpleGrid>
        </Box>
        )
}

export default Camping;