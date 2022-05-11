import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useHistory, useParams } from "react-router-dom"; //useHistory para redirecionar y useparams para poder extraer si existe un parametro
const TaskForm = () => {
  const { addTask, tasks } = useContext(GlobalContext); //aqui importamos del global context
  const history = useHistory();
  const params = useParams();

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });
  //formularios
  const handleChange = (event) => {
    //evento onchange estamos al pendiente del valor(lo que se escribe)que tenga ese input y me lo pinta en la consola,maneja la entrada del usuario en tiempo real.
    setTask({ ...task, [event.target.name]: event.target.value });
    {
      /* ... copia de datos  y actualiza*/
    }
  };

  const handleSubmit = (event) => {
    //con los datos ya ingresados podemos utilizar el evento onSubmit para procesar el formulario
    event.preventDefault();
    addTask(task);
    history.push("/"); //en el formulario redirige a la principal
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id); //de las tareas que tengo en el estado su id coincide con el params.id, se guarda en esta constante

    console.log(taskFound);
    if (taskFound) {
      console.log("editing");
      // setTask(taskFound);
      // console(taskFound);
    } else {
      console.log("creating");
    }
  }, [params.id]);

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2>A task</h2>

        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            onChange={handleChange} //esta al pendiente de este input
            value={task.title}
            className="py-3 px-4 focus:text-gray-100 bg-gray-700 w-full"
          />
        </div>
        <div className="mb5">
          <textarea
            name="description"
            rows="2"
            placeholder="Write a description"
            onChange={handleChange}
            value={task.description}
            className="py-3 px-4 focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
        </div>
        <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

//el usestate es una funcion con un estado inicial o valor inicial y contiene una funcion llamada set que modifica o actualizar ese usestate y pertenece a un solo componente
//haz ejercicios de practicas comentados,desde lo basico a intermedio y sube el repositorio
// aconstumbrate a comentar, por que se te  olvidan como funcionan las cosas y para mejorar tu lenguaje tecnico, para darte a entender
// a desglozar todo en tareas pequeñas o por temas o secciones para que sea mas facil ej :temas (context(globalcontext),provider,formularios(onchange y onsubmit),keys, destructuring,usereducer), deja ver tutos de hindues :c
// no se de useefect , ni de useparams
