import React, { Component } from 'react';
import GeneralView from './Layout/Main/Views/GeneralView';
import ListView from './Layout/Main/Views/ListView';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
    <React.Fragment>
      <Router>
        <div className="span9">
          <GeneralView />
          <ListView />
          <Route path="/" exact component={Home} />
          <Route path="/listview" exact component={ListView} />
        </div>
      </Router>
    </React.Fragment>
    )
  }
}
export default Home;