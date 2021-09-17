import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Portfolio" component={Portfolio}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
