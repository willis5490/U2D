import React, { Component } from 'react';

import './Seo.css'



class Seo extends Component {

  // render nav
  render() {
    return (
        <div >
           <div  class="serviceFirstSection uk-animation-scale-up uk-transform-origin-bottom-right uk-height-expand uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-visible@m " uk-grid='true' >
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <img className='servicesMainPictures' src='../images/growthImage.jpg'></img>
                </div>
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical ">
                    <h1 id='seoHeader'>Get the best SEO!</h1>
                    <h3 id='seoHeaderPara'>We use all the latest tools to track data <br></br> in order to bring you more customers</h3>
                </div>
            </div>


            {/* mobile view */}

            <div class="serviceFirstSection uk-animation-scale-up uk-transform-origin-bottom-right uk-height-expand uk-background-cover uk-margin-xlarge-top uk-margin-xlarge-bottom uk-overflow-hidden uk-light uk-flex uk-flex-top uk-hidden@m " uk-grid='true'>
                <div class="uk-width-1-1@xs uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <h1 id='seoHeader'>Get the best SEO in Denver</h1>
                    <h3 id='seoHeaderPara'>We use all the latest tools to track data in order to bring you more customers</h3>
                    <img className='servicesMainPictures'  src='../images/seoPic.jpg'></img>
                </div>

            </div>

            {/* end */}

              <div class="uk-section uk-section-default SeoSections1">
                    <div class="uk-container uk-text-center uk-height-expand">

                    <h1 className='uk-margin-large-bottom seoServiceH1 uk-overflow-hidden' uk-parallax="opacity: 0,1; viewport: 0.3;">SEO Services</h1>

                    <div class=" uk-overflow-hidden uk-grid-match uk-child-width-1-3@m uk-text-center" uk-grid='true'>
                        <div>
                            <h3 uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><u>Local SEO</u></h3>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Optimize your website for greater search engine visibility locally</p>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Create a detailed 6 month plan surrounding your business goals</p>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Be the first business to show up on Google Maps</p>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Grow your business with organic traffic</p>
                        </div>

                        <div>
                            <h3 uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><u>Enterprise SEO</u></h3>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Optizmize your website for greater search engine visibility nationally</p>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Drive in new clients and expand your brand</p>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Collect data from your clients to help you grow faster</p>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Stengthen your credibility increasing your rankings on <a href='https://www.google.com/'>Google</a> and <a href='https://www.bing.com/'>Bing</a></p>
                        </div>
                        <div>
                            <h3 uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><u>SEO Penalty Recovery</u></h3>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Fix any unethical SEO practices you have been penalized for</p>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Use "White Hat" practices to bring back your reputation</p>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Secure your website to prevent any hackers</p>
                            <p uk-parallax=" scale: 0.1,1; opacity: 0,0.2,1; viewport: 0.3;"><i class="fas fa-yin-yang"></i> Reduce your SEO spam</p>
                        </div>
                    </div>
                </div>
            </div>



            <div class="uk-section uk-section-default SeoSections2">
                    <div class="uk-container uk-text-center">

                    <h1 className='uk-margin-large-bottom uk-overflow-hidden seoServiceH1'  uk-parallax="y: 200,200,0; viewport: 0.5;">Social Media Marketing</h1>

                    <div id='seoBottomSection'  class="uk-grid-match uk-child-width-1-3@m uk-text-center uk-overflow-hidden" uk-grid='true'>
                        <div uk-parallax="x: -800,-800,0; viewport: 0.4;">
                            <a href=''><h3><span  class="uk-icon-button" uk-icon="icon:facebook"></span><b> Facebook</b></h3></a>
                            <img className='seoBottomPics' src='../images/facebookSocial.jpg'></img>
                            <p>72% of Americans use Facebook</p>
                            <p><span  class="uk-margin-small-right" uk-icon="icon:social"></span>Create attention with our marketing techniques</p>
                        </div>
                        <div   uk-parallax="y: 800,800,0; viewport: 0.4;">
                            <a href=''><h3><span  class="uk-icon-button" uk-icon="youtube"></span><b> YouTube</b></h3></a>
                            <img className='seoBottomPics'  src='../images/youtubeSocial2.jpg'></img>
                            <p>75% of Americans use YouTube</p>
                            <p><span  class="uk-margin-small-right" uk-icon="icon:social"></span>Create more opportunity for growth</p>
                        </div>
                        <div uk-parallax="x: 800,800,0; viewport: 0.4;">
                            <a href=''><h3><span  class="uk-icon-button" uk-icon="instagram"></span><b> Instagram</b></h3></a>
                            <img className='seoBottomPics'  src='../images/instagramSocial.jpg'></img>
                            <p>37% of Americans use Instagram</p>
                            <p><span  class="uk-margin-small-right" uk-icon="icon:social"></span>Create a strong reputation clients respect</p>
                        </div>
                    </div>



                </div>
            </div>
            <div div class="uk-width-1-1@s uk-text-center uk-margin-auto uk-margin-auto-vertical">
                <a href='/Contact'><button  className="c-btn c-btn--primary uk-margin-xlarge-bottom uk-text-center c-btn--pill uk-align-center homeButtons "><span uk-icon="arrow-right">Expand Your Business Today !  </span></button></a>
            </div>
      </div>
    );
  }
}


export default Seo;
