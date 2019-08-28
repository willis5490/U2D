import React, { Component } from 'react';
import '@zendeskgarden/css-buttons';
import './Header.css'

class Header extends Component {

  // render nav
  render() {
    return (
        <div>      
          <div  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
       <nav id = 'headerBody' className="uk-navbar-container uk-margin uk-margin-auto uk-margin-auto-vertical" uk-navbar='true' uk-navbar="mode: click" >
            <div className="uk-navbar-left uk-visible@m ">
                <ul className="uk-navbar-nav">
                    <li className=""><a href = "/"><img id='logo-nav' src = "../images/logo-big.png" alt=''></img></a></li>
                    
                </ul>
            </div>
            <div className="uk-navbar-center uk-visible@m">
            
                <ul id="middlenav" className="uk-navbar-nav">
                    <li className=""><a href="/">Home</a></li>
                    <li>
                      <a href="#">Services</a>
                      <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                              <li class=""><a href="/Website"><span uk-icon="laptop"></span> Build a Website</a></li>
                              <li><a href="/Seo"><span uk-icon="social"></span> SEO/Social Media Services</a></li>
                              <li><a href="/Consulting"><span uk-icon="commenting"></span> Consulting Services</a></li>
                              <li><a href="/Branding"><span uk-icon="thumbnails"></span> Brand Yourself</a></li>                              
                          </ul>
                      </div>
                    </li>
                    <li className=""><a href="/About">About</a></li>
                    {/* <li className=""><a href="/Website#websiteCarousel">Our Work</a></li> */}
                    <li className=""><a href="/Contact">Contact</a></li>
                     
                </ul>
            </div>

            {/* mobile view */}
            <div className="uk-hidden@m">
                <a style={{color:'#6A829C'}} id="mobileMenu" uk-icon="icon: menu; ratio: 2.5" uk-toggle="target: #offcanvas-nav-primary"></a>
                    <div className="uk-offcanvas-content">
                        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                            <div className="uk-offcanvas-bar">
                                <ul className="uk-nav uk-nav-default">
                                    <li className="uk-nav-header">
                                        <a className="uk-offcanvas-close" uk-close>X</a>
                                        <img id='logoMobile' className="uk-margin-small-right" src="../images/logo-big.png" width="100" height="75" alt='' ></img>
                                    </li>
                                    <hr className='' style={{width:'36%', paddingLeft:'15px', borderBottom:'20px solid #6A829C' }}></hr>

                                    <li className="mobileMenuText"><a href="/"><span className='uk-margin-small-right' uk-icon="home"></span>Home</a></li>
                                    {/* <li className="mobileMenuText"><a href="/Website#websiteCarousel"><span className='uk-margin-small-right' uk-icon="folder"></span>Our Work</a></li> */}
                                    <li className="mobileMenuText"><a href="/Website"><span className='uk-margin-small-right' uk-icon="laptop"></span>Build a Website</a></li>
                                    <li className="mobileMenuText"><a href="/Seo"><span className='uk-margin-small-right' uk-icon="social"></span>SEO/Social Media Services</a></li>
                                    <li className="mobileMenuText"><a href="/Consulting"><span className='uk-margin-small-right' uk-icon="commenting"></span>Consulting Services</a></li>
                                    <li className="mobileMenuText"><a href="/Branding"><span className='uk-margin-small-right' uk-icon="thumbnails"></span>Brand Yourself</a></li>
                                    <li className="mobileMenuText"><a href="/About"><span className='uk-margin-small-right' uk-icon="info"></span>About</a></li>
                                    <li className="mobileMenuText"><a href="/Contact"><span className='uk-margin-small-right' uk-icon="pencil"></span>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="uk-navbar-center uk-hidden@m">
                <img id='mobileLogo' className="" src="../images/logo-big.png" width="60" height="60" alt=''></img>
            </div>
        </nav>
      </div>
        </div>
    );
  }
}


export default Header;