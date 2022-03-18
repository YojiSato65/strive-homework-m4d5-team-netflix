import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MovieRow from "./components/MovieRow";

function App() {
  return (
    <div>
      <MyNavbar />
      <MovieRow />
      <MyFooter />
    </div>
  );
}

export default App;
