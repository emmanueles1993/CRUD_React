import React, { useContext } from "react"; //usecontext, usa ese contexto
import { GlobalContext } from "../context/GlobalContext"; //createcontex, crea el contexto
import { Link } from "react-router-dom";
const TaskList = () => {
  const { tasks, deleteTask } = useContext(GlobalContext); //aqui importamos las tareas del global context
  return (
    <div className="flex justify-center">
      {/* <button onClick={() => deleteTask()}>delete all</button> */}
      {/*el evento onclick activa una funcion(ejecuta) cuando se hace click en el elemento */}
      <div className="w-6/12">
        {" "}
        {/* que es esto */}
        {tasks.map((task) => (
          <div
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
            key={task.id}
          >
            <div>
              <h1>{task.title}</h1>
              <h6>{task.id}</h6>
            </div>
            <div>
              <Link
                to={`/edit/${task.id}`}
                className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2"
              >
                Edit
              </Link>
              <button
                className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
