import { add_task } from "./actiontypes.js";
import { complete_task } from "./actiontypes.js";
import { delete_task } from "./actiontypes.js";
import { delete_all_task } from "./actiontypes.js";

const initial_state = {
  todos: [
    { id: 1, task: "first todo", completed: true },
    { id: 2, task: "second todo", completed: false },
  ],
};

export const listreducer = (state = initial_state, action) => {
  switch (action.type) {
    case add_task:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case complete_task:
        let newToDos=state.todos.map((item)=>{
            if(item.id==action.payload){
              return {...item,completed:true}
            }
            return item;
          })
        return {
            ...state,todos:newToDos
        }
    case delete_task:
        newToDos= state.todos.filter(item => item.id!=action.payload);
        return {
            ...state,todos:newToDos
        }
    case delete_all_task:
        return {
            ...state,todos:[]
        }
    default : return state;
  }
  
};
