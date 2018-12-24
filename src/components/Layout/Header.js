import React, { Component } from 'react';
import Navbar from './Header/TopNavbar';
import TopLeft from './Header/TopLeft';

class Header extends Component {
  render() {
    return (
     <React.Fragment>
      <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="topNav">
            <div className="container">
              <div className="alignR">
                <TopLeft />
                <Navbar />
              </div>
            </div>
          </div>
        </div>
     </React.Fragment>
    )
  }
}
export default Header;