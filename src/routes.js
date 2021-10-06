import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { App }  path="/" exact />
       </BrowserRouter>
   )
}

export default Routes;