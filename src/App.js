import Home from "./pages/Home";
import { BrowserRouter as BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
