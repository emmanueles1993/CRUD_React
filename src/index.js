import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./tailwind.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
); //React Router Dom es un modulo para obtener multiples url o multiples paginas dentro de mi proyecto de react(npm i react-router-dom){browserRouter}
//eliminar archivos innesesarios como el logo svg, reporte webvitals,setuptest,apptest, y tambien las rutas dentro de los archivos
