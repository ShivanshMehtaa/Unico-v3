import React from 'react'
import "./Checkout.css"
import axios from "axios" 
import Unico from "../../assets/Unico.jpeg"



const Checkout = () => {
   
    const data = {amount : 4500}
    const clickHandler = async(e)=>{
         e.preventDefault();
         var amount1 = ''
        //  var id1 =''
         var key1 =''
        try {
             axios.post("http://localhost:8080/api/v1/Payment/checkOut" ,{data:data}).then((res)=>{
                console.log(res.data.data) 
                amount1 = res.data.data.amount ;
                console.log(amount1) ;
               const  id1 = res.data.data.id ;
                console.log(id1) ;
                axios.get('http://localhost:8080/api/v1/Payment/getKey').then((res)=>{
                key1 = res.data.key ;
                console.log(key1) ;
            })

const options = {
            key :key1  ,// Enter the Key ID generated from the Dashboard
            amount: amount1, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Unico",
            description : "Test Transaction",
            image  : "https://media.licdn.com/dms/image/D4D0BAQE1RoLu3MGKQA/company-logo_200_200/0/1683434679314?e=2147483647&v=beta&t=L0jzHVX8uXR2yP7UDZQsD74gyizRQEZE7aG8ymFMF6c",
            order_id: id1, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:8080/api/v1/Payment/paymentVarification",
            prefill: {
            name: "Gaurav Kumar", //login user ka name
            email: "gaurav.kumar@example.com", //login user
            contact: "9000090000" //login user
    },
            notes: {
                 address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
};
var razor = new window.Razorpay(options);
razor.open();
            
        

})



            
        } catch (error) {
            console.log(error) ;
        }
    }

  return (
    <div>
      <div class="container">

<form action="">

    <div class="row">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>Country:</span>
                <input type="text" placeholder="India"/>
            </div>
            <div class="flex">
                <div class="inputBox">
                    <span>First Name:</span>
                    <input type="text" placeholder="first name"/>
                </div>
                <div class="inputBox">
                    <span>Second Name:</span>
                    <input type="text" placeholder="second name"/>
                </div>
            </div>
            <div class="inputBox">
                <span>Address :</span>
                <input type="text" placeholder="room - street - locality"/>
            </div>
            <div class="inputBox">
                <span></span>
                <input type="text" placeholder="Apartment, suite, etc:"/>
            </div>
            <div class="inputBox">
                <span>Phone:</span>
                <input type="text" placeholder="mumbai"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>City:</span>
                    <input type="text" placeholder="india"/>
                </div>
                <div class="inputBox">
                    <span>State :</span>
                    <input type="text" placeholder="123 456"/>
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456"/>
                </div>
            </div>

        </div>

        {/* <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>cards accepted :</span>
                <img src="../../assets/card_img.png" alt=""/>
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo"/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"/>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="2022"/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="1234"/>
                </div>
            </div>

  </div>*/}

    </div> 

    <input type="submit" onClick={clickHandler} value="proceed to checkout" class="submit-btn"/>

</form>

</div>    

    </div>
  )
}

export default Checkout