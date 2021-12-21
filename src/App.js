import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
