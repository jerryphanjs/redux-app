import React, { Component } from 'react';
import GeneralView from './Layout/Main/Views/GeneralView';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="span9">
          <GeneralView />
        </div>
      </React.Fragment>
    )
  }
}
export default Home;