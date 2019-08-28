import React, { Component } from 'react';

import './Consulting.css'



class Consulting extends Component {

  // render nav
  render() {
    return (
        <div>
          <div id='' class="serviceFirstSection uk-animation-scale-up uk-transform-origin-bottom-left uk-height-expand uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-visible@m " uk-grid='true' >
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <img className='servicesMainPictures'  src='../images/consultingMainPic.jpg'></img>
                </div>
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical ">
                    <div className='uk-container'>
                        <h1 id=''>Need advice?</h1>
                        <h2 id='consultingH1'>We are here to help</h2>
                    </div>
                    
                </div>
            </div>


            {/* mobile view */}

            <div id='' class="serviceFirstSection uk-animation-scale-up uk-transform-origin-bottom-left uk-height-expand uk-background-cover uk-margin-xlarge-top  uk-margin-xlarge-bottom uk-overflow-hidden uk-light uk-flex uk-flex-top uk-hidden@m " uk-grid='true'>
                <div class="uk-width-1-1@xs uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <h1 id='consultingHeadies'>Need advice?</h1>
                    <h2 id='consultingH1' className='uk-margin-xlarge-bottom'>We are here to help</h2>
                    <img className='servicesMainPictures'  src='../images/consultingMainPic.jpg'></img>
                </div>
            
            </div>

            {/* end */}
            <div id='landingLinkConsulting'></div>

            <div id='consultingSecondSection'>
            <div className='uk-container '>
          <h1 id='consultingHeadies' className="uk-text-center uk-margin-large-bottom uk-margin-large-top uk-overflow-hidden" uk-parallax="y: 100,100,0; viewport: 0.5;" >Not sure how the web works or how to market your business?</h1>

           <div id='' className="uk-text-center uk-text-center uk-margin-auto uk-overflow-hidden  uk-margin-auto-vertical uk-visible@m" uk-grid='true'>
          <div uk-parallax="x: 800,0; opacity: 0,0.2,1; viewport: 0.4;" className="uk-overflow-hidden uk-width-1-2 uk-margin-large-bottom  consultingSecondPart">
              <div className="uk-card uk-overflow-hidden uk-card-body uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h2 className='homecardHeader'>Sit down and chat with us</h2>
                <i class="fas fa-comments fa-2x"></i>
                <ul className='consultingLists'>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Lets grab a beer</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Talk about your goals as a business</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Figure out your target clientele</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Discuss how to create a strong online presence</li>
                </ul>
              </div>
          </div>
          <div uk-parallax="x: -800,0; opacity: 0,0.2,1; viewport: 0.4;" className="uk-overflow-hidden uk-width-1-2 uk-margin-large-bottom consultingSecondPart">
              <div className="uk-card uk-overflow-hidden uk-card-body uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h2 className='homecardHeader'>Then lets make a plan</h2>
                <i class="fas fa-user-edit fa-2x"></i>
                <ul className='consultingLists '>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Lets design and build your website</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Figure out a 6 month plan to bring in traffic with SEO</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Add tools like Google Analytics to track business leads</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Discuss further ideas about the growth of your business</li>
                </ul>
              </div>
          </div>
          </div>

          {/*  Mobile Start */}

           <div id='' className="uk-text-center uk-text-center uk-overflow-hidden  uk-margin-auto uk-margin-auto-vertical uk-hidden@m" uk-grid='true'>
          <div uk-parallax="x: 800,800,0; opacity: 0,0.2,1; viewport: 0.4;" className="uk-overflow-hidden uk-width-1-1 consultingSecondPart">
              <div className="uk-card uk-card-body uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h2 className='homecardHeader'>Sit down and chat with us</h2>
              <i class="fas fa-comments fa-2x"></i>
                <ul className='consultingLists'>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Lets grab a beer</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Talk about your goals as a business</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Figure out your target clientele</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Discuss how to create a strong online presence</li>
                </ul>
              </div>
          </div>
          <div uk-parallax="x: -800,-800,0; opacity: 0,0.2,1; viewport: 0.4;" className="uk-overflow-hidden uk-width-1-1 consultingSecondPart">
              <div className="uk-card uk-card-body uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h2 className='homecardHeader'>Then lets make a plan</h2>
                <i class="fas fa-user-edit fa-2x"></i>
                <ul className='consultingLists'>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Lets design and build your website</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Figure out a 6 month plan to bring in traffic with SEO</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Add tools like Google Analytics to track business leads</li>
                  <li><span class="uk-margin-small-right" uk-icon="icon:  triangle-right"></span>Discuss further ideas about the growth of your business</li>
                </ul>
              </div>
          </div>
          </div>
          </div>
          </div>

          {/* end */}

          <div class="uk-section uk-section-default uk-overflow-hidden  uk-margin-large-top consultingBottomScetion">
                    <div class="uk-container uk-text-center">
                    <div id=''  class="uk-overflow-hidden uk-grid-match uk-child-width-1-3@m uk-text-center" uk-grid='true'>
                        <div  uk-parallax="opacity: 0.5,1; scale: .5,1,1; viewport: 0.5;">
                            <img className='seoBottomPics' src='../images/consultingBottomPic1.jpg'></img>          
                        </div>
                        <div  uk-parallax="opacity: 0.5,1; scale: .5,1,1; viewport: 0.5;">
                            <img className='seoBottomPics'  src='../images/consultingBottomPic4.jpg'></img>
                        </div>
                        <div  uk-parallax="opacity: 0.5,1; scale: .5,1,1; viewport: 0.5;">
                            <img className='seoBottomPics'  src='../images/consultingBottomPic2.jpg'></img>
                        </div>
                    </div>                
                </div>
            </div>

            <div div class="uk-width-1-1@s uk-text-center uk-margin-auto uk-margin-auto-vertical">
                <a href='/Contact'><button  className="c-btn c-btn--primary uk-margin-xlarge-bottom uk-text-center c-btn--pill uk-align-center homeButtons "><span uk-icon="arrow-right">Lets Chat</span></button></a>
            </div>
      </div>
    );
  }
}


export default Consulting;