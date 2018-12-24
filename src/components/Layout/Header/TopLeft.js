import React, { Component } from 'react';

const iconClass = ['icon-twitter', 'icon-facebook', 'icon-youtube', 'icon-tumblr'];

class TopLeft extends Component {
  render() {
    return (
      <div className="pull-left socialNw">
        {
          iconClass.map((icon, index) => (
            <a href="/" key={index}>
              <span className={icon}></span>
            </a>
          ))
        }
      </div>
    )
  }
}
export default TopLeft;