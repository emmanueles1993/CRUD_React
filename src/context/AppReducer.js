export default function appReducer(state, action) {
  //action es que quiero hacer o actualizar y el state que datos tiene la aplicacion en que estado esta
  console.log(state, action);
  //switch multiples condicionales, multiple acciones
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        //por cada tarea que empieces a recorrer, si la tarea en su id es distinta al action.payload({type: 'DELETE_TASK', payload: 'aa2759da-90b1-46b2-b703-3c1c9ac32600'}) que es el id , entonces elimina
      };
    default:
      break;
  }
}

//usereducer permite utilizar el patron reducer dentro de nuestras aplicaciones
//para poder definir acciones, reducer y el disparar eventos dentro de nuestros estados
//permite tener una aplicacion que pueda tener un estado en un solo lugar
