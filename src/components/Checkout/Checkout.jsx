import React from 'react'
import "./Checkout.css"

const Checkout = () => {
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

    <input type="submit" value="proceed to checkout" class="submit-btn"/>

</form>

</div>    

    </div>
  )
}

export default Checkout