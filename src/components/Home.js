import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
    <React.Fragment>
      <div class="span9">
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
    </React.Fragment>
    )
  }
}
export default Home;