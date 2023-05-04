import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListAnimals from "./components/ListAnimals";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <ListAnimals />
      <Form />
    </div>
  );
}

export default App;
