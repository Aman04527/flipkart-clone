//Adding a data layer which is at to the top of our component . That layer will be accesible to all our child component which can be accesed whenever neeeded to that data layer 
//BY using this we dont need to pass state information from one compenent to the another component.. We dont need to pass state information to all the child component
//Best use to use state mangement

export const actionType = {
    SET_USER: "SET_USER",
}

const reducer = (state , action) => {
    console.log(action);
    switch (action.type){
        case actionType.SET_USER:
            return{
                //All state must be same only the user state must be changed
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}
export default reducer