import { Box,Text,Image,VStack,Badge, Button, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Checkbox, CheckboxGroup, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlacesDashboard() {
  const [data, setData] = useState([]);
  const[show,setShow]=useState(1);
  const navigate=useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: "Water World Ocean Park Hong Kong",
    description: "Welcome, Adventurers, to a secret world! Just minutes from Hong Kong’s urban center, prepare to enter a mystical, hidden civilisation at one with the wonders of water and nature.  We look forward to hosting you in our secret world of water.",
    imageUrl: "https://youimg1.tripcdn.com/target/01072120009kjq6hu9C79_C_670_376_Q70.webp?proc=source%2ftrip&proc=source%2ftrip",
    accommodations: "Family friend Attraction in Hong Kong",
    paymentMode: "",
    activities: [],
    price:500,
    tags:[]
  });

  let token =localStorage.getItem("token")

useEffect(()=>{
   console.log(token);
if(token){
  axios.get("https://travellious-clone.onrender.com/trekking/userPackage",{headers: { Authorization: `Bearer ${token}` }})
    .then(res=>{
    setData(res.data)
    
    })
    .catch(err=>console.log(err))
}
else{
  alert("Please login first for acccessing dashboard");
  navigate("/");
  
}
},[show])

  const handleInputChange = (e) =>
   {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleActivitiesChange = (selectedActivities) => 
  {
    setFormData({ ...formData, activities: selectedActivities });
  };
  const handleTagsChange = (selectedTags) => {
    setFormData({ ...formData, tags: selectedTags});
  };
  const handleSubmit = () =>   {
    // Store the form data in the desired state or perform other actions
    let token =localStorage.getItem("token")
    setShow(112)
    let obj={
        accommodation:formData.accommodations,
        name:formData.name,
        description:formData.description,
        imageURL:formData.imageUrl,
        price:formData.price,
        paymentMode:formData.paymentMode,
        activities:formData.activities,
        tags:formData.tags,
    }
    obj.rating=4.2;

axios.post("https://travellious-clone.onrender.com/trekking",obj,{ headers: { Authorization: `Bearer ${token}` }})

    // Reset the form data
    setFormData({
      name: "",
      description: "",
      imageUrl: "",
      accommodations: "",
      paymentMode: "",
      activities: [],
      price: "",
      tags:[]
    });
    // Close the modal
    setIsModalOpen(false);
   setShow(9)
  };

  function editProduct(id) {
    setShow(14);
    let token = localStorage.getItem("token");
  
    axios
      .get(`https://travellious-clone.onrender.com/trekking/single/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        setFormData({
          name: res.data.name,
          description: res.data.description,
          imageUrl: res.data.imageURL,
          accommodations: res.data.accommodation,
          paymentMode: res.data.paymentMode,
          activities: res.data.activities,
          price: res.data.price,
          tags: res.data.tags
        });
      })
      .catch(err => console.log(err));
  
    setIsModalOpenEdit(true);
  }
  




  function handleEdit(id){
    let token =localStorage.getItem("token")
   
    let obj={
        accommodation:formData.accommodations,
        name:formData.name,
        description:formData.description,
        imageURL:formData.imageUrl,
        price:formData.price,
        paymentMode:formData.paymentMode,
        activities:formData.activities,
        tags:formData.tags,
    }
    obj.rating=4.2;

axios.patch(`https://travellious-clone.onrender.com/trekking/${id}`,obj,{ headers: { Authorization: `Bearer ${token}` }})



    // Reset the form data
    setFormData({
      name: "",
      description: "",
      imageUrl: "",
      accommodations: "",
      paymentMode: "",
      activities: [],
      price: "",
      tags:[]
    });
    // Close the modal
    setIsModalOpenEdit(false);
    setShow(12)
}

function deleteProduct(id){
  setShow(6)
    axios.delete(`https://travellious-clone.onrender.com/trekking/delete/${id}`,{headers: { Authorization: `Bearer ${token}` }})
setShow(4513)
}

  return (
    <>

  
        <Button mt="20px" mb="20px" p="20px" bg="#e2660f" onClick={() => setIsModalOpen(true)}>
    Add Packages
  </Button>
     
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Package</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <form>
                  <Input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} mb="4" />
                  <Input name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} mb="4" />
                  <Input name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleInputChange} mb="4" />
                  <Input name="accommodations" placeholder="Accommodations" value={formData.accommodations} onChange={handleInputChange} mb="4" />
                  <Select name="paymentMode" placeholder="Payment Mode" value={formData.paymentMode} onChange={handleInputChange} mb="4">
                    <option value="Pre-Pay">Pre-Pay</option>
                    <option value="Pay at Hotel">Pay at Hotel</option>
                    <option value="Book Now Pay Later">Book Now Pay Later</option>
                  </Select>
                  <Text>Activities</Text>
                  <CheckboxGroup name="activities" value={formData.activities} onChange={handleActivitiesChange}>
                  <Checkbox value="Backwater Cruise">Backwater Cruise</Checkbox>
  <Checkbox value="Ayurvedic Spa">Ayurvedic Spa</Checkbox>
  <Checkbox value="Camel Safari">Camel Safari</Checkbox>
  <Checkbox value="Visit Diskit Monastery">Visit Diskit Monastery</Checkbox>
  <Checkbox value="Explore Hunder Sand Dunes">Explore Hunder Sand Dunes</Checkbox>
  <Checkbox value="Tea Plantation Visit">Tea Plantation Visit</Checkbox>
  <Checkbox value="Trekking">Trekking</Checkbox>
  <Checkbox value="Visit to Floating Gardens">Visit to Floating Gardens</Checkbox>
