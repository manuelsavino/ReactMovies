import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';


const App = () => (
  <Router>
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={MoviesList} />
        <Route path={process.env.PUBLIC_URL + '/:id'} component={MovieDetail} />
      </Switch>
    </div>
  </Router>
)


export default App;
