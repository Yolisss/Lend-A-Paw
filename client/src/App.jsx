import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Adoptablepets from "./pages/adoptablepets";
import Waystohelp from "./pages/waystohelp";
import AdoptionForm from "./components/Form";
import Adoptionpage from "./pages/adoptionpage";
import Thankyou from "./components/thankyou";
//Browser router which will actually help connect to the browser
//routes component which is going to be the parent for all our routes
//route, used to set up a single page

//root as base component
//you have two children which is the two pages you want
//want displayed

//index: this component has no other paths, so just inherit path from
//the parent

//var router holds our routes that's being defined
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <Aboutus />,
      },
      {
        path: "adoptablepets",
        element: <Adoptablepets />,
      },
      {
        path: "waystohelp",
        element: <Waystohelp />,
      },
      {
        path: "adopt/:animalid",
        element: <Adoptionpage />,
      },
      {
        path: "thankyou",
        element: <Thankyou />,
      },
    ],
  },
]);

//RouterProvider
//figuring out what component to load based on url
//ex. if you have '/aboutme' it will figure out you
//would want aboutme component to display

function App() {
  //in order for link to work, it needs to know all of its routes
  //React Context stores the routes
  //in your app, as long as its surrounded by RouterProvider
  //then links are defined because the context exist
  // in order for the link compenent to know if the path exists,
  //it needs to know what is a valid route
  //all of those routes exist within a react context (fancy feature that
  //makes info globally available to your application)
  return <RouterProvider router={router} />;
}
export default App;
