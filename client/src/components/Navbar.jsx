import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
//import Logo from "../assets/BlueTechtonicaWord.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import images from "../images/images";
//Browser router which will actually help connect to the browser
//routes component which is going to be the parent for all our routes
//route, used to set up a single page

//mynavbar is child to RouterProvider
//all of the link components will affectively
//know the routing system of the router var from app.jsx

function MyNavbar(props) {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#e1c1e0" }}>
        <img
          src={images.logo}
          alt=""
          className="lendapaw-logo"
          style={{ margin: "auto", width: "25%", textAlign: "center" }}
        />
      </div>
      <Navbar
        className="navbarstructure"
        style={{ backgroundColor: "#e1c1e0", marginBottom: "100px" }}
      >
        <Container
          className="navbar"
          style={{ color: "black", backgroundColor: "#e1c1e0" }}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
          <Link to="/adoptablepets" className="nav-link">
            Adoptable Pets
          </Link>
          <Link to="/waystohelp" className="nav-link">
            Ways To Help
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {isAuthenticated ? (
              <>
                <div className="nav-link fst-italic">
                  Signed in as: {user.email}
                </div>
                <button className="btn btn-primary" onClick={() => logout()}>
                  Log Out
                </button>
              </>
            ) : (
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "pink" }}
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
