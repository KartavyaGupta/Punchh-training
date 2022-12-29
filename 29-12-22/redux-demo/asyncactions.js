const redux=require('redux');
const createStore=redux.createStore;
const applyMiddleWare= redux.applyMiddleware
const thunkMiddleWare = require('redux-thunk').default
const axios= require('axios')

const intitalState={
    loading:false,
    users:[],
    error:'',
}

const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR='FETCH_USERS_ERROR';

const fetchUsersRequest = ()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}


const fetchUsersSuccess = users =>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload: users,
    }
}


const fetchUsersError = error=>{
    return {
        type:FETCH_USERS_ERROR,
        payload: error,
    }
}

const reducer=(state=intitalState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
            ...state,loading:true
        }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,users:action.payload,error:''
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,users:[],error:action.payload
        }
    }
}


const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users=response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUsersError(error.message))
        })
    }
}
const store=createStore(reducer,applyMiddleWare(thunkMiddleWare))
store.subscribe(()=>{
    console.log("state is ",store.getState());
})
store.dispatch(fetchUsers());