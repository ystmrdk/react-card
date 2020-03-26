import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "../../app/home";
import Contact from "../../app/contact";
import Projects from "../../app/projects";
import TugasPapat from "../../app/tugas4";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tugasEmpat" component={TugasPapat}/>
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }
}

export default Router;
