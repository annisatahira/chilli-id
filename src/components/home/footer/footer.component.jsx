import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="tt-footer-col tt-color-scheme-03">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-2 col-xl-3 center">
              
            <div className="embed-responsive embed-responsive-16by9 mt-4">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/sMgGExfy9O8" frameBorder={0} allowFullScreen />
              {/* <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe> */}
            </div>
          
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="tt-mobile-collapse">
                  <h4 className="tt-collapse-title">
                    ABOUT
                  </h4>
                  <div className="tt-collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut labore etdolore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 col-xl-3">
                <div className="tt-mobile-collapse">
                  <h4 className="tt-collapse-title">
                    MY ACCOUNT
                  </h4>
                  <div className="tt-collapse-content">
                    <ul className="tt-list">
                      <li><a href="account_order.html">Orders</a></li>
                      <li><a href="page404.html">Compare</a></li>
                      <li><a href="page404.html">Wishlist</a></li>
                      <li><a href="login.html">Log In</a></li>
                      <li><a href="create-account.html">Register</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="tt-newsletter">
                  <div className="tt-mobile-collapse">
                    <h4 className="tt-collapse-title">
                      CONTACTS
                    </h4>
                    <div className="tt-collapse-content">
                      <address>
                        <p><span>Address:</span> 2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United States of America</p>
                        <p><span>Phone:</span> +777 2345 7885;  +777 2345 7886</p>
                        <p><span>Hours:</span> 7 Days a week from 10 am to 6 pm</p>
                        <p><span>E-mail:</span> <a href="mailto:info@mydomain.com">info@mydomain.com</a></p>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tt-footer-custom">
          <div className="container">
            <div className="tt-row">
              <div className="tt-col-left">
                <div className="tt-col-item tt-logo-col">
                  {/* logo */}
                  <a className="tt-logo tt-logo-alignment" href="index.html">
                    <img src="images/custom/logo.png" alt="" />
                  </a>
                  {/* /logo */}
                </div>
                <div className="tt-col-item">
                  {/* copyright */}
                  <div className="tt-box-copyright">
                    © Wokiee 2018. All Rights Reserved
                  </div>
                  {/* /copyright */}
                </div>
              </div>
              <div className="tt-col-right">
                <div className="tt-col-item">
                  {/* payment-list */}
                  <ul className="tt-payment-list">
                    <li><a href="page404.html"><span className="icon-Stripe"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /><span className="path11" /><span className="path12" />
                        </span></a></li>
                    <li><a href="page404.html"> <span className="icon-paypal-2">
                          <span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" />
                        </span></a></li>
                    <li><a href="page404.html"><span className="icon-visa">
                          <span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" />
                        </span></a></li>
                    <li><a href="page404.html"><span className="icon-mastercard">
                          <span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /><span className="path11" /><span className="path12" /><span className="path13" />
                        </span></a></li>
                    <li><a href="page404.html"><span className="icon-discover">
                          <span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /><span className="path11" /><span className="path12" /><span className="path13" /><span className="path14" /><span className="path15" /><span className="path16" />
                        </span></a></li>
                    <li><a href="page404.html"><span className="icon-american-express">
                          <span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /><span className="path5" /><span className="path6" /><span className="path7" /><span className="path8" /><span className="path9" /><span className="path10" /><span className="path11" />
                        </span></a></li>
                  </ul>
                  {/* /payment-list */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
