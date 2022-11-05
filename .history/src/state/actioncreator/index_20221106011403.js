export const depositMoney = (amount) => {

    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload:amount
        })
        
    }
    
}
//here we have created our actions that is withdraw and deposit

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload:'amount'
        })
        
    }
    
}