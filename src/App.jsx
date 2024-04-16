import {
  useEffect,
  useMemo,
  useRef,
  useState,
  memo,
  useCallback,
  lazy,
  Suspense,
  useReducer,
} from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { useIncrement } from "./hooks/useIncrement.js";
import { useDocumentTitle } from "./hooks/useDocumentTitle.js";
import { useFetch } from "./hooks/useFetch.js";
import { createPortal } from "react-dom";

function reducer(state, action) {
  if (action.type === "REMOVE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.name !== action.payload.name),
    };
  }

  if(action.type === 'TOGGLE_TODO'){
    return{
      ...state,
      todos:state.todos.map(todo => todo === action.playLoad ? {
        ...todo,
        checked: !todo.checked
      } : todo) 
    }
  }

  return state;
}


function App() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [
      {
        name: "Faire les courses",
        checked: false,
      },
      {
        name: "Ranger les courses",
        checked: false,
      },
      {
        name: "Manger les courses",
        checked: false,
      },
    ],
  });
  return (
    <ul>
      {state.todos.map((todo) => (
        <li
          key={todo.name}
          onClick={null}
        >
          <input type="checkbox" onChange={() => dispatch(({type:'TOGGLE_TODO'}))} checked={todo.cheked}/>
          {todo.name}
          <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
