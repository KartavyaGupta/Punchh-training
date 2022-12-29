const redux=require('redux');
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;

const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';

function buyCake(){
    return {
        type:BUY_CAKE,
    }
}
function buyIceCream(){
    return {
        type:BUY_ICECREAM,
    }
}
const intitalCakeState={
    numofCakes:10,
}
const intitalIceCreamState={
    numofIceCreams:20,
}

const cakeReducer=(state=intitalCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,numofCakes:state.numofCakes-1
        }
        default: return state
    }
}

const iceCreamReducer=(state=intitalIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,numofIceCreams:state.numofIceCreams-1
            }
        default: return state
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCrem:iceCreamReducer,
})

const store=createStore(rootReducer);
console.log("initital state ",store.getState());

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();