import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

class Reason extends Component {

  render() {
    return (
        <div>
        <div id="tt-pageContent">
          <div className="container-indent">
            <div className="container container-fluid-custom-mobile-padding">
              <h1 className="tt-title-subpages noborder mt-3">MENGAPA BERGABUNG DENGAN KAMI</h1>
              <hr className="divider mt-0 mb-5" />
              <div className="tt-box-thumb-listing">
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="tt-box-thumb">
                    <i className="fa fa-3x fa-reason fa-handshake mb-4" />
                      <h6 className="tt-title"><a href="#">Akad Salam</a></h6>
                      <p>Pelanggan bisa mengamankan kebutuhan stoknya dengan melakukan pemesanan stok cabai ketika akan masuk fase penanaman.</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="tt-box-thumb">
                    <i className="fa fa-3x fa-reason fa-leaf mb-4" />
                      <h6 className="tt-title"><a href="#">Produk Berkualitas</a></h6>
                      <p>Kami hanya menyediakan produk cabai kualitas terbaik dan produk olahan cabai yang halal dan toyyib.</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="tt-box-thumb">
                    <i className="fa fa-3x fa-reason fa-heart mb-4" />
                      <h6 className="tt-title"><a href="#">Kesejahteraan Petani Cabai</a></h6>
                      <p>Petani cabai bisa menjual produknya langsung disini dan bisa mengoptimalkan lahan produksi cabai yang diolahnya</p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                  <Link to="/produk"><a
                        className="btn btn-primary btn-xl js-scroll-trigger mt-4 mb-5"
                        href="#services"
                      >
                        LIHAT LAYANAN LAINNYA
                      </a></Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Reason;
