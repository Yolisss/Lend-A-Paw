import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Adoptablepets from "./pages/adoptablepets";
import Waystohelp from "./pages/waystohelp";
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
    ],
  },
]);

//RouterProvider
//figuring out what component to load based on url
//ex. if you have '/aboutme' it will figure out you
//would want aboutme component to display

function App() {
  return <RouterProvider router={router} />;
}
export default App;
