import React, { Component } from 'react';

import './Footer.css'

class Footer extends Component {

  // render nav
  render() {
    return (
      <div>
            <nav id="footerBody" className="uk-navbar-container  uk-text-center uk-visible@m" uk-navbar='true' uk-navbar="mode: click">
        
                  <div id="leftfooter" className="uk-width-1-3   uk-visible@m">
                        <a style={{marginTop:'72px'}} className='uk-align-left uk-margin-medium-left' target='_blank' href = "https://github.com/willis5490"><i class="fab fa-github-square fa-2x footheaders"></i></a>
                        <a style={{marginTop:'72px'}} className='uk-align-left ' target='_blank' href = "https://www.linkedin.com/company/35639910/admin/"><i class="fab fa-2x fa-linkedin footheaders"></i></a>                       
                  </div>
                  <div id='centerfooter' className="uk-width-1-3 uk-text-center uk-visible@m footletters ">
                        <h4 id='copyfooter' className='footheaders '>© 2019 U2D Web Solutions LLC. <br></br> All rights reserved.</h4>
                  </div>
                  <div id='rightfooter' className="uk-width-1-3 uk-text-center uk-visible@m footletters ">
                        <img className='uk-align-right uk-margin-medium-top uk-margin-medium-right '   id="footer-logo" src="../images/logo-big.png"></img>                        
                  </div>
            
            </nav>


            {/* mobile view */}
            <nav id="secondfooter" className="uk-navbar-container uk-text-center uk-align-center uk-hidden@m" uk-navbar='true' uk-navbar="mode: click">
            <div className="uk-hidden@m">
                  <div id="leftmobilefooter" className="uk-width-1-1 uk-remove-margin-bottom uk-text-center uk-align-center">
                  <img id="footer-logo" src="../images/logo-big.png"></img>
                  <h4 style={{color:'black'}}  className=' uk-margin-remove-top uk-margin-small-bottom '><a className='footheaders' id='copywritemobile' href="tel:401-523-0131">Call Us Now!</a></h4>
                  {/* <a style={{color:'black'}} id='copywritemobile' className='uk-margin-remove-top uk-margin-remove-bottom' href='/Contact'>Email Us</a> */}
            </div>
            <div id='rightmobilefooter' className="uk-width-1-1 uk-text-center uk-margin-remove-top">
                        <a  target='_blank' href = "https://www.linkedin.com/company/35639910/admin/"><i class="fab fa-linkedin fa-2x blop uk-margin-remove-top"></i></a>
                        <a target="_blank" href = "https://github.com/willis5490"><i class="fab blop fa-github-square fa-2x "></i></a>     
                  
            </div>
            </div>
            
            </nav>
      </div>
    );
  }
}


export default Footer;
