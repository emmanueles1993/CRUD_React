export default function appReducer(state, action) {
  //action es que quiero hacer o actualizar y el state que datos tiene la aplicacion en que estado esta
  console.log(state, action);
  //switch multiples condicionales, nultiple acciones
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        tasks: [],
      };
    default:
      break;
  }
}

//usereducer permite utilizar el patron reducer dentro de nuestras aplicaciones
//para poder definir acciones, reducer y el disparar eventos dentro de nuestros estados
//permite tener una aplicacion que pueda tener un estado en un solo lugar
