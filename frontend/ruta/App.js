import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../src/Paginas/Login";
import Presentacion from "../src/Paginas/Presentacion";
import potabi from "../src/Paginas/potabi";
import Layout from "../src/componentes/Layout";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Login} /> 
          <Layout>
            <Route exact path="/Presentacion" component={Presentacion} />
            <Route exact path="/potabi" component={potabi} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
