import {Box,  } from '@chakra-ui/react'
  import "./homepage.css"


import { CommentBox, MainFront, PopularAttraction, PopularDestination } from './Components/All';
  import 'react-multi-carousel/lib/styles.css';

  import { useEffect ,useState} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Experience, SubscribePart } from './Components/All';

library.add(faStar);


export default function Navbar(){
 

    return(
       <Box m="auto" bg="#f9f9f9">

{/* //navbar */}
       


<MainFront/>
<Box w="90%" m="auto" bg="#f9f9f9">
<PopularDestination/>
<PopularAttraction/>
<Experience/>
<CommentBox/>
<Box  bg={"#f9f9f9"} p="40px" mt="30px" >
  <SubscribePart/>

</Box>
</Box>


        </Box>
    )
}