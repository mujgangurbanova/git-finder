import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/users/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/state";
import AlertState from "./context/alert/state";
import Alert from "./components/layouts/Alert";

function App() {
  return (
    <GithubState>
      <AlertState>
      <Router>
        <Navbar />
        <div className="container">
          <Alert/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
          </Switch>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
