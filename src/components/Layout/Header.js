import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
     <React.Fragment>
      <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="topNav">
            <div className="container">
              <div className="alignR">
                <div className="pull-left socialNw">
                  <a href="/"><span className="icon-twitter"></span></a>
                  <a href="/"><span className="icon-facebook"></span></a>
                  <a href="/"><span className="icon-youtube"></span></a>
                  <a href="/"><span className="icon-tumblr"></span></a>
                </div>
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