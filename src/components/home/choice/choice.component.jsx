import React, { Component } from "react";

class Choice extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="section-two-bg">
            <div className="page-section-small">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 center">
                    <div className="embed-responsive">
                      <h3 className="text-center mt-0 text-white">
                        ANDA INGIN
                      </h3>
                      <hr className="divider mt-0 mb-5" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 center">
                    <div className="embed-responsive">
                      <div className="box">
                        <div className="content">
                          <h6 className="text-white mb-0 ">
                            Melihat Produk yang Kami Sediakan
                          </h6>
                          <a
                            className="btn btn-transparant btn-lg js-scroll-trigger mt-2"
                            href="#services"
                          >
                            LIHAT PRODUK
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 center">
                    <div className="embed-responsive">
                      <div className="box">
                        <div className="content">
                          <h6 className="text-white mb-0">
                            Menjadi Mitra Kami
                          </h6>
                          <a
                            className="btn btn-transparant btn-lg js-scroll-trigger mt-2"
                            href="#services"
                          >
                            DAFTAR SEBAGAI MITRA
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Choice;
