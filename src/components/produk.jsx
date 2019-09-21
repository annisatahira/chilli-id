import React, { Component } from 'react';

class Produk extends Component {
    componentDidMount(){

        const script = document.createElement("script");
  
        script.src = "../js/main.js";
  
        script.async = true;
  
        document.body.appendChild(script);
  
      }
    render() {

        return (
            <div>
                <div id="loader-wrapper">
                    <div id="loader">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                    </div>
                </div>
                <header>
                    {/* tt-mobile menu */}
                    <nav className="panel-menu mobile-main-menu">
                        <ul>
                            <li>
                                <a href="index.html">HOME</a>
                                <ul>
                                    <li>
                                        <a href="index.html">HOME STYLES</a>
                                        <ul>
                                            <li><a href="index.html">Home — Example 1 <span className="tt-badge tt-fatured">Popular</span></a></li>
                                            <li><a href="index-02.html">Home — Example 2</a></li>
                                            <li><a href="index-03.html">Home — Example 3</a></li>
                                            <li><a href="index-04.html">Home — Example 4 <span className="tt-badge tt-fatured">Popular</span></a></li>
                                            <li><a href="index-05.html">Home — Example 5</a></li>
                                            <li><a href="index-06.html">Home — Example 6</a></li>
                                            <li><a href="index-07.html">Home — Example 7</a></li>
                                            <li><a href="index-08.html">Home — Example 8</a></li>
                                            <li><a href="index-09.html">Home — Example 9</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index.html">HOME STYLES</a>
                                        <ul>
                                            <li><a href="index-10.html">Home — Example 10</a></li>
                                            <li><a href="index-11.html">Home — Example 11</a></li>
                                            <li><a href="index-12.html">Home — Example 12</a></li>
                                            <li><a href="index-13.html">Home — Example 13</a></li>
                                            <li><a href="index-14.html">Home — Example 14</a></li>
                                            <li><a href="index-15.html">Home — Example 15</a></li>
                                            <li><a href="index-16.html">Home — Example 16 <span className="tt-badge tt-fatured">Popular</span></a></li>
                                            <li><a href="index-17.html">Home — Example 17</a></li>
                                            <li><a href="index-18.html">Home — Example 18</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index.html">HOME SKINS <span className="tt-badge tt-sale">HOT</span></a>
                                        <ul>
                                            <li><a href="index-skin-snowboards.html">Snowboards Shop <span className="tt-badge tt-fatured">Popular</span></a></li>
                                            <li><a href="index-skin-phones.html">Phones Shop <span className="tt-badge tt-fatured">Popular</span></a></li>
                                            <li><a href="index-skin-bikes.html">Bikes Shop <span className="tt-badge tt-fatured">Popular</span></a></li>
                                            <li><a href="index-skin-lingerie.html">Lingerie Shop</a></li>
                                            <li><a href="index-skin-furniture.html">Furniture Shop</a></li>
                                            <li><a href="index-skin-books.html">Books Shop <span className="tt-badge tt-new">New</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="listing-left-column.html">SHOP</a>
                                <ul>
                                    <li>
                                        <a href="listing-left-column.html">LISTING STYLES</a>
                                        <ul>
                                            <li><a href="listing-left-column.html">Listing With Left Sidebar</a></li>
                                            <li><a href="listing-right-column.html">Listing With Right Sidebar</a></li>
                                            <li><a href="listing-not-sidebar.html">Listing Not Sidebar</a></li>
                                            <li><a href="listing-not-sidebar-full-width.html">Listing Not Sidebar Full Width</a></li>
                                            <li><a href="listing-metro.html">Listing Metro</a></li>
                                            <li><a href="listing-left-column-with-block.html">Listing With Custom HTML Block</a></li>
                                            <li><a href="listing-collection.html">Listing Collection</a></li>
                                            <li><a href="lookbook.html">Look Book</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="product.html">PRODUCT PAGE STYLES</a>
                                        <ul>
                                            <li><a href="product.html">Product Example 1</a></li>
                                            <li><a href="product-02.html">Product Example 2</a></li>
                                            <li><a href="product-03.html">Product Example 3</a></li>
                                            <li><a href="product-04.html">Product Example 4</a></li>
                                            <li><a href="product-variable.html">Product Layout</a></li>
                                            <li><a href="product-three-columns.html">Three Columns</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="product-variable.html">PRODUCT PAGE TYPES</a>
                                        <ul>
                                            <li><a href="product.html">Standard Product</a></li>
                                            <li><a href="product-variable.html">Variable Product</a></li>
                                            <li><a href="product-04.html">Grouped Product</a></li>
                                            <li><a href="product-label-new.html">New Product</a></li>
                                            <li><a href="product-label-sale.html">Sale Product</a></li>
                                            <li><a href="product-label-out-of-stock.html">Out Of Stock Product</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="shopping_cart_02.html">OTHER PAGES</a>
                                        <ul>
                                            <li><a href="shopping_cart_02.html">Cart</a></li>
                                            <li><a href="shopping_cart_01.html">Cart With Right Col</a></li>
                                            <li><a href="account.html">Account</a></li>
                                            <li><a href="account_address.html">Account Address</a></li>
                                            <li><a href="account_address_fields.html">Account Address Fields</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="blog-listing-without-col.html">BLOG</a>
                                <ul>
                                    <li>
                                        <a href="blog-listing-without-col.html">BLOG STYLE</a>
                                        <ul>
                                            <li><a href="blog-listing-without-col.html">Standard Without Sidebar</a></li>
                                            <li><a href="blog-listing-col-left.html">Standard With Left Sidebar</a></li>
                                            <li><a href="blog-listing-col-right.html">Standard With Right Sidebar</a></li>
                                            <li><a href="blog-masonry-col-2.html">Two Colums</a></li>
                                            <li><a href="blog-masonry-col-3.html">Three Colums</a></li>
                                            <li><a href="blog-masonry-col-3-filter.html">Three Colums With Filter</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="blog-single-post.html">POST TYPE</a>
                                        <ul>
                                            <li><a href="blog-single-post.html">Standard</a></li>
                                            <li><a href="blog-single-post-gallery.html">Gallery</a></li>
                                            <li><a href="blog-single-post-link.html">Link</a></li>
                                            <li><a href="blog-single-post-quote.html">Quote</a></li>
                                            <li><a href="blog-single-post-video.html">Video</a></li>
                                            <li><a href="blog-single-post-audio.html">Audio</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="portfolio-col-grid-four.html">PORTFOLIO</a>
                                <ul>
                                    <li>
                                        <a href="portfolio-col-grid-four.html">BOXED GRID</a>
                                        <ul>
                                            <li><a href="portfolio-col-grid-two.html">Two Colums</a></li>
                                            <li><a href="portfolio-col-grid-three.html">Three Colums</a></li>
                                            <li><a href="portfolio-col-grid-four.html">Four Colums</a></li>
                                            <li><a href="portfolio-col-grid-four-without-filter.html">Four Colums Without Filter</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="portfolio-col-wide-three.html">BOXED STYLES</a>
                                        <ul>
                                            <li><a href="portfolio-col-wide-two.html">Two Colums</a></li>
                                            <li><a href="portfolio-col-wide-three.html">Three Colums</a></li>
                                            <li><a href="portfolio-col-wide-four.html">Four Colums</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="about.html">PAGES</a>
                                <ul>
                                    <li><a href="about.html">About Example 1</a>
                                        <ul>
                                            <li><a href="about.html">Link Level 1</a></li>
                                            <li>
                                                <a href="about.html">Link Level 1</a>
                                                <ul>
                                                    <li><a href="about.html">Link Level 2</a></li>
                                                    <li>
                                                        <a href="about.html">Link Level 2</a>
                                                        <ul>
                                                            <li><a href="about.html">Link Level 3</a></li>
                                                            <li><a href="about.html">Link Level 3</a></li>
                                                            <li><a href="about.html">Link Level 3</a></li>
                                                            <li>
                                                                <a href="about.html">Link Level 3</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="about.html">Link Level 4</a>
                                                                        <ul>
                                                                            <li><a href="about.html">Link Level 5</a></li>
                                                                            <li><a href="about.html">Link Level 5</a></li>
                                                                            <li><a href="about.html">Link Level 5</a></li>
                                                                            <li><a href="about.html">Link Level 5</a></li>
                                                                            <li><a href="about.html">Link Level 5</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><a href="about.html">Link Level 4</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="about.html">Link Level 3</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="about.html">Link Level 2</a></li>
                                                    <li><a href="about.html">Link Level 2</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">Link Level 1</a></li>
                                            <li><a href="about.html">Link Level 1</a></li>
                                            <li><a href="about.html">Link Level 1</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about-02.html">About Example 2</a></li>
                                    <li><a href="contact.html">Contacts Example 1</a></li>
                                    <li><a href="contact-02.html">Contacts Example 2</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                    <li><a href="page404.html">Page 404</a></li>
                                    <li><a href="typography.html">Typography</a></li>
                                    <li><a href="gift-cart.html">Gift Cart</a></li>
                                    <li>
                                        <a href="compare.html">Compare</a>
                                        <ul>
                                            <li><a href="compare.html">Compare 01</a></li>
                                            <li><a href="compare-02.html">Compare 02</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li>
                                        <a href="empty-search.html">Empty</a>
                                        <ul>
                                            <li><a href="empty-cart.html">Empty Cart</a></li>
                                            <li><a href="empty-search.html">Empty Search</a></li>
                                            <li><a href="empty-wishlist.html">Empty Wishlist</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="listing-left-column.html">WOMEN</a>
                                <ul>
                                    <li>
                                        <a href="listing-left-column.html">TOPS</a>
                                        <ul>
                                            <li><a href="listing-left-column.html">Blouses &amp; Shirts</a></li>
                                            <li><a href="listing-left-column.html">Dresses <span className="tt-badge tt-new">New</span></a></li>
                                            <li>
                                                <a href="listing-left-column.html">Tops &amp; T-shirts</a>
                                                <ul>
                                                    <li><a href="listing-left-column.html">Link Level 1</a></li>
                                                    <li>
                                                        <a href="listing-left-column.html">Link Level 1</a>
                                                        <ul>
                                                            <li><a href="listing-left-column.html">Link Level 2</a></li>
                                                            <li>
                                                                <a href="listing-left-column.html">Link Level 2</a>
                                                                <ul>
                                                                    <li><a href="listing-left-column.html">Link Level 3</a></li>
                                                                    <li><a href="listing-left-column.html">Link Level 3</a></li>
                                                                    <li><a href="listing-left-column.html">Link Level 3</a></li>
                                                                    <li>
                                                                        <a href="listing-left-column.html">Link Level 3</a>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="listing-left-column.html">Link Level 4</a>
                                                                                <ul>
                                                                                    <li><a href="listing-left-column.html">Link Level 5</a></li>
                                                                                    <li><a href="listing-left-column.html">Link Level 5</a></li>
                                                                                    <li><a href="listing-left-column.html">Link Level 5</a></li>
                                                                                    <li><a href="listing-left-column.html">Link Level 5</a></li>
                                                                                    <li><a href="listing-left-column.html">Link Level 5</a></li>
                                                                                </ul>
                                                                            </li>
                                                                            <li><a href="listing-left-column.html">Link Level 4</a></li>
                                                                            <li><a href="listing-left-column.html">Link Level 4</a></li>
                                                                            <li><a href="listing-left-column.html">Link Level 4</a></li>
                                                                            <li><a href="listing-left-column.html">Link Level 4</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><a href="listing-left-column.html">Link Level 3</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="listing-left-column.html">Link Level 2</a></li>
                                                            <li><a href="listing-left-column.html">Link Level 2</a></li>
                                                            <li><a href="listing-left-column.html">Link Level 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="listing-left-column.html">Link Level 1</a></li>
                                                    <li><a href="listing-left-column.html">Link Level 1</a></li>
                                                    <li><a href="listing-left-column.html">Link Level 1</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="listing-left-column.html">Sleeveless Tops</a></li>
                                            <li><a href="listing-left-column.html">Sweaters</a></li>
                                            <li><a href="listing-left-column.html">Jackets</a></li>
                                            <li><a href="listing-left-column.html">Outerwear</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="listing-left-column.html">BOTTOMS</a>
                                        <ul>
                                            <li><a href="listing-left-column.html">Trousers <span className="tt-badge tt-fatured">Fatured</span></a></li>
                                            <li><a href="listing-left-column.html">Jeans</a></li>
                                            <li><a href="listing-left-column.html">Leggings</a></li>
                                            <li><a href="listing-left-column.html">Jumpsuit &amp; Shorts</a></li>
                                            <li><a href="listing-left-column.html">Skirts</a></li>
                                            <li><a href="listing-left-column.html">Tights</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="listing-left-column.html">ACCESSORIES</a>
                                        <ul>
                                            <li><a href="listing-left-column.html">Jewellery</a></li>
                                            <li><a href="listing-left-column.html">Hats</a></li>
                                            <li><a href="listing-left-column.html">Scarves &amp; Snoods</a></li>
                                            <li><a href="listing-left-column.html">Belts</a></li>
                                            <li><a href="listing-left-column.html">Bags</a></li>
                                            <li><a href="listing-left-column.html">Shoes</a></li>
                                            <li><a href="listing-left-column.html">Sunglasses <span className="tt-badge tt-sale">Sale 15%</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="listing-left-column.html">SPECIALS</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="listing-right-column.html">MEN</a>
                                <ul>
                                    <li>
                                        <a href="listing-right-column.html">TOPS</a>
                                        <ul>
                                            <li><a href="listing-right-column.html">Blouses &amp; Shirts</a></li>
                                            <li><a href="listing-right-column.html">Dresses <span className="tt-badge tt-new">New</span></a></li>
                                            <li>
                                                <a href="listing-right-column.html">Tops &amp; T-shirts</a>
                                                <ul>
                                                    <li><a href="listing-right-column.html">Link Level 1</a></li>
                                                    <li>
                                                        <a href="listing-right-column.html">Link Level 1</a>
                                                        <ul>
                                                            <li><a href="listing-right-column.html">Link Level 2</a></li>
                                                            <li>
                                                                <a href="listing-right-column.html">Link Level 2</a>
                                                                <ul>
                                                                    <li><a href="listing-right-column.html">Link Level 3</a></li>
                                                                    <li><a href="listing-right-column.html">Link Level 3</a></li>
                                                                    <li><a href="listing-right-column.html">Link Level 3</a></li>
                                                                    <li>
                                                                        <a href="listing-right-column.html">Link Level 3</a>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="listing-right-column.html">Link Level 4</a>
                                                                                <ul>
                                                                                    <li><a href="listing-right-column.html">Link Level 5</a></li>
                                                                                    <li><a href="listing-right-column.html">Link Level 5</a></li>
                                                                                    <li><a href="listing-right-column.html">Link Level 5</a></li>
                                                                                    <li><a href="listing-right-column.html">Link Level 5</a></li>
                                                                                    <li><a href="listing-right-column.html">Link Level 5</a></li>
                                                                                </ul>
                                                                            </li>
                                                                            <li><a href="listing-right-column.html">Link Level 4</a></li>
                                                                            <li><a href="listing-right-column.html">Link Level 4</a></li>
                                                                            <li><a href="listing-right-column.html">Link Level 4</a></li>
                                                                            <li><a href="listing-right-column.html">Link Level 4</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><a href="listing-right-column.html">Link Level 3</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="listing-right-column.html">Link Level 2</a></li>
                                                            <li><a href="listing-right-column.html">Link Level 2</a></li>
                                                            <li><a href="listing-right-column.html">Link Level 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="listing-right-column.html">Link Level 1</a></li>
                                                    <li><a href="listing-right-column.html">Link Level 1</a></li>
                                                    <li><a href="listing-right-column.html">Link Level 1</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="listing-right-column.html">Sleeveless Tops</a></li>
                                            <li><a href="listing-right-column.html">Sweaters</a></li>
                                            <li><a href="listing-right-column.html">Jackets</a></li>
                                            <li><a href="listing-right-column.html">Outerwear</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="listing-right-column.html">BOTTOMS</a>
                                        <ul>
                                            <li><a href="listing-right-column.html">Trousers <span className="tt-badge tt-fatured">Fatured</span></a></li>
                                            <li><a href="listing-right-column.html">Jeans</a></li>
                                            <li><a href="listing-right-column.html">Leggings</a></li>
                                            <li><a href="listing-right-column.html">Jumpsuit &amp; shorts</a></li>
                                            <li><a href="listing-right-column.html">Skirts</a></li>
                                            <li><a href="listing-right-column.html">Tights</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="listing-right-column.html">ACCESSORIES</a>
                                        <ul>
                                            <li><a href="listing-right-column.html">Jewellery</a></li>
                                            <li><a href="listing-right-column.html">Hats</a></li>
                                            <li><a href="listing-right-column.html">Scarves &amp; Snoods</a></li>
                                            <li><a href="listing-right-column.html">Belts</a></li>
                                            <li><a href="listing-right-column.html">Bags</a></li>
                                            <li><a href="listing-right-column.html">Shoes</a></li>
                                            <li><a href="listing-right-column.html">Sunglasses <span className="tt-badge tt-sale">Sale 15%</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="index-rtl.html">RTL</a></li>
                        </ul>
                        <div className="mm-navbtn-names">
                            <div className="mm-closebtn">Close</div>
                            <div className="mm-backbtn">Back</div>
                        </div>
                    </nav>
                    {/* tt-mobile-header */}
                    <div className="tt-mobile-header">
                        <div className="container-fluid">
                            <div className="tt-header-row">
                                <div className="tt-mobile-parent-menu">
                                    <div className="tt-menu-toggle">
                                        <i className="icon-03" />
                                    </div>
                                </div>
                                {/* search */}
                                <div className="tt-mobile-parent-search tt-parent-box" />
                                {/* /search */}
                                {/* cart */}
                                <div className="tt-mobile-parent-cart tt-parent-box" />
                                {/* /cart */}
                                {/* account */}
                                <div className="tt-mobile-parent-account tt-parent-box" />
                                {/* /account */}
                                {/* currency */}
                                <div className="tt-mobile-parent-multi tt-parent-box" />
                                {/* /currency */}
                            </div>
                        </div>
                        <div className="container-fluid tt-top-line">
                            <div className="row">
                                <div className="tt-logo-container">
                                    {/* mobile logo */}
                                    <a className="tt-logo tt-logo-alignment" href="index.html"><img src="images/custom/logo.png" alt="" /></a>
                                    {/* /mobile logo */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tt-desktop-header */}
                    <div className="tt-desktop-header">
                        <div className="container">
                            <div className="tt-header-holder">
                                <div className="tt-col-obj tt-obj-logo">
                                    {/* logo */}
                                    <a className="tt-logo tt-logo-alignment" href="index.html"><img src="images/custom/logo.png" alt="" /></a>
                                    {/* /logo */}
                                </div>
                                <div className="tt-col-obj tt-obj-menu">
                                    {/* tt-menu */}
                                    <div className="tt-desctop-parent-menu tt-parent-box">
                                        <div className="tt-desctop-menu">
                                            <nav>
                                                <ul>
                                                    <li className="dropdown tt-megamenu-col-02 selected">
                                                        <a href="index.html">HOME</a>
                                                        <div className="dropdown-menu">
                                                            <div className="row tt-col-list">
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="index.html">HOME STYLES</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="index.html">Home — Example 1
                                        <img src="images/loader.svg" data-src="images/custom/tt-layout-img-01.png" alt="Example 1" />
                                                                            <span className="tt-badge tt-fatured">Popular</span>
                                                                        </a></li>
                                                                        <li><a href="index-02.html">Home — Example 2 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-02.png" alt="Example 2" /></a></li>
                                                                        <li><a href="index-03.html">Home — Example 3 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-03.png" alt="Example 3" /></a></li>
                                                                        <li><a href="index-04.html">Home — Example 4
                                        <img src="images/loader.svg" data-src="images/custom/tt-layout-img-04.png" alt="Example 4" />
                                                                            <span className="tt-badge tt-fatured">Popular</span>
                                                                        </a></li>
                                                                        <li><a href="index-05.html">Home — Example 5 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-05.png" alt="Example 5" /></a></li>
                                                                        <li><a href="index-06.html">Home — Example 6 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-06.png" alt="Example 6" /></a></li>
                                                                        <li><a href="index-07.html">Home — Example 7 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-07.png" alt="Example 7" /></a></li>
                                                                        <li><a href="index-08.html">Home — Example 8 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-08.png" alt="Example 8" /></a></li>
                                                                        <li><a href="index-09.html">Home — Example 9 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-09.png" alt="Example 9" /></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="index.html">HOME STYLES</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="index-10.html">Home — Example 10 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-10.png" alt="Example 10" /></a></li>
                                                                        <li><a href="index-11.html">Home — Example 11 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-11.png" alt="Example 11" /></a></li>
                                                                        <li><a href="index-12.html">Home — Example 12 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-12.png" alt="Example 12" /></a></li>
                                                                        <li><a href="index-13.html">Home — Example 13 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-13.png" alt="Example 13" /></a></li>
                                                                        <li><a href="index-14.html">Home — Example 14 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-14.png" alt="Example 14" /></a></li>
                                                                        <li><a href="index-15.html">Home — Example 15 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-15.png" alt="Example 15" /></a></li>
                                                                        <li><a href="index-16.html">Home — Example 16
                                        <img src="images/loader.svg" data-src="images/custom/tt-layout-img-16.png" alt="Example 16" />
                                                                            <span className="tt-badge tt-fatured">Popular</span>
                                                                        </a></li>
                                                                        <li><a href="index-17.html">Home — Example 17 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-17.png" alt="Example 17" /></a></li>
                                                                        <li><a href="index-18.html">Home — Example 18 <img src="images/loader.svg" data-src="images/custom/tt-layout-img-18.png" alt="Example 18" /></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="index-skin-snowboards.html">
                                                                        <span>HOME SKINS</span>
                                                                        <span className="tt-badge tt-sale">HOT</span>
                                                                    </a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="index-skin-snowboards.html">Snowboards Shop
                                        <img src="images/loader.svg" data-src="images/custom/tt-skins-img-01.png" alt="Snowboards Shop" />
                                                                            <span className="tt-badge tt-fatured">Popular</span>
                                                                        </a></li>
                                                                        <li><a href="index-skin-phones.html">Phones Shop
                                        <img src="images/loader.svg" data-src="images/custom/tt-skins-img-02.png" alt="Phones Shop" />
                                                                            <span className="tt-badge tt-fatured">Popular</span>
                                                                        </a></li>
                                                                        <li><a href="index-skin-bikes.html">Bikes Shop
                                        <img src="images/loader.svg" data-src="images/custom/tt-skins-img-03.png" alt="Bikes Shop" />
                                                                            <span className="tt-badge tt-fatured">Popular</span>
                                                                        </a></li>
                                                                        <li><a href="index-skin-lingerie.html">Lingerie Shop <img src="images/loader.svg" data-src="images/custom/tt-skins-img-04.png" alt="Lingerie Shop" /></a></li>
                                                                        <li><a href="index-skin-furniture.html">Furniture Shop <img src="images/loader.svg" data-src="images/custom/tt-skins-img-05.png" alt="Furniture Shop" /></a></li>
                                                                        <li><a href="index-skin-books.html">Books shop
                                        <img src="images/loader.svg" data-src="images/custom/tt-skins-img-06.png" alt="Books Shop" />
                                                                            <span className="tt-badge tt-new">New</span>
                                                                        </a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown megamenu">
                                                        <a href="listing-collection.html">SHOP</a>
                                                        <div className="dropdown-menu">
                                                            <div className="row tt-col-list">
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="listing-left-column.html">LISTING STYLES</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="listing-left-column.html">Listing With Left Sidebar</a></li>
                                                                        <li><a href="listing-right-column.html">Listing With Right Sidebar</a></li>
                                                                        <li><a href="listing-not-sidebar.html">Listing Not Sidebar</a></li>
                                                                        <li><a href="listing-not-sidebar-full-width.html">Listing Not Sidebar Full Width</a></li>
                                                                        <li><a href="listing-metro.html">Listing Metro</a></li>
                                                                        <li><a href="listing-left-column-with-block.html">Listing With Custom HTML Block</a></li>
                                                                        <li><a href="listing-collection.html">Listing Collection</a></li>
                                                                        <li><a href="lookbook.html">Look Book</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="product.html">PRODUCT PAGE STYLES</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="product.html">Product Example 1</a></li>
                                                                        <li><a href="product-02.html">Product Example 2</a></li>
                                                                        <li><a href="product-03.html">Product Example 3</a></li>
                                                                        <li><a href="product-04.html">Product Example 4</a></li>
                                                                        <li><a href="product-variable.html">Product Layout</a></li>
                                                                        <li><a href="product-three-columns.html">Three Columns</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="product-variable.html">PRODUCT PAGE TYPES</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="product.html">Standard Product</a></li>
                                                                        <li><a href="product-variable.html">Variable Product</a></li>
                                                                        <li><a href="product-04.html">Grouped Product</a></li>
                                                                        <li><a href="product-label-new.html">New Product</a></li>
                                                                        <li><a href="product-label-sale.html">Sale Product</a></li>
                                                                        <li><a href="product-label-out-of-stock.html">Out Of Stock Product</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="shopping_cart_02.html">OTHER PAGES</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="shopping_cart_02.html">Cart</a></li>
                                                                        <li><a href="shopping_cart_01.html">Cart With Right Col</a></li>
                                                                        <li><a href="account.html">Account</a></li>
                                                                        <li><a href="account_address.html">Account Address</a></li>
                                                                        <li><a href="account_address_fields.html">Account Address Fields</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown tt-megamenu-col-01">
                                                        <a href="blog-listing-without-col.html">BLOG</a>
                                                        <div className="dropdown-menu">
                                                            <div className="row tt-col-list">
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="blog-listing-without-col.html">BLOG STYLES</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="blog-listing-without-col.html">Standard Without Sidebar</a></li>
                                                                        <li><a href="blog-listing-col-left.html">Standard With Left Sidebar</a></li>
                                                                        <li><a href="blog-listing-col-right.html">Standard With Right Sidebar</a></li>
                                                                        <li><a href="blog-masonry-col-2.html">Two Colums</a></li>
                                                                        <li><a href="blog-masonry-col-3.html">Three Colums</a></li>
                                                                        <li><a href="blog-masonry-col-3-filter.html">Three Colums With Filter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="blog-single-post.html">POST TYPES</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="blog-single-post.html">Standard</a></li>
                                                                        <li><a href="blog-single-post-gallery.html">Gallery</a></li>
                                                                        <li><a href="blog-single-post-link.html">Link</a></li>
                                                                        <li><a href="blog-single-post-quote.html">Quote</a></li>
                                                                        <li><a href="blog-single-post-video.html">Video</a></li>
                                                                        <li><a href="blog-single-post-audio.html">Audio</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown tt-megamenu-col-01">
                                                        <a href="portfolio-col-wide-four.html">PORTFOLIO</a>
                                                        <div className="dropdown-menu">
                                                            <div className="row tt-col-list">
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="portfolio-col-grid-two.html">BOXED GRID</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="portfolio-col-grid-two.html">Two Colums</a></li>
                                                                        <li><a href="portfolio-col-grid-three.html">Three Colums</a></li>
                                                                        <li><a href="portfolio-col-grid-four.html">Four Colums</a></li>
                                                                        <li><a href="portfolio-col-grid-four-without-filter.html">Four Colums Without Filter</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="portfolio-col-wide-three.html">BOXED WIDE</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="portfolio-col-wide-two.html">Two Colums</a></li>
                                                                        <li><a href="portfolio-col-wide-three.html">Three Colums</a></li>
                                                                        <li><a href="portfolio-col-wide-four.html">Four Colums</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown tt-megamenu-col-01">
                                                        <a href="about.html">PAGES</a>
                                                        <div className="dropdown-menu">
                                                            <div className="row tt-col-list">
                                                                <div className="col">
                                                                    <h6 className="tt-title-submenu"><a href="about.html">PAGES</a></h6>
                                                                    <ul className="tt-megamenu-submenu">
                                                                        <li><a href="about.html">About Example 1</a>
                                                                            <ul>
                                                                                <li><a href="about.html">Link Level 1</a></li>
                                                                                <li>
                                                                                    <a href="about.html">Link Level 1</a>
                                                                                    <ul>
                                                                                        <li><a href="about.html">Link Level 2</a></li>
                                                                                        <li>
                                                                                            <a href="about.html">Link Level 2</a>
                                                                                            <ul>
                                                                                                <li><a href="about.html">Link Level 3</a></li>
                                                                                                <li><a href="about.html">Link Level 3</a></li>
                                                                                                <li><a href="about.html">Link Level 3</a></li>
                                                                                                <li>
                                                                                                    <a href="about.html">Link Level 3</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="about.html">Link Level 4</a>
                                                                                                            <ul>
                                                                                                                <li><a href="about.html">Link Level 5</a></li>
                                                                                                                <li><a href="about.html">Link Level 5</a></li>
                                                                                                                <li><a href="about.html">Link Level 5</a></li>
                                                                                                                <li><a href="about.html">Link Level 5</a></li>
                                                                                                                <li><a href="about.html">Link Level 5</a></li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                        <li><a href="about.html">Link Level 4</a></li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li><a href="about.html">Link Level 3</a></li>
                                                                                            </ul>
                                                                                        </li>
                                                                                        <li><a href="about.html">Link Level 2</a></li>
                                                                                        <li><a href="about.html">Link Level 2</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li><a href="about.html">Link Level 1</a></li>
                                                                                <li><a href="about.html">Link Level 1</a></li>
                                                                                <li><a href="about.html">Link Level 1</a></li>
                                                                            </ul>
                                                                        </li>
                                                                        <li><a href="about-02.html">About Example 2</a></li>
                                                                        <li><a href="contact.html">Contacts Example 1</a></li>
                                                                        <li><a href="contact-02.html">Contacts Example 2</a></li>
                                                                        <li><a href="services.html">Services</a></li>
                                                                        <li><a href="faq.html">FAQ</a></li>
                                                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                                                        <li><a href="page404.html">Page 404</a></li>
                                                                        <li><a href="typography.html">Typography</a></li>
                                                                        <li><a href="gift-cart.html">Gift Cart</a></li>
                                                                        <li>
                                                                            <a href="compare.html">Compare</a>
                                                                            <ul>
                                                                                <li><a href="compare.html">Compare 01</a></li>
                                                                                <li><a href="compare-02.html">Compare 02</a></li>
                                                                            </ul>
                                                                        </li>
                                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                                        <li>
                                                                            <a href="account.html">Account</a>
                                                                            <ul>
                                                                                <li><a href="account.html">Account</a></li>
                                                                                <li><a href="account_address.html">Account Address</a></li>
                                                                                <li><a href="account_address_fields.html">Account Address Fields</a></li>
                                                                            </ul>
                                                                        </li>
                                                                        <li>
                                                                            <a href="empty-search.html">Empty</a>
                                                                            <ul>
                                                                                <li><a href="empty-cart.html">Empty Cart</a></li>
                                                                                <li><a href="empty-search.html">Empty Search</a></li>
                                                                                <li><a href="empty-wishlist.html">Empty Wishlist</a></li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown megamenu">
                                                        <a href="listing-left-column.html">WOMEN</a>
                                                        <div className="dropdown-menu">
                                                            <div className="row">
                                                                <div className="col-sm-8">
                                                                    <div className="row tt-col-list">
                                                                        <div className="col-sm-3">
                                                                            <a className="tt-title-submenu" href="listing-left-column.html">
                                                                                TOPS
                                      </a>
                                                                            <ul className="tt-megamenu-submenu">
                                                                                <li><a href="listing-left-column.html">Blouses &amp; Shirts</a></li>
                                                                                <li><a href="listing-left-column.html">Dresses <span className="tt-badge tt-new">New</span></a></li>
                                                                                <li>
                                                                                    <a href="listing-left-column.html">Tops &amp; T-shirts</a>
                                                                                    <ul>
                                                                                        <li><a href="listing-left-column.html">Link Level 1</a></li>
                                                                                        <li>
                                                                                            <a href="listing-left-column.html">Link Level 1</a>
                                                                                            <ul>
                                                                                                <li><a href="listing-left-column.html">Link Level 2</a></li>
                                                                                                <li>
                                                                                                    <a href="listing-left-column.html">Link Level 2</a>
                                                                                                    <ul>
                                                                                                        <li><a href="listing-left-column.html">Link Level 3</a></li>
                                                                                                        <li><a href="listing-left-column.html">Link Level 3</a></li>
                                                                                                        <li><a href="listing-left-column.html">Link Level 3</a></li>
                                                                                                        <li>
                                                                                                            <a href="listing-left-column.html">Link Level 3</a>
                                                                                                            <ul>
                                                                                                                <li>
                                                                                                                    <a href="listing-left-column.html">Link Level 4</a>
                                                                                                                    <ul>
                                                                                                                        <li><a href="listing-left-column.html">Link Level 5</a></li>
                                                                                                                        <li><a href="listing-left-column.html">Link Level 5</a></li>
                                                                                                                        <li><a href="listing-left-column.html">Link Level 5</a></li>
                                                                                                                        <li><a href="listing-left-column.html">Link Level 5</a></li>
                                                                                                                        <li><a href="listing-left-column.html">Link Level 5</a></li>
                                                                                                                    </ul>
                                                                                                                </li>
                                                                                                                <li><a href="listing-left-column.html">Link Level 4</a></li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                        <li><a href="listing-left-column.html">Link Level 3</a></li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li><a href="listing-left-column.html">Link Level 2</a></li>
                                                                                                <li><a href="listing-left-column.html">Link Level 2</a></li>
                                                                                            </ul>
                                                                                        </li>
                                                                                        <li><a href="listing-left-column.html">Link Level 1</a></li>
                                                                                        <li><a href="listing-left-column.html">Link Level 1</a></li>
                                                                                        <li><a href="listing-left-column.html">Link Level 1</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li><a href="listing-left-column.html">Sleeveless Tops</a></li>
                                                                                <li><a href="listing-left-column.html">Sweaters</a></li>
                                                                                <li><a href="listing-left-column.html">Jackets</a></li>
                                                                                <li><a href="listing-left-column.html">Outerwear</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-sm-3">
                                                                            <a className="tt-title-submenu" href="listing-left-column.html">
                                                                                BOTTOMS
                                      </a>
                                                                            <ul className="tt-megamenu-submenu">
                                                                                <li><a href="listing-left-column.html">Trousers <span className="tt-badge tt-fatured">Fatured</span></a></li>
                                                                                <li>
                                                                                    <a href="listing-left-column.html">Jeans</a>
                                                                                </li>
                                                                                <li><a href="listing-left-column.html">Leggings</a></li>
                                                                                <li><a href="listing-left-column.html">Jumpsuit &amp; Shorts</a></li>
                                                                                <li><a href="listing-left-column.html">Skirts</a></li>
                                                                                <li><a href="listing-left-column.html">Tights</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-sm-3">
                                                                            <a className="tt-title-submenu" href="listing-left-column.html">
                                                                                ACCESSORIES
                                      </a>
                                                                            <ul className="tt-megamenu-submenu">
                                                                                <li><a href="listing-left-column.html">Jewellery</a></li>
                                                                                <li><a href="listing-left-column.html">Hats</a></li>
                                                                                <li><a href="listing-left-column.html">Scarves &amp; Snoods</a></li>
                                                                                <li><a href="listing-left-column.html">Belts</a></li>
                                                                                <li><a href="listing-left-column.html">Bags</a></li>
                                                                                <li><a href="listing-left-column.html">Shoes <span className="tt-badge tt-sale">Sale 15%</span></a></li>
                                                                                <li><a href="listing-left-column.html">Sunglasses</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-sm-3">
                                                                            <a className="tt-title-submenu" href="listing-left-column.html">
                                                                                TOP BRANDS
                                      </a>
                                                                            <ul className="tt-listing-01">
                                                                                <li><a href="#" target="_blank"><img src="images/loader.svg" data-src="images/custom/brand-img-01.png" alt="" /></a></li>
                                                                                <li><a href="#" target="_blank"><img src="images/loader.svg" data-src="images/custom/brand-img-02.png" alt="" /></a></li>
                                                                                <li><a href="#" target="_blank"><img src="images/loader.svg" data-src="images/custom/brand-img-03.png" alt="" /></a></li>
                                                                                <li><a href="#" target="_blank"><img src="images/loader.svg" data-src="images/custom/brand-img-04.png" alt="" /></a></li>
                                                                                <li><a href="#" target="_blank"><img src="images/loader.svg" data-src="images/custom/brand-img-05.png" alt="" /></a></li>
                                                                                <li><a href="#" target="_blank"><img src="images/loader.svg" data-src="images/custom/brand-img-06.png" alt="" /></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <a href="listing-left-column.html" className="tt-title-submenu">SPECIALS</a>
                                                                    <div className="tt-menu-slider header-menu-product arrow-location-03 row">
                                                                        <div className="col-2">
                                                                            <div className="tt-product thumbprod-center">
                                                                                <a href="product.html">
                                                                                    <div className="tt-image-box">
                                                                                        <span className="tt-img"><img src="images/product/product-01.jpg" alt="" /></span>
                                                                                        <span className="tt-img-roll-over"><img src="images/product/product-01-02.jpg" alt="" /></span>
                                                                                    </div>
                                                                                    <div className="tt-description">
                                                                                        <h2 className="tt-title">Flared Shift Dress</h2>
                                                                                        <div className="tt-price">
                                                                                            <span className="new-price">$14</span>
                                                                                            <span className="old-price">$24</span>
                                                                                        </div>
                                                                                        <div className="tt-product-inside-hover">
                                                                                            <div className="tt-btn-addtocart" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</div>
                                                                                            <div className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-2">
                                                                            <div className="tt-product thumbprod-center">
                                                                                <a href="product.html">
                                                                                    <div className="tt-image-box">
                                                                                        <span className="tt-img"><img src="images/product/product-02.jpg" alt="" /></span>
                                                                                        <span className="tt-img-roll-over"><img src="images/product/product-02-02.jpg" alt="" /></span>
                                                                                    </div>
                                                                                    <div className="tt-description">
                                                                                        <h2 className="tt-title">Flared Shift Dress</h2>
                                                                                        <div className="tt-price">
                                                                                            $17
                                            </div>
                                                                                        <div className="tt-product-inside-hover">
                                                                                            <div className="tt-btn-addtocart" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</div>
                                                                                            <div className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-2">
                                                                            <div className="tt-product thumbprod-center">
                                                                                <a href="product.html">
                                                                                    <div className="tt-image-box">
                                                                                        <span className="tt-img"><img src="images/product/product-04.jpg" alt="" /></span>
                                                                                        <span className="tt-img-roll-over"><img src="images/product/product-04-01.jpg" alt="" /></span>
                                                                                    </div>
                                                                                    <div className="tt-description">
                                                                                        <h2 className="tt-title">Flared Shift Dress</h2>
                                                                                        <div className="tt-price">
                                                                                            $14
                                            </div>
                                                                                        <div className="tt-product-inside-hover">
                                                                                            <div className="tt-btn-addtocart" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</div>
                                                                                            <div className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-2">
                                                                            <div className="tt-product thumbprod-center">
                                                                                <a href="product.html">
                                                                                    <div className="tt-image-box">
                                                                                        <span className="tt-img"><img src="images/product/product-05.jpg" alt="" /></span>
                                                                                        <span className="tt-img-roll-over"><img src="images/product/product-05-02.jpg" alt="" /></span>
                                                                                    </div>
                                                                                    <div className="tt-description">
                                                                                        <h2 className="tt-title">Flared Shift Dress</h2>
                                                                                        <div className="tt-price">
                                                                                            <span className="new-price">$14</span>
                                                                                            <span className="old-price">$24</span>
                                                                                        </div>
                                                                                        <div className="tt-product-inside-hover">
                                                                                            <div className="tt-btn-addtocart" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</div>
                                                                                            <div className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <a href="listing-left-column.html" className="tt-promo-02">
                                                                        <img src="images/custom/header-promo-01.jpg" alt="" />
                                                                        <div className="tt-description tt-point-h-l">
                                                                            <div className="tt-description-wrapper">
                                                                                <div className="tt-title-small">SUMMER <span className="tt-base-color">2018</span></div>
                                                                                <div className="tt-title-large">NEW ARRIVALS</div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <a href="listing-left-column.html" className="tt-promo-02">
                                                                        <img src="images/custom/header-promo-02.jpg" alt="" />
                                                                        <div className="tt-description tt-point-h-l">
                                                                            <div className="tt-description-wrapper">
                                                                                <div className="tt-title-small"><span className="tt-white-color">CLEARANCE SALES</span></div>
                                                                                <div className="tt-title-large"><span className="tt-white-color">GET UP TO 20% OFF</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown megamenu">
                                                        <a href="listing-right-column.html">MEN</a>
                                                        <div className="dropdown-menu">
                                                            <div className="row">
                                                                <div className="col-sm-9">
                                                                    <div className="row tt-col-list">
                                                                        <div className="col-sm-4">
                                                                            <a href="listing-right-column.html" className="tt-title-submenu">
                                                                                TOPS
                                        <img src="images/loader.svg" data-src="images/custom/header-category-01.jpg" alt="" />
                                                                            </a>
                                                                            <ul className="tt-megamenu-submenu">
                                                                                <li><a href="listing-right-column.html">Shirts</a></li>
                                                                                <li><a href="listing-right-column.html">Sweaters  <span className="tt-badge tt-new">New</span></a></li>
                                                                                <li>
                                                                                    <a href="listing-right-column.html">Tops &amp; T-shirts</a>
                                                                                    <ul>
                                                                                        <li><a href="listing-right-column.html">Link Level 1</a></li>
                                                                                        <li>
                                                                                            <a href="listing-right-column.html">Link Level 1</a>
                                                                                            <ul>
                                                                                                <li><a href="listing-right-column.html">Link Level 2</a></li>
                                                                                                <li>
                                                                                                    <a href="listing-right-column.html">Link Level 2</a>
                                                                                                    <ul>
                                                                                                        <li><a href="listing-right-column.html">Link Level 3</a></li>
                                                                                                        <li><a href="listing-right-column.html">Link Level 3</a></li>
                                                                                                        <li><a href="listing-right-column.html">Link Level 3</a></li>
                                                                                                        <li>
                                                                                                            <a href="listing-right-column.html">Link Level 3</a>
                                                                                                            <ul>
                                                                                                                <li>
                                                                                                                    <a href="listing-right-column.html">Link Level 4</a>
                                                                                                                    <ul>
                                                                                                                        <li><a href="listing-right-column.html">Link Level 5</a></li>
                                                                                                                        <li><a href="listing-right-column.html">Link Level 5</a></li>
                                                                                                                        <li><a href="listing-right-column.html">Link Level 5</a></li>
                                                                                                                        <li><a href="listing-right-column.html">Link Level 5</a></li>
                                                                                                                        <li><a href="listing-right-column.html">Link Level 5</a></li>
                                                                                                                    </ul>
                                                                                                                </li>
                                                                                                                <li><a href="listing-right-column.html">Link Level 4</a></li>
                                                                                                                <li><a href="listing-right-column.html">Link Level 4</a></li>
                                                                                                                <li><a href="listing-right-column.html">Link Level 4</a></li>
                                                                                                                <li><a href="listing-right-column.html">Link Level 4</a></li>
                                                                                                            </ul>
                                                                                                        </li>
                                                                                                        <li><a href="listing-right-column.html">Link Level 3</a></li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li><a href="listing-right-column.html">Link Level 2</a></li>
                                                                                                <li><a href="listing-right-column.html">Link Level 2</a></li>
                                                                                                <li><a href="listing-right-column.html">Link Level 2</a></li>
                                                                                            </ul>
                                                                                        </li>
                                                                                        <li><a href="listing-right-column.html">Link Level 1</a></li>
                                                                                        <li><a href="listing-right-column.html">Link Level 1</a></li>
                                                                                        <li><a href="listing-right-column.html">Link Level 1</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li><a href="listing-right-column.html">Sleeveless Tops</a></li>
                                                                                <li><a href="listing-right-column.html">Jackets</a></li>
                                                                                <li><a href="listing-right-column.html">Outerwear</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-sm-4">
                                                                            <a className="tt-title-submenu" href="listing-right-column.html">
                                                                                BOTTOMS
                                        <img src="images/loader.svg" data-src="images/custom/header-category-02.jpg" alt="" />
                                                                            </a>
                                                                            <ul className="tt-megamenu-submenu">
                                                                                <li><a href="listing-right-column.html">Trousers <span className="tt-badge tt-fatured">Fatured</span></a></li>
                                                                                <li><a href="listing-right-column.html">Jeans</a></li>
                                                                                <li><a href="listing-right-column.html">Jumpsuit &amp; Shorts</a></li>
                                                                                <li><a href="listing-right-column.html">Skirts</a></li>
                                                                                <li><a href="listing-right-column.html">Tights</a></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-sm-4">
                                                                            <a className="tt-title-submenu" href="listing-right-column.html">
                                                                                ACCESSORIES
                                        <img src="images/loader.svg" data-src="images/custom/header-category-03.jpg" alt="" />
                                                                            </a>
                                                                            <ul className="tt-megamenu-submenu">
                                                                                <li><a href="listing-right-column.html">Hats</a></li>
                                                                                <li><a href="listing-right-column.html">Scarves &amp; Snoods</a></li>
                                                                                <li><a href="listing-right-column.html">Belts</a></li>
                                                                                <li><a href="listing-right-column.html">Bags</a></li>
                                                                                <li><a href="listing-right-column.html">Shoes</a></li>
                                                                                <li><a href="listing-right-column.html">Sunglasses <span className="tt-badge tt-sale">Sale 15%</span></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <div className="tt-offset-7">
                                                                        <a href="listing-left-column.html" className="tt-promo-02">
                                                                            <img src="images/loader.svg" data-src="images/custom/header-promo-03.jpg" alt="" />
                                                                            <div className="tt-description tt-point-h-l tt-point-v-t">
                                                                                <div className="tt-description-wrapper">
                                                                                    <div className="tt-title-small tt-white-color">SALE</div>
                                                                                    <div className="tt-title-xlarge tt-white-color">70% OFF</div>
                                                                                    <p className="tt-white-color">Free shipping on all US order or order above $99</p>
                                                                                    <span className="btn-underline tt-obj-bottom tt-white-color">SHOP NOW!</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="index-rtl.html">RTL</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    {/* /tt-menu */}
                                </div>
                                <div className="tt-col-obj tt-obj-options obj-move-right">
                                    {/* tt-search */}
                                    <div className="tt-desctop-parent-search tt-parent-box">
                                        <div className="tt-search tt-dropdown-obj">
                                            <button className="tt-dropdown-toggle" data-tooltip="Search" data-tposition="bottom">
                                                <i className="icon-f-85" />
                                            </button>
                                            <div className="tt-dropdown-menu">
                                                <div className="container">
                                                    <form>
                                                        <div className="tt-col">
                                                            <input type="text" className="tt-search-input" placeholder="Search Products..." />
                                                            <button className="tt-btn-search" type="submit" />
                                                        </div>
                                                        <div className="tt-col">
                                                            <button className="tt-btn-close icon-g-80" />
                                                        </div>
                                                        <div className="tt-info-text">
                                                            What are you Looking for?
                            </div>
                                                        <div className="search-results">
                                                            <ul>
                                                                <li>
                                                                    <a href="product.html">
                                                                        <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-03.jpg" alt="" /></div>
                                                                        <div className="tt-description">
                                                                            <div className="tt-title">Flared Shift Bag</div>
                                                                            <div className="tt-price">
                                                                                <span className="new-price">$14</span>
                                                                                <span className="old-price">$24</span>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product.html">
                                                                        <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-02.jpg" alt="" /></div>
                                                                        <div className="tt-description">
                                                                            <div className="tt-title">Flared Shift Bag</div>
                                                                            <div className="tt-price">
                                                                                $24
                                      </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product.html">
                                                                        <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="" /></div>
                                                                        <div className="tt-description">
                                                                            <div className="tt-title">Flared Shift Bag</div>
                                                                            <div className="tt-price">
                                                                                $14
                                      </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product.html">
                                                                        <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-04.jpg" alt="" /></div>
                                                                        <div className="tt-description">
                                                                            <div className="tt-title">Flared Shift Bag</div>
                                                                            <div className="tt-price">
                                                                                $24
                                      </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product.html">
                                                                        <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-05.jpg" alt="" /></div>
                                                                        <div className="tt-description">
                                                                            <div className="tt-title">Flared Shift Bag</div>
                                                                            <div className="tt-price">
                                                                                $17
                                      </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="product.html">
                                                                        <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-06.jpg" alt="" /></div>
                                                                        <div className="tt-description">
                                                                            <div className="tt-title">Flared Shift Bag</div>
                                                                            <div className="tt-price">
                                                                                $20
                                      </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <button type="button" className="tt-view-all">View all products</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /tt-search */}
                                    {/* tt-cart */}
                                    <div className="tt-desctop-parent-cart tt-parent-box">
                                        <div className="tt-cart tt-dropdown-obj" data-tooltip="Cart" data-tposition="bottom">
                                            <button className="tt-dropdown-toggle">
                                                <i className="icon-f-39" />
                                                <span className="tt-badge-cart">3</span>
                                            </button>
                                            <div className="tt-dropdown-menu">
                                                <div className="tt-mobile-add">
                                                    <h6 className="tt-title">SHOPPING CART</h6>
                                                    <button className="tt-close">Close</button>
                                                </div>
                                                <div className="tt-dropdown-inner">
                                                    <div className="tt-cart-layout">
                                                        {/* layout emty cart */}
                                                        {/* <a href="empty-cart.html" class="tt-cart-empty">
											<i class="icon-f-39"></i>
											<p>No Products in the Cart</p>
										</a> */}
                                                        <div className="tt-cart-content">
                                                            <div className="tt-cart-list">
                                                                <div className="tt-item">
                                                                    <a href="product.html">
                                                                        <div className="tt-item-img">
                                                                            <img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="" />
                                                                        </div>
                                                                        <div className="tt-item-descriptions">
                                                                            <h2 className="tt-title">Flared Shift Dress</h2>
                                                                            <ul className="tt-add-info">
                                                                                <li>Yellow, Material 2, Size 58,</li>
                                                                                <li>Vendor: Addidas</li>
                                                                            </ul>
                                                                            <div className="tt-quantity">1 X</div> <div className="tt-price">$12</div>
                                                                        </div>
                                                                    </a>
                                                                    <div className="tt-item-close">
                                                                        <a href="#" className="tt-btn-close" />
                                                                    </div>
                                                                </div>
                                                                <div className="tt-item">
                                                                    <a href="product.html">
                                                                        <div className="tt-item-img">
                                                                            <img src="images/loader.svg" data-src="images/product/product-02.jpg" alt="" />
                                                                        </div>
                                                                        <div className="tt-item-descriptions">
                                                                            <h2 className="tt-title">Flared Shift Dress</h2>
                                                                            <ul className="tt-add-info">
                                                                                <li>Yellow, Material 2, Size 58,</li>
                                                                                <li>Vendor: Addidas</li>
                                                                            </ul>
                                                                            <div className="tt-quantity">1 X</div> <div className="tt-price">$18</div>
                                                                        </div>
                                                                    </a>
                                                                    <div className="tt-item-close">
                                                                        <a href="#" className="tt-btn-close" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tt-cart-total-row">
                                                                <div className="tt-cart-total-title">SUBTOTAL:</div>
                                                                <div className="tt-cart-total-price">$324</div>
                                                            </div>
                                                            <div className="tt-cart-btn">
                                                                <div className="tt-item">
                                                                    <a href="#" className="btn">PROCEED TO CHECKOUT</a>
                                                                </div>
                                                                <div className="tt-item">
                                                                    <a href="shopping_cart_02.html" className="btn-link-02 tt-hidden-mobile">View Cart</a>
                                                                    <a href="shopping_cart_02.html" className="btn btn-border tt-hidden-desctope">VIEW CART</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /tt-cart */}
                                    {/* tt-account */}
                                    <div className="tt-desctop-parent-account tt-parent-box">
                                        <div className="tt-account tt-dropdown-obj">
                                            <button className="tt-dropdown-toggle" data-tooltip="My Account" data-tposition="bottom"><i className="icon-f-94" /></button>
                                            <div className="tt-dropdown-menu">
                                                <div className="tt-mobile-add">
                                                    <button className="tt-close">Close</button>
                                                </div>
                                                <div className="tt-dropdown-inner">
                                                    <ul>
                                                        <li><a href="login.html"><i className="icon-f-94" />Account</a></li>
                                                        <li><a href="wishlist.html"><i className="icon-n-072" />Wishlist</a></li>
                                                        <li><a href="compare.html"><i className="icon-n-08" />Compare</a></li>
                                                        <li><a href="page404.html"><i className="icon-f-68" />Check Out</a></li>
                                                        <li><a href="login.html"><i className="icon-f-76" />Sign In</a></li>
                                                        <li><a href="page404.html"><i className="icon-f-77" />Sign Out</a></li>
                                                        <li><a href="create-account.html"><i className="icon-f-94" />Register</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /tt-account */}
                                    {/* tt-langue and tt-currency */}
                                    <div className="tt-desctop-parent-multi tt-parent-box">
                                        <div className="tt-multi-obj tt-dropdown-obj">
                                            <button className="tt-dropdown-toggle" data-tooltip="Settings" data-tposition="bottom"><i className="icon-f-79" /></button>
                                            <div className="tt-dropdown-menu">
                                                <div className="tt-mobile-add">
                                                    <button className="tt-close">Close</button>
                                                </div>
                                                <div className="tt-dropdown-inner">
                                                    <ul>
                                                        <li className="active"><a href="#">English</a></li>
                                                        <li><a href="#">Deutsch</a></li>
                                                        <li><a href="#">Español</a></li>
                                                        <li><a href="#">Français</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="active"><a href="#"><i className="icon-h-59" />USD - US Dollar</a></li>
                                                        <li><a href="#"><i className="icon-h-60" />EUR - Euro</a></li>
                                                        <li><a href="#"><i className="icon-h-61" />GBP - British Pound Sterling</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /tt-langue and tt-currency */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* stuck nav */}
                    <div className="tt-stuck-nav">
                        <div className="container">
                            <div className="tt-header-row ">
                                <div className="tt-stuck-parent-menu" />
                                <div className="tt-stuck-parent-search tt-parent-box" />
                                <div className="tt-stuck-parent-cart tt-parent-box" />
                                <div className="tt-stuck-parent-account tt-parent-box" />
                                <div className="tt-stuck-parent-multi tt-parent-box" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className="tt-breadcrumb">
                    <div className="container">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Listing</li>
                        </ul>
                    </div>
                </div>
                <div id="tt-pageContent">
                    <div className="container-indent">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-lg-3 col-xl-3 leftColumn aside">
                                    <div className="tt-btn-col-close">
                                        <a href="#">Close</a>
                                    </div>
                                    <div className="tt-collapse open tt-filter-detach-option">
                                        <div className="tt-collapse-content">
                                            <div className="filters-mobile">
                                                <div className="filters-row-select">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tt-collapse open ">
                                        <h3 className="tt-collapse-title">SORT BY</h3>
                                        <div className="tt-collapse-content">
                                            <ul className="tt-filter-list">
                                                <li className="active">
                                                    <a href="#">Shirts &amp; Tops</a>
                                                </li>
                                                <li>
                                                    <a href="#">XS</a>
                                                </li>
                                                <li>
                                                    <a href="#">White</a>
                                                </li>
                                            </ul>
                                            <a href="#" className="btn-link-02">Clear All</a>
                                        </div>
                                    </div>
                                    <div className="tt-collapse open">
                                        <h3 className="tt-collapse-title">PRODUCT CATEGORIES</h3>
                                        <div className="tt-collapse-content">
                                            <ul className="tt-list-row">
                                                <li className="active"><a href="#">Dresses</a></li>
                                                <li><a href="#">Shirts &amp; Tops</a></li>
                                                <li><a href="#">Polo Shirts</a></li>
                                                <li><a href="#">Sweaters</a></li>
                                                <li><a href="#">Blazers &amp; Vests</a></li>
                                                <li><a href="#">Jackets &amp; Outerwear</a></li>
                                                <li><a href="#">Activewear</a></li>
                                                <li><a href="#">Pants</a></li>
                                                <li><a href="#">Jumpsuits &amp; Shorts</a></li>
                                                <li><a href="#">Jeans</a></li>
                                                <li><a href="#">Skirts</a></li>
                                                <li><a href="#">Swimwear</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tt-collapse open">
                                        <h3 className="tt-collapse-title">FILTER BY PRICE</h3>
                                        <div className="tt-collapse-content">
                                            <ul className="tt-list-row">
                                                <li className="active"><a href="#">$0 — $50</a></li>
                                                <li><a href="#">$50 — $100</a></li>
                                                <li><a href="#">$100 — $150</a></li>
                                                <li><a href="#">$150 —  $200</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tt-collapse open">
                                        <h3 className="tt-collapse-title">FILTER BY SIZE</h3>
                                        <div className="tt-collapse-content">
                                            <ul className="tt-options-swatch options-middle">
                                                <li><a href="#">4</a></li>
                                                <li className="active"><a href="#">6</a></li>
                                                <li><a href="#">8</a></li>
                                                <li><a href="#">10</a></li>
                                                <li><a href="#">12</a></li>
                                                <li><a href="#">14</a></li>
                                                <li><a href="#">16</a></li>
                                                <li><a href="#">18</a></li>
                                                <li><a href="#">20</a></li>
                                                <li><a href="#">22</a></li>
                                                <li><a href="#">24</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tt-collapse open">
                                        <h3 className="tt-collapse-title">FILTER BY COLOR</h3>
                                        <div className="tt-collapse-content">
                                            <ul className="tt-options-swatch options-middle">
                                                <li><a className="options-color tt-border tt-color-bg-08" href="#" /></li>
                                                <li><a className="options-color tt-color-bg-09" href="#" /></li>
                                                <li className="active"><a className="options-color tt-color-bg-10" href="#" /></li>
                                                <li><a className="options-color tt-color-bg-11" href="#" /></li>
                                                <li><a className="options-color tt-color-bg-12" href="#" /></li>
                                                <li><a className="options-color tt-color-bg-13" href="#" /></li>
                                                <li><a className="options-color tt-color-bg-14" href="#" /></li>
                                                <li><a className="options-color tt-color-bg-15" href="#" /></li>
                                                <li><a className="options-color tt-color-bg-16" href="#" /></li>
                                                <li><a className="options-color tt-color-bg-17" href="#" /></li>
                                                <li><a className="options-color tt-color-bg-18" href="#" /></li>
                                                <li><a className="options-color" href="#">
                                                    <span className="swatch-img">
                                                        <img src="images/custom/texture-img-01.jpg" alt="" />
                                                    </span>
                                                    <span className="swatch-label color-black" />
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tt-collapse open">
                                        <h3 className="tt-collapse-title">VENDOR</h3>
                                        <div className="tt-collapse-content">
                                            <ul className="tt-list-row">
                                                <li><a href="#">Levi's</a></li>
                                                <li><a href="#">Gap</a></li>
                                                <li><a href="#">Polo</a></li>
                                                <li><a href="#">Lacoste</a></li>
                                                <li><a href="#">Guess</a></li>
                                            </ul>
                                            <a href="#" className="btn-link-02">+ More</a>
                                        </div>
                                    </div>
                                    <div className="tt-collapse open">
                                        <h3 className="tt-collapse-title">SALE PRODUCTS</h3>
                                        <div className="tt-collapse-content">
                                            <div className="tt-aside">
                                                <a className="tt-item" href="product.html">
                                                    <div className="tt-img">
                                                        <span className="tt-img-default"><img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="" /></span>
                                                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-01-02.jpg" alt="" /></span>
                                                    </div>
                                                    <div className="tt-content">
                                                        <h6 className="tt-title">Flared Shift Dress</h6>
                                                        <div className="tt-price">
                                                            <span className="sale-price">$14</span>
                                                            <span className="old-price">$24</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="tt-item" href="product.html">
                                                    <div className="tt-img">
                                                        <span className="tt-img-default"><img src="images/loader.svg" data-src="images/product/product-02.jpg" alt="" /></span>
                                                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-02-02.jpg" alt="" /></span>
                                                    </div>
                                                    <div className="tt-content">
                                                        <h6 className="tt-title">Flared Shift Dress</h6>
                                                        <div className="tt-price">
                                                            <span className="sale-price">$14</span>
                                                            <span className="old-price">$24</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="tt-item" href="product.html">
                                                    <div className="tt-img">
                                                        <span className="tt-img-default"><img src="images/loader.svg" data-src="images/product/product-03.jpg" alt="" /></span>
                                                        <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-03-02.jpg" alt="" /></span>
                                                    </div>
                                                    <div className="tt-content">
                                                        <h6 className="tt-title">Flared Shift Dress</h6>
                                                        <div className="tt-price">
                                                            <span className="sale-price">$14</span>
                                                            <span className="old-price">$24</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tt-collapse open">
                                        <h3 className="tt-collapse-title">TAGS</h3>
                                        <div className="tt-collapse-content">
                                            <ul className="tt-list-inline">
                                                <li><a href="#">Dresses</a></li>
                                                <li><a href="#">Shirts &amp; Tops</a></li>
                                                <li><a href="#">Polo Shirts</a></li>
                                                <li><a href="#">Sweaters</a></li>
                                                <li><a href="#">Blazers</a></li>
                                                <li><a href="#">Vests</a></li>
                                                <li><a href="#">Jackets</a></li>
                                                <li><a href="#">Outerwear</a></li>
                                                <li><a href="#">Activewear</a></li>
                                                <li><a href="#">Pants</a></li>
                                                <li><a href="#">Jumpsuits</a></li>
                                                <li><a href="#">Shorts</a></li>
                                                <li><a href="#">Jeans</a></li>
                                                <li><a href="#">Skirts</a></li>
                                                <li><a href="#">Swimwear</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tt-content-aside">
                                        <a href="listing-left-column.html" className="tt-promo-03">
                                            <img src="images/custom/listing_promo_img_07.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-9 col-xl-9">
                                    <div className="content-indent container-fluid-custom-mobile-padding-02">
                                        <div className="tt-filters-options">
                                            <h1 className="tt-title">
                                                WOMEN <span className="tt-title-total">(69)</span>
                                            </h1>
                                            <div className="tt-btn-toggle">
                                                <a href="#">FILTER</a>
                                            </div>
                                            <div className="tt-sort">
                                                <select>
                                                    <option value="Default Sorting">Default Sorting</option>
                                                    <option value="Default Sorting">Default Sorting 02</option>
                                                    <option value="Default Sorting">Default Sorting 03</option>
                                                </select>
                                                <select>
                                                    <option value="Show">Show</option>
                                                    <option value={9}>9</option>
                                                    <option value={16}>16</option>
                                                    <option value={32}>32</option>
                                                </select>
                                            </div>
                                            <div className="tt-quantity">
                                                <a href="#" className="tt-col-one" data-value="tt-col-one" />
                                                <a href="#" className="tt-col-two" data-value="tt-col-two" />
                                                <a href="#" className="tt-col-three" data-value="tt-col-three" />
                                                <a href="#" className="tt-col-four" data-value="tt-col-four" />
                                                <a href="#" className="tt-col-six" data-value="tt-col-six" />
                                            </div>
                                        </div>
                                        <div className="tt-product-listing row">
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-18.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-18-01.jpg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">VENDER</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star-half" />
                                                                <i className="icon-star-empty" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Name product</a></h2>
                                                        <div className="tt-price">
                                                            $124
                            </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-05.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-05-02.jpg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            $124
                            </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-01-02.jpg" alt="" /></span>
                                                        </a>
                                                        <div className="tt-countdown_box">
                                                            <div className="tt-countdown_inner">
                                                                <div className="tt-countdown" data-date="2018-12-08" data-year="Yrs" data-month="Mths" data-week="Wk" data-day="Day" data-hour="Hrs" data-minute="Min" data-second="Sec" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            <span className="new-price">$14</span>
                                                            <span className="old-price">$24</span>
                                                        </div>
                                                        <div className="tt-option-block">
                                                            <ul className="tt-options-swatch">
                                                                <li><a className="options-color tt-color-bg-01" href="#" /></li>
                                                                <li><a className="options-color tt-color-bg-02" href="#" /></li>
                                                            </ul>
                                                        </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-45.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-45-01.jpg" alt="" /></span>
                                                        </a>
                                                        <div className="tt-countdown_box">
                                                            <div className="tt-countdown_inner">
                                                                <div className="tt-countdown" data-date="2018-12-08" data-year="Yrs" data-month="Mths" data-week="Wk" data-day="Day" data-hour="Hrs" data-minute="Min" data-second="Sec" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            $124
                            </div>
                                                        <div className="tt-option-block">
                                                            <ul className="tt-options-swatch">
                                                                <li><a className="options-color tt-color-bg-03" href="#" /></li>
                                                                <li><a className="options-color tt-color-bg-04" href="#" /></li>
                                                                <li><a className="options-color tt-color-bg-05" href="#" /></li>
                                                            </ul>
                                                        </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-14.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-14-01.jpg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            $124
                            </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-15.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-15-01.jpg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            <span className="new-price">$14</span>
                                                            <span className="old-price">$24</span>
                                                        </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-08.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-08-02.jpg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            $24
                            </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-28.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-28-01.jpg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            $124
                            </div>
                                                        <div className="tt-option-block">
                                                            <ul className="tt-options-swatch">
                                                                <li><a className="options-color tt-color-bg-01" href="#" /></li>
                                                                <li><a className="options-color tt-color-bg-02" href="#" /></li>
                                                            </ul>
                                                        </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-19.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-19-01.jpg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            <span className="new-price">$14</span>
                                                            <span className="old-price">$24</span>
                                                        </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-25.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-25-01.jpg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            $124
                            </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-22.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-22-02.jpg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            $124
                            </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4 tt-col-item">
                                                <div className="tt-product thumbprod-center">
                                                    <div className="tt-image-box">
                                                        <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" data-tooltip="Quick View" data-tposition="left" />
                                                        <a href="#" className="tt-btn-wishlist" data-tooltip="Add to Wishlist" data-tposition="left" />
                                                        <a href="#" className="tt-btn-compare" data-tooltip="Add to Compare" data-tposition="left" />
                                                        <a href="product.html">
                                                            <span className="tt-img"><img src="images/loader.svg" data-src="images/product/product-23.jpg" alt="" /></span>
                                                            <span className="tt-img-roll-over"><img src="images/loader.svg" data-src="images/product/product-23-02.jpg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-row">
                                                            <ul className="tt-add-info">
                                                                <li><a href="#">T-SHIRTS</a></li>
                                                            </ul>
                                                            <div className="tt-rating">
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                                <i className="icon-star" />
                                                            </div>
                                                        </div>
                                                        <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                        <div className="tt-price">
                                                            124
                            </div>
                                                        <div className="tt-option-block">
                                                            <ul className="tt-options-swatch">
                                                                <li><a className="options-color tt-color-bg-03" href="#" /></li>
                                                                <li><a className="options-color tt-color-bg-04" href="#" /></li>
                                                                <li><a className="options-color tt-color-bg-05" href="#" /></li>
                                                            </ul>
                                                        </div>
                                                        <div className="tt-product-inside-hover">
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">ADD TO CART</a>
                                                            </div>
                                                            <div className="tt-row-btn">
                                                                <a href="#" className="tt-btn-quickview" data-toggle="modal" data-target="#ModalquickView" />
                                                                <a href="#" className="tt-btn-wishlist" />
                                                                <a href="#" className="tt-btn-compare" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center tt_product_showmore">
                                            <a href="#" className="btn btn-border">LOAD MORE</a>
                                            <div className="tt_item_all_js">
                                                <a href="#" className="btn btn-border01">NO MORE ITEM TO SHOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="tt-footer-default tt-color-scheme-02">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <div className="tt-newsletter-layout-01">
                                        <div className="tt-newsletter">
                                            <div className="tt-mobile-collapse">
                                                <h4 className="tt-collapse-title">
                                                    BE IN TOUCH WITH US:
                        </h4>
                                                <div className="tt-collapse-content">
                                                    <form id="newsletterform" className="form-inline form-default" method="post" noValidate="novalidate" action="#">
                                                        <div className="form-group">
                                                            <input type="text" name="email" className="form-control" placeholder="Enter your e-mail" />
                                                            <button type="submit" className="btn">JOIN US</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-auto">
                                    <ul className="tt-social-icon">
                                        <li><a className="icon-g-64" target="_blank" href="http://www.facebook.com/" /></li>
                                        <li><a className="icon-h-58" target="_blank" href="http://www.facebook.com/" /></li>
                                        <li><a className="icon-g-66" target="_blank" href="http://www.twitter.com/" /></li>
                                        <li><a className="icon-g-67" target="_blank" href="http://www.google.com/" /></li>
                                        <li><a className="icon-g-70" target="_blank" href="https://instagram.com/" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tt-footer-col tt-color-scheme-01">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-2 col-xl-3">
                                    <div className="tt-mobile-collapse">
                                        <h4 className="tt-collapse-title">
                                            CATEGORIES
                    </h4>
                                        <div className="tt-collapse-content">
                                            <ul className="tt-list">
                                                <li><a href="listing-collection.html">Women</a></li>
                                                <li><a href="listing-collection.html">Men</a></li>
                                                <li><a href="listing-collection.html">Accessories</a></li>
                                                <li><a href="listing-collection.html">Shoes</a></li>
                                                <li><a href="listing-collection.html">New Arrivals</a></li>
                                                <li><a href="listing-collection.html">Clearence</a></li>
                                            </ul>
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
                <a href="#" className="tt-back-to-top">BACK TO TOP</a>
                {/* modal (AddToCartProduct) */}
                <div className="modal  fade" id="modalAddToCartProduct" tabIndex={-1} role="dialog" aria-label="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear" /></button>
                            </div>
                            <div className="modal-body">
                                <div className="tt-modal-addtocart mobile">
                                    <div className="tt-modal-messages">
                                        <i className="icon-f-68" /> Added to cart successfully!
                  </div>
                                    <a href="#" className="btn-link btn-close-popup">CONTINUE SHOPPING</a>
                                    <a href="shopping_cart_02.html" className="btn-link">VIEW CART</a>
                                    <a href="page404.html" className="btn-link">PROCEED TO CHECKOUT</a>
                                </div>
                                <div className="tt-modal-addtocart desctope">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <div className="tt-modal-messages">
                                                <i className="icon-f-68" /> Added to cart successfully!
                      </div>
                                            <div className="tt-modal-product">
                                                <div className="tt-img">
                                                    <img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="" />
                                                </div>
                                                <h2 className="tt-title"><a href="product.html">Flared Shift Dress</a></h2>
                                                <div className="tt-qty">
                                                    QTY: <span>1</span>
                                                </div>
                                            </div>
                                            <div className="tt-product-total">
                                                <div className="tt-total">
                                                    TOTAL: <span className="tt-price">$324</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <a href="#" className="tt-cart-total">
                                                There are 1 items in your cart
                        <div className="tt-total">
                                                    TOTAL: <span className="tt-price">$324</span>
                                                </div>
                                            </a>
                                            <a href="#" className="btn btn-border btn-close-popup">CONTINUE SHOPPING</a>
                                            <a href="shopping_cart_02.html" className="btn btn-border">VIEW CART</a>
                                            <a href="#" className="btn">PROCEED TO CHECKOUT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modal (quickViewModal) */}
                <div className="modal  fade" id="ModalquickView" tabIndex={-1} role="dialog" aria-label="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear" /></button>
                            </div>
                            <div className="modal-body">
                                <div className="tt-modal-quickview desctope">
                                    <div className="row">
                                        <div className="col-12 col-md-5 col-lg-6">
                                            <div className="tt-mobile-product-slider arrow-location-center">
                                                <div><img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="" /></div>
                                                <div><img src="images/loader.svg" data-src="images/product/product-01-02.jpg" alt="" /></div>
                                                <div><img src="images/loader.svg" data-src="images/product/product-01-03.jpg" alt="" /></div>
                                                <div><img src="images/loader.svg" data-src="images/product/product-01-04.jpg" alt="" /></div>
                                                <div>
                                                    <div className="tt-video-block">
                                                        <a href="#" className="link-video" />
                                                        <video className="movie" src="video/video.mp4" poster="video/video_img.jpg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-7 col-lg-6">
                                            <div className="tt-product-single-info">
                                                <div className="tt-add-info">
                                                    <ul>
                                                        <li><span>SKU:</span> 001</li>
                                                        <li><span>Availability:</span> 40 in Stock</li>
                                                    </ul>
                                                </div>
                                                <h2 className="tt-title">Cotton Blend Fleece Hoodie</h2>
                                                <div className="tt-price">
                                                    <span className="new-price">$29</span>
                                                    <span className="old-price" />
                                                </div>
                                                <div className="tt-review">
                                                    <div className="tt-rating">
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star" />
                                                        <i className="icon-star-half" />
                                                        <i className="icon-star-empty" />
                                                    </div>
                                                    <a href="#">(1 Customer Review)</a>
                                                </div>
                                                <div className="tt-wrapper">
                                                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </div>
                                                <div className="tt-swatches-container">
                                                    <div className="tt-wrapper">
                                                        <div className="tt-title-options">SIZE</div>
                                                        <form className="form-default">
                                                            <div className="form-group">
                                                                <select className="form-control">
                                                                    <option>21</option>
                                                                    <option>25</option>
                                                                    <option>36</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="tt-wrapper">
                                                        <div className="tt-title-options">COLOR</div>
                                                        <form className="form-default">
                                                            <div className="form-group">
                                                                <select className="form-control">
                                                                    <option>Red</option>
                                                                    <option>Green</option>
                                                                    <option>Brown</option>
                                                                </select>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="tt-wrapper">
                                                        <div className="tt-title-options">TEXTURE:</div>
                                                        <ul className="tt-options-swatch options-large">
                                                            <li><a className="options-color" href="#">
                                                                <span className="swatch-img">
                                                                    <img src="images/loader.svg" data-src="images/custom/texture-img-01.jpg" alt="" />
                                                                </span>
                                                                <span className="swatch-label color-black" />
                                                            </a></li>
                                                            <li className="active"><a className="options-color" href="#">
                                                                <span className="swatch-img">
                                                                    <img src="images/loader.svg" data-src="images/custom/texture-img-02.jpg" alt="" />
                                                                </span>
                                                                <span className="swatch-label color-black" />
                                                            </a></li>
                                                            <li><a className="options-color" href="#">
                                                                <span className="swatch-img">
                                                                    <img src="images/loader.svg" data-src="images/custom/texture-img-03.jpg" alt="" />
                                                                </span>
                                                                <span className="swatch-label color-black" />
                                                            </a></li>
                                                            <li><a className="options-color" href="#">
                                                                <span className="swatch-img">
                                                                    <img src="images/loader.svg" data-src="images/custom/texture-img-04.jpg" alt="" />
                                                                </span>
                                                                <span className="swatch-label color-black" />
                                                            </a></li>
                                                            <li><a className="options-color" href="#">
                                                                <span className="swatch-img">
                                                                    <img src="images/loader.svg" data-src="images/custom/texture-img-05.jpg" alt="" />
                                                                </span>
                                                                <span className="swatch-label color-black" />
                                                            </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tt-wrapper">
                                                    <div className="tt-row-custom-01">
                                                        <div className="col-item">
                                                            <div className="tt-input-counter style-01">
                                                                <span className="minus-btn" />
                                                                <input type="text" defaultValue={1} size={5} />
                                                                <span className="plus-btn" />
                                                            </div>
                                                        </div>
                                                        <div className="col-item">
                                                            <a href="#" className="btn btn-lg"><i className="icon-f-39" />ADD TO CART</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modalVideoProduct */}
                <div className="modal fade" id="modalVideoProduct" tabIndex={-1} role="dialog" aria-label="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-video">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear" /></button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-video-content">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modal (ModalSubsribeGood) */}
                <div className="modal  fade" id="ModalSubsribeGood" tabIndex={-1} role="dialog" aria-label="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xs">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon icon-clear" /></button>
                            </div>
                            <div className="modal-body">
                                <div className="tt-modal-subsribe-good">
                                    <i className="icon-f-68" /> You have successfully signed!
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Produk;
