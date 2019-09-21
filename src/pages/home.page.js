import React, { Component } from 'react';
import NavComp from '../components/home/navbar/navbar.component';
import Header from '../components/home/header/header.component';
import Reason from '../components/home/reason/reason.component';
import Service from '../components/home/services/services.component';
import Choice from '../components/home/choice/choice.component';
import Testimonials from '../components/home/testimonials/testimonials.component';
import PreOrder from '../components/home/pre-order/pre-order.component';
import SocialMedia from '../components/home/social-media/social-media.component';
import Product from '../components/home/product/product.component';
import About from '../components/home/about/about.component';
import Footer from '../components/home/footer/footer.component';
import More from '../components/more.component';
import News from '../components/home/news/news.component';
import Partner from '../components/home/partner/partner.component';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <NavComp />
                <Header />
                <Reason />
                <Service />
                <Choice />
                <Testimonials />
                <PreOrder />
                <Product />
                <More />
                <About />
                <Partner />
                <News />
                <SocialMedia />
                <Footer />

            </React.Fragment>
        );
    }
}

export default Home;
