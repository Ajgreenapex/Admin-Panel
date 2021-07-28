import "./App.css";
import Headers from "../src/components/Header";
import Home from "../src/components/Home";
import Trash from "../src/components/Trash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewCard from "./components/ViewCard";
import SocialMedia from "./components/SocialMedia";
function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/Trash" component={Trash}></Route>
          <Route exact path="/ViewCard" component={ViewCard}></Route>
          <Route exact path="/SocialMedia" component={SocialMedia}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
