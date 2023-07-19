import React from "react";
import "./style.css"
import logo from "./card_img.png"
import video from "./pexels-paulo-renato-3578883-3840x2160-30fps.mp4"
import { useNavigate } from "react-router-dom";
function PaymentDetails(){
    const navigate= useNavigate()
    return (
        <div class="container">

        <form action="" onSubmit={()=>{
            alert("Payment is completed successfully !")
            navigate("/")
        }}>
        <video src={video} autoPlay muted loop />
            <div class="row">
    
                <div class="col">
    
                    <h3 class="title">billing address</h3>
    
                    <div class="inputBox">
                        <span>full name :</span>
                        <input type="text" placeholder="Enter Your Name"/>
                    </div>
                    <div class="inputBox">
                        <span>email :</span>
                        <input type="email" placeholder="example@example.com"/>
                    </div>
                    <div class="inputBox">
                        <span>address :</span>
                        <input type="text" placeholder="Area - Street - Locality"/>
                    </div>
                    <div class="inputBox">
                        <span>city :</span>
                        <input type="text" placeholder="Select Your City"/>
                    </div>
    
                    <div class="flex">
                        <div class="inputBox">
                            <span>state :</span>
                            <input type="text" placeholder="Select Your State"/>
                        </div>
                        <div class="inputBox">
                            <span>zip code :</span>
                            <input type="text" placeholder="123 456"/>
                        </div>
                    </div>
    
                </div>
    
                <div class="col">
    
                    <h3 class="title">Payment</h3>
    
                    <div class="inputBox">
                        <span>cards accepted :</span>
                       <img src={logo} alt=""/>
                    </div>
                    <div class="inputBox">
                        <span>name on card :</span>
                        <input type="text" placeholder="mr. abc-xyz"/>
                    </div>
                    <div class="inputBox">
                        <span>credit card number :</span>
                        <input type="number" placeholder="1111-2222-3333-4444"/>
                    </div>
                    <div class="inputBox">
                        <span>exp month :</span>
                        <input type="text" placeholder="Enter Month"/>
                    </div>
    
                    <div class="flex">
                        <div class="inputBox">
                            <span>exp year :</span>
                            <input type="number" placeholder="2022"/>
                        </div>
                        <div class="inputBox">
                            <span>CVV :</span>
                            <input type="text" placeholder="123"/>
                        </div>
                    </div>
    
                </div>
        
            </div>
    
            <input type="submit" value="proceed to checkout" class="submit-btn"/>
    
        </form>
    
    </div>    
    )
}
export default PaymentDetails;