</CheckboxGroup>

<Input  placeholder="Add another activity by your choice" mb="4"/>
<Text>Tags</Text>
                  <CheckboxGroup name="tags" value={formData.tags} onChange={handleTagsChange}>
  <Checkbox value="Lake">Lake</Checkbox>
  <Checkbox value="Boat Ride">Boat Ride</Checkbox>
  <Checkbox value="Nature">Nature</Checkbox>
  <Checkbox value="Aquarium">Aquarium</Checkbox>
  <Checkbox value="Marine Life">Marine Life</Checkbox>
  <Checkbox value="Family">Family</Checkbox>
  <Checkbox value="Amusement Park">Amusement Park</Checkbox>
  <Checkbox value="Animals">Animals</Checkbox>
 
</CheckboxGroup>
                  <Input name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} mb="4" />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="#e2660f" bg="#e2660f" mr={3} onClick={handleSubmit}>
                  Submit
                </Button>
                <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
         
          {data.length > 0 ? (
  <SimpleGrid columns={3} spacing={4}>
    {data.map(function (ele, idx) {
      return (
        <Box
          key={idx}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          p={4}
          w="90%"
          m="auto"
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
            <Button
              bg="#e2660f"
              p="5px"
              m="5px"
              onClick={() => editProduct(ele._id)}
            >
              Edit
            </Button>
            {/* edit */}
            <Modal isOpen={isModalOpenEdit} onClose={() => setIsModalOpenEdit(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Package</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              mb="4"
            />
            <Input
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              mb="4"
            />
            <Input
              name="imageUrl"
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={handleInputChange}
              mb="4"
            />
            <Input
              name="accommodations"
              placeholder="Accommodations"
              value={formData.accommodations}
              onChange={handleInputChange}
              mb="4"
            />
            <Select
              name="paymentMode"
              placeholder="Payment Mode"
              value={formData.paymentMode}
              onChange={handleInputChange}
              mb="4"
            >
              <option value="Pre-Pay">Pre-Pay</option>
              <option value="Pay at Hotel">Pay at Hotel</option>
              <option value="Book Now Pay Later">Book Now Pay Later</option>
            </Select>
            <Text>Activities</Text>
            <CheckboxGroup
              name="activities"
              value={formData.activities}
              onChange={handleActivitiesChange}
            >
              <Checkbox value="Backwater Cruise">Backwater Cruise</Checkbox>
              <Checkbox value="Ayurvedic Spa">Ayurvedic Spa</Checkbox>
              <Checkbox value="Camel Safari">Camel Safari</Checkbox>
              <Checkbox value="Visit Diskit Monastery">Visit Diskit Monastery</Checkbox>
              <Checkbox value="Explore Hunder Sand Dunes">Explore Hunder Sand Dunes</Checkbox>
              <Checkbox value="Tea Plantation Visit">Tea Plantation Visit</Checkbox>
              <Checkbox value="Trekking">Trekking</Checkbox>
              <Checkbox value="Visit to Floating Gardens">Visit to Floating Gardens</Checkbox>
            </CheckboxGroup>

            <Input placeholder="Add another activity by your choice" mb="4" />
            <Text>Tags</Text>
            <CheckboxGroup name="tags" value={formData.tags} onChange={handleTagsChange}>
              <Checkbox value="Lake">Lake</Checkbox>
              <Checkbox value="Boat Ride">Boat Ride</Checkbox>
              <Checkbox value="Nature">Nature</Checkbox>
              <Checkbox value="Aquarium">Aquarium</Checkbox>
              <Checkbox value="Marine Life">Marine Life</Checkbox>
              <Checkbox value="Family">Family</Checkbox>
              <Checkbox value="Amusement Park">Amusement Park</Checkbox>
              <Checkbox value="Animals">Animals</Checkbox>
            </CheckboxGroup>
            <Input
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              mb="4"
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="#e2660f" bg="#e2660f" mr={3} onClick={()=>handleEdit(ele._id)}>
            Submit
          </Button>
          <Button variant="ghost" onClick={() => setIsModalOpenEdit(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
            <Button
              bg="#e2660f"
              p="5px"
              m="5px"
              onClick={() => deleteProduct(ele._id)}
            >
              Delete
            </Button>
          </Box>
        </Box>
      );
    })}
  </SimpleGrid>
) : (
  <Box pt="200px" pb="100px">
    <Heading>Oops! You don't have any tour packages added yet.</Heading>
   
   
  </Box>
)}
     
   

    </>
  );
}
