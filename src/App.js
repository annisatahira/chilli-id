import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/home.page';
import Produk from './pages/produk.page';

class App extends Component {
  render() {

    return (
      <div>
        <Route exact path="/home" component={Home} />
        <Route path="/produk" component={Produk} />
        <Route path="/artikel" component={Produk} />
        <Route path="/event" component={Produk} />
        <Route path="/berita" component={Produk} />
      </div>

    );
  }
}

export default App;
