export default reducer = (state = 0, action) => {
    if (action.type == 'deposit') {
        return state+action.payload
    }
    

}