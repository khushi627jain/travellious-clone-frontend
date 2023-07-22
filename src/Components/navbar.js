
import {
    Box, Button, Flex, Text, Image, Spacer,
    Center,
    Heading,


    FormControl,
    FormLabel,
    Input,
    Stack,

    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./nav.css"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
library.add(faStar);



export function NavbarCode({ nameOfUser }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOpenn, setIsOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const[userName,setUsername]=useState("")


    useEffect(()=>{
  
        const token=localStorage.getItem("token");
        if(token){
          axios  
          .get("https://travellious-clone.onrender.com/user", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(res=>{
            setName(res.data.data.name);
          })
        }
       
      },[name])

    const handleLogin = (event) => {
        event.preventDefault();
       
        const formData = {
            email: email,
            password: password,
        };
        if (email === "" || password === "") {
            alert("Please fill all fields");return;
          }
          
        axios.post("https://travellious-clone.onrender.com/login",formData)
        .then(res=>{
            if(res.data=="Email dosen't exist , Please sign up first"){
                alert("Signup first, this email dosen't exist")
            }
            else if(res.data=="Wrong credentials"){
            alert("Invalid Credentials")
            }
            else if(res.data.msg="Successfully login"){
                setName(res.data.obj.name)

                localStorage.setItem("token",res.data.token);
               
                // dispatch({ type: "changeName", payload: name })
                alert("Login Successful")
            
            }})
            setEmail("");setPassword("");setPhoneNumber("")
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch({ type: "changeName", payload: name })
        const formData = {
            name: userName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
        };
        if (email === "" || password === ""||name===""||phoneNumber==="") {
            alert("Please fill all fields");return;
          }
        axios.post("https://travellious-clone.onrender.com/signup",formData)
        .then(res=>{
            if(res.data=="Email already exists"){
                alert("Email already exists");
            }
            else 
            alert("Successfully signup")
            
            })
            .catch(err=>console.log(err))
            setEmail("");setPassword("");setPhoneNumber("");
             setName("")
    };


    return (
        <Flex bg="#122722" as="nav" align="center" justify="space-between" pr="60px" pl="60px" pb="30px">
            <Box>

                <Link to="/">
                    <Heading mt="5%" fontFamily={"cursive"} color="#e2660f" fontSize={["30px", "40px"]} >O TRLVS</Heading>
                </Link>

            </Box>
            <Spacer />
            <Box>
                <Flex gap={["20px", "30px", "40px", "50px"]}>



                    <ul className="nav-links" >
                        {/* 1st a */}
                        <li>
                            <Link to="/trekking" _hover={{ textDecorationColor: "white" }}><Text fontWeight={"500"} color={"#dbdde5"} fontSize={["10px", "15px", "15px", "20px"]}>Trekking</Text></Link>
                            <Box className="mega-box">
                                <Box className="content">
                                    {/* 1st row */}
                                    <Box className="row">
                                        <h1 className='head'>HIMACHAL</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/trekking"><Text>Kheerganga Trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Hampta Pass Trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Bhrigu Lake Trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Kheerganga Trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Deo Tibba Trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Sar Pass Trek </Text></Link></li>
                                            <li><Link to="/trekking"><Text>Buran Ghati trek</Text></Link></li>
                                        </ul>
                                    </Box>
                                    {/* 2nd row */}
                                    <Box className='row'>
                                        <h1>BANGLORE</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/trekking"><Text>Savandurga Hill</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Ramanagara</Text></Link></li>
                                            <li><Link to="/trekking"><Text> Nandi Hills</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Skandagiri</Text></Link></li>
                                            <li><Link to="/trekking"><Text> Makalidurga</Text></Link></li>
                                        </ul>
                                    </Box>
                                    {/* 3rd row */}
                                    <Box className='row'>
                                        <h1>MUMBAI</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/trekking"><Text>Kalsubai Trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Sandhan Valley trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Rajmachi Trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Prabalmachi Trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Devkund Trek</Text></Link></li>
                                        </ul>
                                    </Box>
                                    {/* 4th row */}
                                    <Box className='row'>
                                        <h1>EXPEDITIONS</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/trekking"><Text>Everest Base Camp</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Annapurna Base Camp</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Goechala Trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Chadar trek</Text></Link></li>

                                        </ul>
                                    </Box>
                                    {/* 5th row */}
                                    <Box className='row'>
                                        <h1>UTTARAKHAND</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/trekking"><Text>Valley of Flowers</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Kedarkantha Trek</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Kedartal</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Dayara Bugyal</Text></Link></li>
                                            <li><Link to="/trekking"><Text>Rudranath</Text></Link></li>
                                        </ul>
                                    </Box>
                                    {/* 6th row */}
                                    <Box className='row'>
                                        <img src="https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                                    </Box>
                                    {/* 7th row */}
                                    <Box className='row'>
                                        <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                                    </Box>
                                    {/* 8th row */}
                                    <Box className='row'>
                                        <img src="https://images.unsplash.com/photo-1587547131116-a0655a526190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyZWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                                    </Box>
                                </Box>


                            </Box>
                        </li>

                        {/* 2nd a */}

                        <li>
                            <Link to="/trekking" _hover={{ textDecorationColor: "white" }}><Text fontWeight={"500"} color={"#dbdde5"} fontSize={["10px", "15px", "15px", "20px"]}>Tours</Text></Link>
                            <Box className="mega-box">
                                <Box className="content">
                                    {/* 1st row */}
                                    <Box className="row">
                                        <h1>HIMACHAL</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/camping"><Text>Kullu Manali</Text></Link></li>
                                            <li><Link to="/camping"><Text>Spiti Valley</Text></Link></li>
                                            <li><Link to="/camping"><Text>Shimla</Text></Link></li>
                                            <li><Link to="/camping"><Text>Parvati Valley</Text></Link></li>
                                            <li><Link to="/camping"><Text>Tosh</Text></Link></li>
                                            <li><Link to="/camping"><Text>Dalhousie </Text></Link></li>
                                            <li><Link to="/camping"><Text>Dharamshala</Text></Link></li>
                                        </ul>
                                    </Box>
                                    {/* 2nd row */}
                                    <Box className='row'>
                                        <h1>UTTRAKHAND</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/camping"><Text>Rishikesh</Text></Link></li>
                                            <li><Link to="/camping"><Text>Kedaranath Yatra</Text></Link></li>
                                            <li><Link to="/camping"><Text>Rishikesh food Walk</Text></Link></li>
                                            <li><Link to="/camping"><Text>Jim Corbett</Text></Link></li>
                                            <li><Link to="/camping"><Text>Rishikesh Spiritual</Text></Link></li>
                                        </ul>
                                    </Box>
                                    {/* 3rd row */}
                                    <Box className='row'>
                                        <h1>LADHAK</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/camping"><Text>Manali To Srinagar</Text></Link></li>
                                            <li><Link to="/camping"><Text>Leh Ladhak From Delhi</Text></Link></li>
                                            <li><Link to="/camping"><Text>Srinagar To Leh</Text></Link></li>
                                            <li><Link to="/camping"><Text>Leh SightSeeing</Text></Link></li>
                                            <li><Link to="/camping"><Text>Leh urtuk Village</Text></Link></li>
                                        </ul>
                                    </Box>
                                    {/* 4th row */}
                                    <Box className='row'>
                                        <h1>ANDAMAN</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/camping"><Text>Backpacking tour</Text></Link></li>
                                            <li><Link to="/camping"><Text>Honeymoon Tour</Text></Link></li>
                                            <li><Link to="/camping"><Text>Romantic Candlelight Beachside Honeymoon 4 Days Honeymoon</Text></Link></li>
                                            <li><Link to="/camping"><Text>8 Days Offsbeat</Text></Link></li>

                                        </ul>
                                    </Box>
                                    {/* 5th row */}
                                    <Box className='row'>
                                        <h1>DELHI TO DELHI</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/camping"><Text>Kasol Kheerganga</Text></Link></li>
                                            <li><Link to="/camping"><Text>Mcleodganj Triund</Text></Link></li>
                                            <li><Link to="/camping"><Text>Manali Lahaul</Text></Link></li>
                                            <li><Link to="/camping"><Text>Jibhi Tirthan</Text></Link></li>
                                            <li><Link to="/camping"><Text>Rudranath</Text></Link></li>
                                        </ul>
                                    </Box>
                                    {/* 6th row */}
                                    <Box className='row'>
                                        <h1>GOA</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/camping"><Text>4 Days Goa</Text></Link></li>
                                            <li><Link to="/camping"><Text>Grande Island</Text></Link></li>
                                        </ul>
                                    </Box>
                                    {/* 7th row */}
                                    <Box className='row'>
                                        <h1>SPITI</h1>
                                        <ul className='mega-links'>
                                            <li><Link to="/camping"><Text>Spiti From Manali</Text></Link></li>
                                            <li><Link to="/camping"><Text>Spiti Circuit</Text></Link></li>
                                        </ul>
                                    </Box>
                                </Box>


                            </Box>
                        </li>


                        {/* 3rd a */}
                        <li >
                            <Link _hover={{ textDecorationColor: "white" }}><Text fontWeight={"500"} color={"#dbdde5"} fontSize={["10px", "15px", "15px", "20px"]}>About us</Text></Link>
                            <Box className='mega-box'>
                                <Box className='row'>
                                    <h1>Our Mission</h1>
                                    <Center>
                                        <Text w="80%" textAlign={"center"} justifyContent={"center"} alignItems={"center"} alignContent={"center"}>BanBanjara’s mission is to empower and enhance the lives of its customers, employees, and the local communities that are key stakeholders in its business activities. We follow a strict triple bottom line, where we give equal importance to the People, Planet, and Profits. For every rupee that we generate as profit, a part of it goes towards a social and environmental cause. With this in our arsenal, our objective is to enhance the travel industry and redefine the way people browse and book their desired experiences.</Text>
                                    </Center>
                                </Box>
                                <Box className='content'>

                                    <Box className='row'>
                                        <img src="https://www.thespruce.com/thmb/2UqazxmwZj4edAq39EphfiDHStk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-165831199-56d751df3df78cfb37da972c.jpg" />
                                    </Box>

                                    <Box className='row'>
                                        <img src="https://www.ambius.com/dam/jcr:c377c122-e09a-4d1d-a750-481094c35dde/1200-image-banner-stock-woman-potting-plants-in-greenhouse-605764253.webp" />
                                    </Box>

                                    <Box className='row'>
                                        <img src="https://img.etimg.com/thumb/msid-100649932,width-650,height-488,imgsize-222262,,resizemode-75/gardening_istock.jpg" />
                                    </Box>
                                    <Box className='row'>
                                        <img src="https://www.thespruce.com/thmb/XoRg5ZDKDhX_XDIu618RYOLHH_s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vegetable-gardening-in-small-spaces-1403451-01-aa94b9199ba145079de2417b219c89b4.jpg" />
                                    </Box>
                                </Box>
                            </Box>
                        </li>
                        {/* 4th a */}
                        <li>
                            <Link to="/dashboard" _hover={{ textDecorationColor: "white" }}><Text fontWeight={"500"} color={"#dbdde5"} fontSize={["10px", "15px", "15px", "20px"]}>Dashboard</Text></Link>
                        </li>
                        {/* 6th a login */}
                        <li>
                            <Link onClick={onOpen} _hover={{ textDecorationColor: "white" }}><Text fontWeight={"500"}
                                color={name == ""||null ? "#dbdde5" : "#e2660f"}
                                fontSize={["10px", "15px", "15px", "20px"]}>{name == null||"" ? "Login" : name}</Text></Link>
                            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                                <DrawerOverlay>
                                    <DrawerContent>
                                        <DrawerCloseButton />
                                        <DrawerHeader>Login Form</DrawerHeader>
                                        <DrawerBody>
                                            <form onSubmit={handleLogin}>
                                                <Stack spacing={3}>
                                                    <FormControl isRequired>
                                                        <FormLabel htmlFor="email">Email</FormLabel>
                                                        <Input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </FormControl>
                                                    <FormControl isRequired>
                                                        <FormLabel htmlFor="password">Password</FormLabel>
                                                        <Input
                                                            type="password"
                                                            id="password"
                                                            name="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                    </FormControl>
                                                    <Button type="submit" colorScheme="teal">
                                                        Login
                                                    </Button>
                                                </Stack>
                                            </form>
                                        </DrawerBody>
                                    </DrawerContent>
                                </DrawerOverlay>
                            </Drawer>
                        </li>
                        {/* 7th a signup */}
                        <li>
                            <Link onClick={() => setIsOpen(true)} _hover={{ textDecorationColor: "white" }}><Button mt="-5px" _hover={{ bg: "white", color: "#e2660f", border: "2px solid #e2660f" }} bg="#e2660f" color="white"><Text>Register</Text></Button></Link>
                            <Modal isOpen={isOpenn} onClose={() => setIsOpen(false)}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>SIGN UP FORM</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <form>
                                            <FormControl>
                                                <FormLabel>Email</FormLabel>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </FormControl>

                                            <FormControl>
                                                <FormLabel>Password</FormLabel>
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </FormControl>

                                            <FormControl>
                                                <FormLabel>Name</FormLabel>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </FormControl>

                                            <FormControl>
                                                <FormLabel>Phone Number</FormLabel>
                                                <Input
                                                    type="tel"
                                                    name="phoneNumber"
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                />
                                            </FormControl>

                                            <Button mt={4} colorScheme="teal" type="submit" onClick={handleSubmit}>
                                                Submit
                                            </Button>
                                        </form>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </li>
                    </ul>
                    <Box className='hamburger'>
                        <HamburgerIcon w={8} h={8} color="white" />
                    </Box>
                </Flex>
            </Box>
        </Flex>

    )
}