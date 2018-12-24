import React from 'react';

const FooterCopy = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
export default FooterCopy;