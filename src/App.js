import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Register from './components/Register';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Header />
        <div className="container">
          <div id="gototop" />

          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />

          <footer className="footer">
            <div className="row-fluid">
              <div className="span2">
                <h5>Your Account</h5>
                <a href="/">YOUR ACCOUNT</a><br />
                <a href="/">PERSONAL INFORMATION</a><br />
                <a href="/">ADDRESSES</a><br />
                <a href="/">DISCOUNT</a><br />
                <a href="/">ORDER HISTORY</a><br />
              </div>
              <div className="span2">
                <h5>Iinformation</h5>
                <a href="contact.html">CONTACT</a><br />
                <a href="/">SITEMAP</a><br />
                <a href="/">LEGAL NOTICE</a><br />
                <a href="/">TERMS AND CONDITIONS</a><br />
                <a href="/">ABOUT US</a><br />
              </div>
              <div className="span2">
                <h5>Our Offer</h5>
                <a href="/">NEW PRODUCTS</a> <br />
                <a href="/">TOP SELLERS</a><br />
                <a href="/">SPECIALS</a><br />
                <a href="/">MANUFACTURERS</a><br />
                <a href="/">SUPPLIERS</a> <br />
              </div>
              <div className="span6">
                <h5>The standard chunk of Lorem</h5>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                Malorum" by Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H. Rackham.
              </div>
            </div>
          </footer>
        </div>
        <div className="copyright">
          <div className="container">
            <p className="pull-right">
              <a href="/"><img src="./assets/img/maestro.png" alt="payment" /></a>
              <a href="/"><img src="./assets/img/mc.png" alt="payment" /></a>
              <a href="/"><img src="./assets/img/pp.png" alt="payment" /></a>
              <a href="/"><img src="./assets/img/visa.png" alt="payment" /></a>
              <a href="/"><img src="./assets/img/disc.png" alt="payment" /></a>
            </p>
            <span>Copyright © 2018<br />Ecommerce Shopping</span>
          </div>
        </div>
        <a href="/" className="gotop"><i className="icon-double-angle-up" /></a>
      </div>
     </BrowserRouter>
    )
  }
}
export default App;