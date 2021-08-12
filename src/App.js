import OrgDetails from "./components/companyDetails";
import Home from "./components/home";
import Navbar from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import GithubState from './github/githubState';

const App = () => {


  return (
    <GithubState>
      <Router>
        <div className="App">
          <h1>Park Mobile React Challenge</h1>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/orgs/:org" component={OrgDetails} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;

