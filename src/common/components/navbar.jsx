import React, { Component } from "react";
import { Grid, Input, Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

class NavBar extends Component {
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Row>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8} textAlign="center">
            <Menu secondary widths={3} textAlign="center">
              <Menu.Item as={NavLink} to="/home" name="home" />
              <Menu.Item as={NavLink} to="/projects" name="projects" />
              <Menu.Item as={NavLink} to="/contact" name="contact" />
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default NavBar;
