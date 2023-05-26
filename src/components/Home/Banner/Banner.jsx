import React from 'react'
import Banner1 from "../../../assets/Banner-1.png"
import Banner2 from "../../../assets/Banner-2.png"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "react-responsive-carousel/lib/styles/carousel.css"
import { Link, useNavigate } from 'react-router-dom'


const Banner = () => {
  const Navigate = useNavigate();
  const clicked = ()=>{
    // console.log("baaner") ;
    Navigate('/allProducts')
  }
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false} interval={2000} showIndicators={false} showThumbs={false}>
        <div onClick={clicked}>
            <Link  >
              <img src={Banner1} alt="item1"  />
            </Link>
            {/* <button className='legend'>Shop Now</button> */}
        </div>
        <div onClick={()=>{Navigate('/Millet-Meusli')}}>
            <img src={Banner2} alt="item1" />
            {/* <button className='legend'>Shop Now</button> */}
        </div>
      </Carousel>
    </div>
  )
}

export default Banner