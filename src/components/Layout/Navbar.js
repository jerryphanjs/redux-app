import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="active"><span className="icon-home"></span> Home</Link>
        <Link to="/account"><span className="icon-user"></span> My Account</Link>
        <Link to="/register"><span className="icon-edit"></span> Free Register </Link>
        <Link to="/contact"><span className="icon-envelope"></span> Contact us</Link>
        <Link to="/cart"><span className="icon-shopping-cart"></span> 2 Item(s) - <span className="badge badge-warning"> $448.42</span></Link>
      </React.Fragment>
    )
  }
}
export default Navbar;