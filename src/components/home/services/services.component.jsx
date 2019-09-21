import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
        <section className="page-section bg-grey py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <h3 className="text-center tt-title-large mt-0">APA LAGI YANG KAMI SEDIAKAN</h3>
                  <hr className="divider my-4 mt-0" />
                  <div className="row justify-content-center mt-5">
                    <div className="col-md-4 text-center mb-2">
                      <i className="fa fa-4x fa-globe fa-reason" />
                    </div>
                    <div className="col-md-8 mobile-center">
                      <h4 className="tt-title">Jangkauan Luas</h4>
                      <p className="tt-description mt-4 mb-0">Produk kami mencapai seluruh Indonesia dan juga Asia.</p>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-5">
                    <div className="col-md-4 text-center mb-4">
                      <i className="fa fa-4x fa-book fa-reason" />
                    </div>
                    <div className="col-md-8 mobile-center">
                      <h4 className="tt-title mb-0">Edukasi</h4>
                      <p className="tt-description mb-0">Tersedia modul belajar yang menarik tentang segala seluk beluk cabai.</p>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-5">
                    <div className="col-md-4 text-center mb-4">
                      <i className="fa fa-4x fa-cogs fa-reason" />
                    </div>
                    <div className="col-md-8 mobile-center">
                      <h4 className="tt-title mb-2">Inovasi dan Teknologi</h4>
                      <p className="tt-description mb-0">Pemanfaatan teknologi terkini yang sesuai kebutuhan untuk mengoptimalkan proses penanaman, pasca panen dan distribusi cabai dan produk olahannya.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 row align-items-center my-5">
                  <img className="img-fluid rounded mb-4" src="images/chilli/chili2.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      
    );
  }
}

export default Service;
