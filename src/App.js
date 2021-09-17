import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { HashRouter as HashRouter, Route, Switch, useHistory } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Portfolio" component={Portfolio}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
