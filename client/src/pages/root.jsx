import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Contactinfo from "../components/contactinfo";
import { Container } from "semantic-ui-react";

//root is going to have two elements (in this ex)
//any child route of root is going to have this component
//be the base
//when you call listblogs
//the about me or list component
//is going to take the place of outlet
//outlet is placeholder for whatever is going to be on
//the actual page

export default function Root() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Container>
        <h3>Lend A Paw</h3>
        <Contactinfo />
      </Container>
    </div>
  );
}
