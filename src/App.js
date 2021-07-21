import "./App.css";
import Headers from "../src/components/Header";
import Home from "../src/components/Home";
import Trash from "../src/components/Trash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewCard from "./components/ViewCard";
function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/Trash" component={Trash}></Route>
          <Route exact path="/ViewCard" component={ViewCard}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
