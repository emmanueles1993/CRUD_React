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

export default App;
