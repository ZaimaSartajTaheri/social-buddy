import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/posts">
          <Posts/>
        </Route>
        <Route path="/post/:id">
          <PostDetails/>
        </Route>
        <Route exact path="/">
          <Posts/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
