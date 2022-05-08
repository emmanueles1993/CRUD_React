import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
const initialState = {
  // esta tarea con elementos se compartira a multiples componenetes
  tasks: [
    {
      id: "1",
      title: "titleone",
      description: "Some description",
      done: false,
    },
    {
      id: "2",
      title: "titletwo",
      description: "Some descriptiontwo",
      done: false,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  //dispatch es la funcion que actualiza el estado y appReducer es un conjunto de condicionales, el estado actual esta en state

  const addTask = (task) => {
    // funcion para añadir tareas
    dispatch({ type: "ADD_TASK", payload: { id: 1, title: "nuevo" } });
  };
  //ADD_TASK es el action.type
  //payload para pasar la tarea que dato te voy a pasar por esta accion

  //funcion para eliminar
  const deleteTask = () => {
    dispatch({ type: "DELETE_TASK" });
  };

  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask }}>
      {" "}
      {/*para que se tenga acceso a esta funcion esta la tiene el value */}
      {children}
    </GlobalContext.Provider>
  );
};
//31-34 almacena el estado y se los da a sus componentes hijos
//  Context(crear carpeta) es un api de react que  permite utilizar un estado global, el cual muchos componentes pueden empezar a consumir
// no se te olvide exportar e importar
