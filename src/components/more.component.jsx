import React, { Component } from "react";

class More extends Component {

  render() {
    return (
        <div id="tt-pageContent">
            <div className="container-indent mt-5 mb-5">
                <div className="section-two-bg">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-8 center mt-5 mb-5">
                            <h6 className="text-center mt-0 text-white">
                                WANT TO KNOW MORE ABOUT OUR COMPANY? CURIOUS WHAT ELSE WE DO?
                            </h6>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 center mt-5 mb-5">
                            <a className="btn btn-transparant btn-lg js-scroll-trigger center" href="#services">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
  }
}

export default More;
