import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Login from "../Paginas/Login";
import Presentacion from "../Paginas/Presentacion";
import Potabi from "../Paginas/Potabi";
import Layout from "../componentes/Layout";
import Video from "../Paginas/video";
import Foropag from "../Paginas/foropag";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Login} /> 
          <Layout>
            <Route exact path="/Presentacion" component={Presentacion} />
            <Route exact path="/potabi" component={Potabi} />
           <Route exact path = "/video" component={Video} />
           <Route exact path = "/foropag" component={Foropag} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
