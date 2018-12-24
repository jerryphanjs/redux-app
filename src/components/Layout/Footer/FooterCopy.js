import React from 'react';

const mainCopy = [
  './assets/img/maestro.png',
  './assets/img/mc.png',
  './assets/img/pp.png',
  './assets/img/visa.png',
  './assets/img/disc.png'
]

const FooterCopy = () => {
  return (
    <React.Fragment>
      <div className="copyright">
        <div className="container">
          <p className="pull-right">
           {
             mainCopy.map((src, index) => (
               <a href="/" key={index}><img src={src} alt="payment"/></a>
             ))
           }
          </p>
          <span>Copyright © 2018<br />Ecommerce Shopping</span>
        </div>
      </div>
      <a href="/" className="gotop"><i className="icon-double-angle-up" /></a>
    </React.Fragment>
  )
}
export default FooterCopy;