import {combineReducers, createStore} from 'redux'
import cakeReducer from './cakes/CakeReducer'
import IcecreamReducer from './icecreams/IcecreamReducer';
const rootreducer=combineReducers({cake:cakeReducer,icecream:IcecreamReducer})
const store1=createStore(rootreducer);
// const store1=createStore(IcecreamReducer);
// const store1=createStore(cakeReducer);
export default store1;