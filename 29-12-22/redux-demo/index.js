// console.log("hello world");

const redux= require('redux');
const createStore=redux.createStore;

const BUY_CAKE='BUY_CAKE'
function buycake(){
    return {
        type: BUY_CAKE,
        info:'first redux action',
    }
}
// reducer 
// (previousstate,action)=> new state

//initital state 
const inititalState={
    numOfCakes:10,
}

const reducer=(state=inititalState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default:{
            return state;   
        }
    }
}
//reducer takes initial state and action
//createstore takes reducer as input

//creating redux store
const store=createStore(reducer)

//getting initial state before any action
console.log(store.getState());

//subscribe to a listener
const unsubscribe=store.subscribe(()=>{   
    console.log("updated state",store.getState());
})

//dispatch an action
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());

//store.subscribe returns a something which returns a method which can be used to unsubscribe

unsubscribe();


//summary :
//first create actions as string constants stored in variable
//first create a initial state 
//then create a function that returns that intital state
// then create a reducer that takes intital state and action and returns next state

// create a redux store using redux.createStore(reducer)
// we can get state of store using store.getState();

//subscribe to that store using store.subscribe which also returns a method unsubscribe which we can use to remove the listener

//dispatch some action store.dispatch()

//unsubscribe using unsubscribe();
