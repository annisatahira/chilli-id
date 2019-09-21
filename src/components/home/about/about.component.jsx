import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id = "tt-pageContent">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-md-12 center">
            <div className="embed-responsive">
              <h3 className="text-center mt-4">Tentang Kami</h3>
              <hr className="divider mt-2 mb-2"  />
              <p className="text-muted mb-4">
                Chili Mall merupakan sebuah solusi yang dibuat untuk mengatasi segala seluk beluk mengenai cabai di Indonesia.
                Layaknya berjalan di Mall kekinian, Anda bisa mendapatkan segala hal yang Anda butuhkan mengenai Cabai, mulai dari sekedar melihat produk terlaris, melakukan pemesanan awal, sampai mendapatkan ilmu baru mengenai Cabai.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-md-12 mb-4 center">
            <div className="embed-responsive embed-responsive-16by9 mt-4">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/sMgGExfy9O8" frameBorder={0} allowFullScreen />
              {/* <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default About;
