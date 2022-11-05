import React from 'react'
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { actioncreator } from '../state/index';


const Shop = () => {
    const dispatch = useDispatch();
  return (
      <div className='d-flex justify-content-center'>
          <h2> Withdraw/Deposit</h2>
          <button className="btn btn-primary mx-2" onClick={() => { dispatch(actioncreator.depositMoney(100)) }}>-</button>
         <h4>Your Updated Balance</h4>
          <button className="btn btn-primary mx-2" onClick={() => { dispatch(actioncreator.withdrawMoney()) }}>+</button>
    </div>
  )
}

export default Shop;