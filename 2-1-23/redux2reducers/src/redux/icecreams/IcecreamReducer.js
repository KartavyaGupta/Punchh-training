import { ADD_ICECREAM,BUY_ICECREAM,RESET_ICECREAM } from "./IcecreamTypes";
const initial_state={
    numofIcecreams:10,
}
const IcecreamReducer=(state=initial_state,action)=>{
    switch(action.type){
        case ADD_ICECREAM: return {
            ...state,numofIcecreams:state.numofIcecreams+1
        }
        case BUY_ICECREAM: return {
            ...state,numofIcecreams:state.numofIcecreams-1
        }
        case RESET_ICECREAM: return {
            ...state,numofIcecreams:0,
        }
        default: return state;
    }
}
export default IcecreamReducer