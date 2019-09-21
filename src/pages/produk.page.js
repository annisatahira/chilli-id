import React, { Component } from 'react';
import NavComp from '../components/home/navbar/navbar.component';
import Footer from '../components/home/footer/footer.component';
import Products from '../components/product';

class Product extends Component {
    render() {
        return (
            <React.Fragment>
                <NavComp />
                <Products />
                <Footer />

            </React.Fragment>
        );
    }
}

export default Product;
