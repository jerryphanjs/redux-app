import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
    <React.Fragment>
      <header id="header">
        <div className="row">
          <div className="span4">
            <h1>
              <a className="logo" href="/"><span>Twitter Bootstrap ecommerce template</span>
                <img src="./assets/img/logo-bootstrap-shoping-cart.png" alt="bootstrap sexy shop" />
              </a>
            </h1>
          </div>
          <div className="span8 alignR">
            <p><br /> <strong> Support (24/7) : 0800 1234 678 </strong><br /><br /></p>
            <span className="btn btn-mini">[ 2 ] <span className="icon-shopping-cart" /></span>
            <span className="btn btn-warning btn-mini">$</span>
            <span className="btn btn-mini">£</span>
            <span className="btn btn-mini">€</span>
          </div>
        </div>
      </header>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="container">
            <a data-target=".nav-collapse" data-toggle="collapse" className="btn btn-navbar" href="/">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </a>
            <div className="nav-collapse">
              <ul className="nav">
                <li className="active"><a href="index.html">Home </a></li>
                <li><a href="list-view.html">List View</a></li>
                <li><a href="grid-view.html">Grid View</a></li>
                <li><a href="three-col.html">Three Column</a></li>
                <li><a href="four-col.html">Four Column</a></li>
                <li><a href="general.html">General Content</a></li>
              </ul>
              <form action="/" className="navbar-search pull-left">
                <input type="text" placeholder="Search" className="search-query span2" />
              </form>
              <ul className="nav pull-right">
                <li className="dropdown">
                  <a data-toggle="dropdown" className="dropdown-toggle" href="/"><span className="icon-lock" /> Login <b className="caret" /></a>
                  <div className="dropdown-menu">
                    <form className="form-horizontal loginFrm">
                      <div className="control-group">
                        <input type="text" className="span2" id="inputEmail" placeholder="Email" />
                      </div>
                      <div className="control-group">
                        <input type="password" className="span2" id="inputPassword" placeholder="Password" />
                      </div>
                      <div className="control-group">
                        <label className="checkbox">
                          <input type="checkbox" /> Remember me
                        </label>
                        <button type="submit" className="shopBtn btn-block">Sign in</button>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="sidebar" className="span3">
          <div className="well well-small">
            <ul className="nav nav-list">
              <li><a href="products.html"><span className="icon-chevron-right" />Fashion</a></li>
              <li><a href="products.html"><span className="icon-chevron-right" />Watches</a></li>
              <li><a href="products.html"><span className="icon-chevron-right" />Fine Jewelry</a></li>
              <li><a href="products.html"><span className="icon-chevron-right" />Fashion Jewelry</a></li>
              <li><a href="products.html"><span className="icon-chevron-right" />Engagement &amp; Wedding</a></li>
              <li><a href="products.html"><span className="icon-chevron-right" />Men's Jewelry</a></li>
              <li><a href="products.html"><span className="icon-chevron-right" />Vintage &amp; Antique</a></li>
              <li><a href="products.html"><span className="icon-chevron-right" />Loose Diamonds </a></li>
              <li><a href="products.html"><span className="icon-chevron-right" />Loose Beads</a></li>
              <li><a href="products.html"><span className="icon-chevron-right" />See All Jewelry &amp; Watches</a></li>
              <li style={{border: 0}}> &nbsp;</li>
              <li> <a className="totalInCart" href="cart.html"><strong>Total Amount <span className="badge badge-warning pull-right" style={{lineHeight: '18px'}}>$448.42</span></strong></a></li>
            </ul>
          </div>
          <div className="well well-small alert alert-warning cntr">
            <h2>50% Discount</h2>
            <p>
              only valid for online order. <br /><br /><a className="defaultBtn" href="/">Click here </a>
            </p>
          </div>
          <div className="well well-small"><a href="/"><img src="./assets/img/paypal.jpg" alt="payment method paypal" /></a></div>
          <a className="shopBtn btn-block" href="/">Upcoming products <br /><small>Click to view</small></a>
          <br />
          <br />
          <ul className="nav nav-list promowrapper">
            <li>
              <div className="thumbnail">
                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                <img src="./assets/img/bootstrap-ecommerce-templates.png" alt="bootstrap ecommerce templates" />
                <div className="caption">
                  <h4><a className="defaultBtn" href="product_details.html">VIEW</a> <span className="pull-right">$22.00</span></h4>
                </div>
              </div>
            </li>
            <li style={{border: 0}}> &nbsp;</li>
            <li>
              <div className="thumbnail">
                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                <img src="./assets/img/shopping-cart-template.png" alt="shopping cart template" />
                <div className="caption">
                  <h4><a className="defaultBtn" href="product_details.html">VIEW</a> <span className="pull-right">$22.00</span></h4>
                </div>
              </div>
            </li>
            <li style={{border: 0}}> &nbsp;</li>
            <li>
              <div className="thumbnail">
                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                <img src="./assets/img/bootstrap-template.png" alt="bootstrap template" />
                <div className="caption">
                  <h4><a className="defaultBtn" href="product_details.html">VIEW</a> <span className="pull-right">$22.00</span></h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="span9">
          <div className="well np">
            <div id="myCarousel" className="carousel slide homCar">
              <div className="carousel-inner">
                <div className="item">
                  <img style={{width: '100%'}} src="./assets/img/bootstrap_free-ecommerce.png" alt="bootstrap ecommerce templates" />
                  <div className="carousel-caption">
                    <h4>Bootstrap shopping cart</h4>
                    <p><span>Very clean simple to use</span></p>
                  </div>
                </div>
                <div className="item">
                  <img style={{width: '100%'}} src="./assets/img/carousel1.png" alt="bootstrap ecommerce templates" />
                  <div className="carousel-caption">
                    <h4>Bootstrap Ecommerce template</h4>
                    <p><span>Highly Google seo friendly</span></p>
                  </div>
                </div>
                <div className="item active">
                  <img style={{width: '100%'}} src="./assets/img/carousel3.png" alt="bootstrap ecommerce templates" />
                  <div className="carousel-caption">
                    <h4>lipsum</h4>
                    <p><span>Very easy to integrate and expand.</span></p>
                  </div>
                </div>
                <div className="item">
                  <img style={{width: '100%'}} src="./assets/img/bootstrap-templates.png" alt="bootstrap templates" />
                  <div className="carousel-caption">
                    <h4>Bootstrap templates integration</h4>
                    <p><span>Compitable to many more opensource cart</span></p>
                  </div>
                </div>
              </div>
              <a className="left carousel-control" href="/myCarousel" data-slide="prev">‹</a>
              <a className="right carousel-control" href="/myCarousel" data-slide="next">›</a>
            </div>
          </div>
          <div className="well well-small">
            <h3>New Products </h3>
            <hr className="soften" />
            <div className="row-fluid">
              <div id="newProductCar" className="carousel slide">
                <div className="carousel-inner">
                  <div className="item active">
                    <ul className="thumbnails">
                      <li className="span3">
                        <div className="thumbnail">
                          <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                            <a href="/" className="tag"><span></span></a>
                          <a href="product_details.html"><img src="./assets/img/bootstrap-ring.png" alt="bootstrap-ring" /></a>
                        </div>
                      </li>
                      <li className="span3">
                        <div className="thumbnail">
                          <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                          <a href="/" className="tag"><span></span></a>
                          <a href="product_details.html"><img src="./assets/img/i.jpg" alt="" /></a>
                        </div>
                      </li>
                      <li className="span3">
                        <div className="thumbnail">
                          <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                            <a href="/" className="tag"><span></span></a>
                          <a href="product_details.html"><img src="./assets/img/g.jpg" alt="" /></a>
                        </div>
                      </li>
                      <li className="span3">
                        <div className="thumbnail">
                          <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                          <a href="product_details.html"><img src="./assets/img/s.png" alt="" /></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul className="thumbnails">
                      <li className="span3">
                        <div className="thumbnail">
                          <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                          <a href="product_details.html"><img src="./assets/img/i.jpg" alt="" /></a>
                        </div>
                      </li>
                      <li className="span3">
                        <div className="thumbnail">
                          <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                          <a href="product_details.html"><img src="./assets/img/f.jpg" alt="" /></a>
                        </div>
                      </li>
                      <li className="span3">
                        <div className="thumbnail">
                          <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                          <a href="product_details.html"><img src="./assets/img/h.jpg" alt="" /></a>
                        </div>
                      </li>
                      <li className="span3">
                        <div className="thumbnail">
                          <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                          <a href="product_details.html"><img src="./assets/img/j.jpg" alt="" /></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <a className="left carousel-control" href="/newProductCar" data-slide="prev">‹</a>
                <a className="right carousel-control" href="/newProductCar" data-slide="next">›</a>
              </div>
            </div>
            <div className="row-fluid">
              <ul className="thumbnails">
                <li className="span4">
                  <div className="thumbnail">
                    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                    <a href="product_details.html"><img src="./assets/img/b.jpg" alt="" /></a>
                    <div className="caption cntr">
                      <p>Manicure &amp; Pedicure</p>
                      <p><strong> $22.00</strong></p>
                      <h4><a className="shopBtn" href="/" title="add to cart"> Add to cart </a></h4>
                      <div className="actionList">
                        <a className="pull-left" href="/">Add to Wish List </a>
                        <a className="pull-left" href="/"> Add to Compare </a>
                      </div>
                      <br className="clr" />
                    </div>
                  </div>
                </li>
                <li className="span4">
                  <div className="thumbnail">
                    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                    <a href="product_details.html"><img src="./assets/img/c.jpg" alt="" /></a>
                    <div className="caption cntr">
                      <p>Manicure &amp; Pedicure</p>
                      <p><strong> $22.00</strong></p>
                      <h4><a className="shopBtn" href="/" title="add to cart"> Add to cart </a></h4>
                      <div className="actionList">
                        <a className="pull-left" href="/">Add to Wish List </a>
                        <a className="pull-left" href="/"> Add to Compare </a>
                      </div>
                      <br className="clr" />
                    </div>
                  </div>
                </li>
                <li className="span4">
                  <div className="thumbnail">
                    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                    <a href="product_details.html"><img src="./assets/img/a.jpg" alt="" /></a>
                    <div className="caption cntr">
                      <p>Manicure &amp; Pedicure</p>
                      <p><strong> $22.00</strong></p>
                      <h4><a className="shopBtn" href="/" title="add to cart"> Add to cart </a></h4>
                      <div className="actionList">
                        <a className="pull-left" href="/">Add to Wish List </a>
                        <a className="pull-left" href="/"> Add to Compare </a>
                      </div>
                      <br className="clr" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="well well-small">
            <h3><a className="btn btn-mini pull-right" href="products.html" title="View more">VIew More<span className="icon-plus" /></a> Featured Products </h3>
            <hr className="soften" />
            <div className="row-fluid">
              <ul className="thumbnails">
                <li className="span4">
                  <div className="thumbnail">
                    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                    <a href="product_details.html"><img src="./assets/img/d.jpg" alt="" /></a>
                    <div className="caption">
                      <h5>Manicure &amp; Pedicure</h5>
                      <h4>
                        <a className="defaultBtn" href="product_details.html" title="Click to view"><span className="icon-zoom-in" /></a>
                        <a className="shopBtn" href="/" title="add to cart"><span className="icon-plus" /></a>
                        <span className="pull-right">$22.00</span>
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="span4">
                  <div className="thumbnail">
                    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                    <a href="product_details.html"><img src="./assets/img/e.jpg" alt="" /></a>
                    <div className="caption">
                      <h5>Manicure &amp; Pedicure</h5>
                      <h4>
                        <a className="defaultBtn" href="product_details.html" title="Click to view"><span className="icon-zoom-in" /></a>
                        <a className="shopBtn" href="/" title="add to cart"><span className="icon-plus" /></a>
                        <span className="pull-right">$22.00</span>
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="span4">
                  <div className="thumbnail">
                    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
                    <a href="product_details.html"><img src="./assets/img/f.jpg" alt="" /></a>
                    <div className="caption">
                      <h5>Manicure &amp; Pedicure</h5>
                      <h4>
                        <a className="defaultBtn" href="product_details.html" title="Click to view"><span className="icon-zoom-in" /></a>
                        <a className="shopBtn" href="/" title="add to cart"><span className="icon-plus" /></a>
                        <span className="pull-right">$22.00</span>
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="well well-small">
            <a className="btn btn-mini pull-right" href="/">View more <span className="icon-plus" /></a>
            Popular Products
          </div>
          <hr />
          <div className="well well-small">
            <a className="btn btn-mini pull-right" href="/">View more <span className="icon-plus" /></a>
            Best selling Products
          </div>
        </div>
      </div>
      <section className="our_client">
        <hr className="soften" />
        <h4 className="title cntr"><span className="text">Manufactures</span></h4>
        <hr className="soften" />
        <div className="row">
          <div className="span2">
            <a href="/"><img alt="" src="./assets/img/1.png" /></a>
          </div>
          <div className="span2">
            <a href="/"><img alt="" src="./assets/img/2.png" /></a>
          </div>
          <div className="span2">
            <a href="/"><img alt="" src="./assets/img/3.png" /></a>
          </div>
          <div className="span2">
            <a href="/"><img alt="" src="./assets/img/4.png" /></a>
          </div>
          <div className="span2">
            <a href="/"><img alt="" src="./assets/img/5.png" /></a>
          </div>
          <div className="span2">
            <a href="/"><img alt="" src="./assets/img/6.png" /></a>
          </div>
        </div>
      </section>
      </React.Fragment>
    )
  }
}
export default Home;