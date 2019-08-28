import React, { Component } from 'react';

import './Branding.css'



class Branding extends Component {

  // render nav
  render() {
    return (
        <div >
          <div class="serviceFirstSection uk-height-expand uk-animation-scale-up  uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-visible@m " uk-grid='true' >
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <div className='uk-container'>
                      <h1 id='brandingH1' className='uk-text-center'>Need a logo?</h1>
                      <h2 id='brandingH2' className=' servicetext uk-text-center'>We work side by side with some of the best UX and graphic designers</h2>
                      <div className='uk-text-center' >
                        <a href='/Contact'><button id='' className="c-btn c-btn--primary uk-margin-medium-top  c-btn--pill homeButtons ">Lets chat !</button></a>
                      </div>
                    </div>
                </div>
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical ">
                  <   img className='servicesMainPictures'  src='../images/branding.jpg'></img>
                </div>

            </div>


            {/* mobile view */}

            <div  class=" serviceFirstSection uk-animation-scale-up uk-text-center  uk-height-expand uk-background-cover uk-margin-xlarge-top uk-overflow-hidden uk-light uk-flex uk-flex-top uk-hidden@m " uk-grid='true'>
                <div class="uk-child-width-1-1@xs uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <div className='uk-container'>
                          <h1 id='brandingH1' className='uk-text-center'>Need a logo?</h1>
                          <h2 id='brandingH2' className='uk-text-center servicetext'>We work side by side with some of the best UX and graphic designers</h2>
                          <img className='servicesMainPictures uk-margin-large-bottom'  src='../images/branding.jpg'></img>
                          
                    </div>
                </div>
                <div className='uk-align-center' >
                  <a href='/Contact'><button id='' className="c-btn c-btn--primary uk-text-center c-btn--pill homeButtons "><span uk-icon="arrow-right">Contact Us Here</span></button></a>
              </div>

            </div>

            {/* end */}


      </div>
    );
  }
}


export default Branding;
