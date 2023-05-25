import React from 'react'
import Category from './Category/Category'
import Products2 from '../Products/Products2'
import Newsletter from '../Footer/Newsletter/Newsletter'
import "./Second.scss"

const Second = () => {
  return (
    <div>
      <div className="main-content">
        <div className="layout">
            <Category/>
            
        </div>
      </div>
      <Newsletter/>

    </div>
  )
}

export default Second
