import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
//import Logo from "../assets/BlueTechtonicaWord.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

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
      <Navbar
        className="navbarstructure"
        style={{ backgroundColor: "lightgray" }}
      >
        <Container className="navbar" style={{ backgroundColor: "lightgray" }}>
          {/* <Navbar.Brand href="/">
            <img
              src={Logo}
              height="30"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand> */}
          <h1>Lend A Paw</h1>
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

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Logo from '../assets/BlueTechtonicaWord.png'

// function MyNavBar(props) {

//   return (
//     <>
//     <Navbar data-testid="navbar" bg="dark" variant="dark" sticky="top">
//       <Container>
//         <Navbar.Brand href="/">
//         <img
//               src={Logo}
//               height="30"
//               className="d-lg-inline-block"
//               alt="React Bootstrap logo"
//             />
//         </Navbar.Brand>
//         <Nav.Link >Your Link</Nav.Link>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Navbar.Text>
//             Signed in as: <a href="#login">Cristina Rodriguez</a>
//           </Navbar.Text>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </>
//   );
// };

// export default MyNavBar;
