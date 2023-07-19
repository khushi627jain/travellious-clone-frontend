import logo from './logo.svg';
import './App.css';
import Allroutes from './Allroutes/Allroutes';
import { Navbar } from './homePage';
import { NavbarCode } from './Components/navbar';
import { Footer } from './Components/footer';
import { useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import { nameReducer } from './Redux/reducer';
function App() {




const [name,setName]=useState("")

         useEffect(()=>{

          let nameOF=localStorage.getItem("name");
          setName(nameOF)
      },[name])

  return (
    <div className="App">
 <NavbarCode nameOfUser={name}/>
      <Allroutes/>
    
      <Footer/>
    </div>
  );
}

export default App;
