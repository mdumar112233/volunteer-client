import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AddEvent from './components/AddEvent/AddEvent';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
        <Header/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/addEvent'>
          <AddEvent/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
