import { Box,Select,Heading,Flex, } from "@chakra-ui/react";

export default function SortingControls({handleSort}){
    return <Box w={['0em', '30em', '48em', '62em', '80em', '96em']} textAlign="left" mt="20px" p="20px"  mb="20px">
                <Flex w="40%" justify="space-between">
                <Box>
                <Heading fontSize="2xl" mb="20px">Sort By Price</Heading>
                <Select bg="tomato" color="white" fontWeight="bold" _hover={{ bg: 'green.300',color:"black" }} onChange={(e)=>{
                    handleSort(e.target.value);
                }}>
                    <option value="" style={{background:"tomato",fontWeight:"bold"}}>All</option>
                    <option value='asc' style={{background:"tomato",fontWeight:"bold"}}>Low To High</option>
                    <option value='desc' style={{background:"tomato",fontWeight:"bold"}}>High to Low</option>
                </Select>
                </Box>
                <Box textAlign={"center"} >
                <Heading fontSize="2xl" mb="20px">Sort By Rating</Heading>
                <Select bg="tomato" color="white" fontWeight="bold" _hover={{ bg: 'green.300',color:"black" }} onChange={(e)=>{
                    
                }} w="50%">
                    <option value={0} style={{background:"tomato",fontWeight:"bold"}}>All</option>
                    <option value={4} style={{background:"tomato",fontWeight:"bold"}}>4-5</option>
                    <option value={3} style={{background:"tomato",fontWeight:"bold"}}>3-4</option>
                    <option value={2} style={{background:"tomato",fontWeight:"bold"}}>2-3</option>
                    <option value={1} style={{background:"tomato",fontWeight:"bold"}}>1-2</option>
                </Select>
                </Box>
                </Flex>
            </Box>
}