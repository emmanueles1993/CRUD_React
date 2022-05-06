import { createContext } from "react";

const initialState = {
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
  const addTask = () => {
    console.log("adding a task");
  };

  return (
    <GlobalContext.Provider value={{ ...initialState, addTask }}>
      {children}
    </GlobalContext.Provider>
  );
};
