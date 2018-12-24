import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Register from './components/Register';
import Footer from './components/Layout/Footer';
import NavbarCollapse from './components/Layout/Main/NavbarCollape';
import Client from './components/Layout/Main/Client';
import MainHeader from './components/Layout/Main/MainHeader'; 
import Sidebar from './components/Layout/Sidebar/Sidebar'; 
import FooterCopy from './components/Layout/Footer/FooterCopy';
import Account from './components/Acount';
import ListView from './components/Layout/Main/Views/ListView';
import GridView from './components/Layout/Main/Views/GridView';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <div id="gototop" />
            <MainHeader />
            <NavbarCollapse />
            <div className="row">
              <div id="sidebar" className="span3">
                <Sidebar />
              </div>
              <Route exact path="/" component={Home} />
              <Route path="/account" component={Account} />
              <Route path="/cart" component={Cart} />
              <Route path="/contact" component={Contact} />
              <Route path="/register" component={Register} />
              <Route path="/home/listview" component={ListView} />
              <Route path="/home/gridview" component={GridView} />
            </div>
            <div className="row">
              <Footer />
              <Client />
              <FooterCopy />
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;