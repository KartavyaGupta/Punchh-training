import { ADD_CAKE, BUY_CAKE, RESET_CAKE } from "./CakeTypes"

const initialState={
    numofCakes:10
}
const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,numofCakes:state.numofCakes-1
        }
        case ADD_CAKE: return{
             ...state,numofCakes:state.numofCakes+1
        }
        case RESET_CAKE: return {
            ...state, numofCakes:0
        }
        default : return state;
    }
}
export default cakeReducer;