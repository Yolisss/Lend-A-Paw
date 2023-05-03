import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListAnimals from "./components/ListAnimals";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <ListAnimals />
    </div>
  );
}

export default App;
