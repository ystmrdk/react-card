import React, { Component } from "react";
import {
  Grid,
  Input,
  Menu,
  Segment,
  Header,
  List,
  Container
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

class NavBar extends Component {
  render() {
    return (
        <Grid centered columns={2} style={{ padding: "5em 0em" }}>
          <Grid.Row>
            <Grid.Column></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8} textAlign="center">
             <h2>Made Under Pressure By Dex</h2>
             <h3>Copyright 2020</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default NavBar;
