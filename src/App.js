import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import components
import NavbarContainer from './containers/Navbar'
import ListviewContainer from './containers/Listview'
import Detailview from './components/Detailview'

function App() {
  return (
    <Router>
      <NavbarContainer />
      <Switch>
        <Route path="/ninetyseven-client/" exact component={ListviewContainer} />
        <Route path="/ninetyseven-client/:id" component={Detailview} />
      </Switch>
    </Router>
  );
}

export default App;
