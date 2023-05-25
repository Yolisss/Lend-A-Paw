import MyNavBar from "./components/Navbar";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Catordog from "./components/catordog";
import Contactinfo from "./components/contactinfo";
import { Form } from "react-bootstrap";

//Test about Navbar
test("Navbar renders correctly", () => {
  //render function will take react and display it in a
  //virtual browser
  const { getByTestId } = render(
    //to make context exist, you wrap it around with
    //Browser router
    //render provides functions that can be later used inthe
    //virtual browser to access or interact w elem i.e { getByTestId}
    //{ getByTestId } => similar to the element selector (box w arrow from inspector tools)
    <BrowserRouter>
      <MyNavBar />
    </BrowserRouter>
  );
  //selecting that elem and storing a reference to it
  //now you can perform any action to it
  //you can check if it has a className
  const navbarElement = getByTestId("navbar");
  //"we expect it to exist after the run"
  expect(navbarElement).toBeDefined();
});

test("Check that the button login is in the document", () => {
  render(
    <BrowserRouter>
      <MyNavBar />
    </BrowserRouter>
  );
  const button = screen.getByText("Log In");
  expect(button).toBeDefined();
});

test("catordog renders correctly", () => {
  //render function will take react and display it in a
  //virtual browser
  const { getByTestId } = render(
    //to make context exist, you wrap it around with
    //Browser router
    //render provides functions that can be later used inthe
    //virtual browser to access or interact w elem i.e { getByTestId}
    //{ getByTestId } => similar to the element selector (box w arrow from inspector tools)
    <BrowserRouter>
      <Contactinfo />
    </BrowserRouter>
  );
  //selecting that elem and storing a reference to it
  //now you can perform any action to it
  //you can check if it has a className
  const contactInfoListElement = getByTestId("contactinfolist");
  //"we expect it to exist after the run"
  expect(contactInfoListElement).toBeDefined();
});

// test("Form renders correctly", () => {
//   //render function will take react and display it in a
//   //virtual browser
//   const { getByTestId } = render(
//     //to make context exist, you wrap it around with
//     //Browser router
//     //render provides functions that can be later used inthe
//     //virtual browser to access or interact w elem i.e { getByTestId}
//     //{ getByTestId } => similar to the element selector (box w arrow from inspector tools)
//     <BrowserRouter>
//       <Contactinfo />
//     </BrowserRouter>
//   );
//   //selecting that elem and storing a reference to it
//   //now you can perform any action to it
//   //you can check if it has a className
//   const contactInfoListElement = getByTestId("formtest");
//   //"we expect it to exist after the run"
//   expect(contactInfoListElement).toBeDefined();
// });
// test("Check that the Full Name is in the document", () => {
//   render(
//     <BrowserRouter>
//       <Form />
//     </BrowserRouter>
//   );
//   const button = screen.getByText("Email");
//   expect(button).toBeDefined();
// });
