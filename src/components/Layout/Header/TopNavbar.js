import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const menu = [ 
  {
    link: '/',
    class: 'icon-home',
    title: 'Home'
  },
  {
    link: '/account',
    class: 'icon-user',
    title: 'Account'
  },
  {
    link: '/register',
    class: 'icon-edit',
    title: 'Free Register'
  },
  {
    link: '/contact',
    class: 'icon-envelope',
    title: 'Contact us'
  },
];

let noItem = ' 2 Item(s) -';
let total = '$448.42'

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        {
          menu.map((menu, index) => (
            <NavLink to={menu.link} key={index}><span className={menu.class}></span>{' ' + menu.title}</NavLink>
          ))
        }
        <NavLink to="/cart">
          <span className="icon-shopping-cart"></span>
           {noItem}
          <span className="badge badge-warning"> {total}</span>
        </NavLink>
      </React.Fragment>
    )
  }
}
export default Navbar;