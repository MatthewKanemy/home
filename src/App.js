import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import { HashRouter as HashRouter, Route, Switch, useHistory } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Portfolio" component={Portfolio}></Route>
        <Route exact path="/Resume" component={Resume}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
