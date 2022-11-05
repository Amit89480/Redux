import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreator } from '../state/index';


const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney} = bindActionCreators(actioncreator, dispatch);
    return (
        <>
            
            <h2>Withdraw/Deposit Amount</h2>
      <div className='d-flex justify-content-center'>
        
          <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(10) }}>-</button>
         <h4>Your Updated Balance</h4>
          <button className="btn btn-primary mx-2" onClick={() => { depositMoney(10) }}>+</button>
            </div>
            
            </>
  )
}

export default Shop;