import { Route, Switch } from "react-router-dom";

import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { ContextProvider } from "./context/GlobalContext";

import "./App.css";

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            {/*Todos los componentes hijos acceden a las tareas que contiene el context provider  */}
            <Heading />
            <Switch>
              <Route path="/" component={TaskList} exact />
              <Route path="/add" component={TaskForm} exact />
            </Switch>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}
/* contextprovider engloba al resto de componentes, no se para que el switch */
//aqui se importan todos los componentes, aqui estan las rutas, aqui esta nuestra app que es llamada desde el index donde se pintan nuestra app
export default App;
