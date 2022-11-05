import React from 'react'
import Shop from './Shop.css'

const Shop = () => {
  return (
      <div className='container' style={{display:'flex',}}>
          <button className="btn btn-primary mx-2">-</button>
          Withdraw/Deposit
          <button className="btn btn-primary mx-2">+</button>
    </div>
  )
}

export default Shop