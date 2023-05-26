import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Account.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Account = () => {
  const Navigate =  useNavigate();
  const clickHandeler = ()=>{
    localStorage.clear();
    Navigate('/')
  }

  if (!localStorage.user) {
    return (
      <>
        <li onClick={() => Navigate("/login")}>
          &nbsp;<span>Please Login First</span>{" "}
        </li>
      </>
    );
  }
  return (
    <div>
      <Header/>
      <section id="about-us">

        <div className="text">
          {/* <h4>About Us</h4> */}
          <h1>
            Account Detials
          </h1>
          <div className="ctas">
            {/* <div className="banner-cta">About</div> */}
            <div className="banner-cta" onClick={clickHandeler}>Logout</div>
          </div>
        </div>
        <div className="text">
          {/* <h4>About Us</h4> */}
          <h1>
          Orders Placed
          </h1>
          <div className="last-text">
            <div className="text1">
              <h3>You Haven't Placed any orders yet</h3>
            </div>
          </div>
          <div className="ctas">
            {/* <div className="banner-cta">About</div> */}
            <div className="banner-cta">Shop Now</div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Account