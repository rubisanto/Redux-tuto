// importer redux
import { createStore, combineReducers } from "redux";

let id = 3;

const initialState = [
  {
    id: 1,
    title: "Première tâche",
    completed: false,
  },
  {
    id: 2,
    title: "Deuxième tâche",
    completed: true,
  },
];

const ADD_TODO_ACTION = "ADD_TODO_ACTION";

// mettre une valeur par défaut au state de initialState
function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: ++id, completed: false, ...action.payload }];
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    todos: TodoReducer,
    filter: (state = 0, action) => state,
  }),

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// écouter les nouvelles valeurs du store
store.subscribe(() => console.log(store.getState()));

// envoyer action particulière
store.dispatch({ type: ADD_TODO_ACTION, payload: { title: "Démo" } });
