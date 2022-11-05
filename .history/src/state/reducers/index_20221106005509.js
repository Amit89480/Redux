import { combineReducers, conbineReducers } from 'redux';
import amountreducer from './amountreducer';


 reducers = combineReducers({
    //if we will have more than one reeducer funtion we can comnine here
    amount: amountreducer
 })
export default