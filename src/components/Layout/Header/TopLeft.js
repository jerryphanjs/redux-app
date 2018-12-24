import React, { Component } from 'react';

class TopLeft extends Component {
  render() {
    return (
       <div className="pull-left socialNw">
        <a href="/"><span className="icon-twitter"></span></a>
        <a href="/"><span className="icon-facebook"></span></a>
        <a href="/"><span className="icon-youtube"></span></a>
        <a href="/"><span className="icon-tumblr"></span></a>
      </div>
    )
  }
}
export default TopLeft;