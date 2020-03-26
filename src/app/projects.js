import React from "react";
import "../App.css";
import NavBar from "../common/components/navbar";
import Footer from "../common/components/footer";
import {Card} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const src = '/images/wireframe/white-image.png'

function Projects() {
  return (
    <div>
      <NavBar/>
      <Card.Group itemsPerRow={4}>
        <Card color="red" image={src} />
        <Card color="orange" image={src} />
        <Card color="yellow" image={src} />
        <Card color="olive" image={src} />
        <Card color="green" image={src} />
        <Card color="teal" image={src} />
        <Card color="blue" image={src} />
        <Card color="violet" image={src} />
        <Card color="purple" image={src} />
        <Card color="pink" image={src} />
        <Card color="brown" image={src} />
        <Card color="grey" image={src} />
      </Card.Group>
      <Footer/>
    </div>
  );
}

export default Projects;
