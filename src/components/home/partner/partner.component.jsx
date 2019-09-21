import React, { Component } from "react";

class Partner extends Component {

  render() {
    return (
        <div className="container-indent bg-grey py-2">
<div className="container container-fluid-custom-mobile-padding">
  <div className="tt-block-title mt-5">
    <h2 className="tt-title">POPULAR</h2>
    <div className="tt-description">CLOTHING BRANDS</div>
  </div>
  <div className="row tt-img-box-listing mb-5">
    <div className="col-6 col-sm-4 col-md-3">
      <a href="#" className="tt-img-box">
        <img src="images/loader.svg" data-src="images/custom/brand-img-01.png" alt="" />
      </a>
    </div>
    <div className="col-6 col-sm-4 col-md-3">
      <a href="#" className="tt-img-box">
        <img src="images/loader.svg" data-src="images/custom/brand-img-02.png" alt="" />
      </a>
    </div>
    <div className="col-6 col-sm-4 col-md-3">
      <a href="#" className="tt-img-box">
        <img src="images/loader.svg" data-src="images/custom/brand-img-03.png" alt="" />
      </a>
    </div>
    <div className="col-6 col-sm-4 col-md-3">
      <a href="#" className="tt-img-box">
        <img src="images/loader.svg" data-src="images/custom/brand-img-04.png" alt="" />
      </a>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default Partner;



