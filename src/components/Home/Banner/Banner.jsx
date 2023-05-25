import React from 'react'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "react-responsive-carousel/lib/styles/carousel.css"

const Banner = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false} interval={2000} showIndicators={false} showThumbs={false}>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/Copy_of_bazic.in_graphics_1920_x_1080px_18.png?v=1664719746&width=750" alt="item1" />
            <button className='legend'>Shop Now</button>
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/Copy_of_bazic.in_graphics_1920_x_1080px_16.png?v=1664645370&width=750" alt="item1" />
            <button className='legend'>Shop Now</button>
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/Copy_of_bazic.in_graphics_1920_x_1080px_13.png?v=1664641596&width=750" alt="item1" />
            <button className='legend'>Shop Now</button>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner