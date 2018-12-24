import React, { Component } from 'react';
import BreadCrumb from './Layout/Other/BreadCrumb';

class Account extends Component {
  render() {
    return (
      <div className="span9">
        <BreadCrumb />
        <h3> Login</h3>
        <hr className="soft"/>
        <div className="row">
          <div className="span5">
            <div className="well">
              <h5>CREATE YOUR ACCOUNT</h5><br />
              Enter your e-mail address to create an account.<br /><br />
              <form>
                <div className="control-group">
                  <label className="control-label" htmlFor="inputEmail">E-mail address</label>
                  <div className="controls">
                    <input className="span3" type="text" placeholder="Email" />
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label" htmlFor="inputPassword">E-mail address</label>
                  <div className="controls">
                    <input className="span3" type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="controls">
                  <button type="submit" className="btn block">Create Your Account</button>
                </div>
              </form>
            </div>
          </div>
          <div className="span1"> &nbsp;</div>
          <div className="span4">
            <div className="well">
              <h5>ALREADY REGISTERED ?</h5>
              <form>
                <div className="control-group">
                  <label className="control-label" htmlFor="inputEmail">Email</label>
                  <div className="controls">
                    <input className="span3" type="text" placeholder="Email" />
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label" htmlFor="inputPassword">Password</label>
                  <div className="controls">
                    <input type="password" className="span3" placeholder="Password" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <button type="submit" className="defaultBtn">Sign in</button> <a href="/">Forget password?</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Account;