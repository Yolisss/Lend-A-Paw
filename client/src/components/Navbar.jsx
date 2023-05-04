import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
//import Logo from "../assets/BlueTechtonicaWord.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

//Browser router which will actually help connect to the browser
//routes component which is going to be the parent for all our routes
//route, used to set up a single page

//mynavbar is child to RouterProvider
//all of the link components will affectively
//know the routing system of the router var from app.jsx

function MyNavbar(props) {
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
            <Navbar.Text>
              Signed in as: <a href="#login">Yolisma Zacarias</a>
            </Navbar.Text>
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
