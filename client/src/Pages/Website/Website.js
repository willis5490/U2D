import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './Website.css'



class Website extends Component {

  // render nav
  render() {
    return (

    <div>

        <div id='websiteFirstSection'  class="serviceFirstSection uk-animation-scale-up uk-height-expand uk-background-cover  uk-overflow-hidden uk-light uk-flex uk-flex-top uk-visible@m " uk-grid='true' >
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <div className='uk-container'>
                        <h1 id='websiteheader'>
                        Designing and building websites 
                        using the best technologies
                        is what we do best 

                        </h1>
                        <h4 id='websiteTopInfo' >
                        Break free of templates! Unlike <a className='websitelinks' target='_blank' href='https://www.squarespace.com/'>Squarespace </a> 
                        and <a className='websitelinks'  target='_blank' href='https://www.wix.com/'>Wix</a>, we are here to help promote your business by creating a website 
                        that is distinctively yours. Our experts will sit down with you to discuss 
                        your company’s unique goals and make you to stand out from your competitors. Let us build a website that advances your business while reflecting what 
                        makes it unique.
                        </h4>
                    </div>
                </div>
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical ">
                    <img className='servicesMainPictures'  src='../images/websitePic.jpg'></img>
                </div>
            </div>

            {/* mobile view */}
                <div className='uk-container uk-overflow-hidden'>
                    <div class="serviceFirstSection uk-animation-scale-up uk-height-expand uk-background-cover uk-margin-xlarge-top  uk-margin-xlarge-bottom uk-overflow-hidden uk-light uk-flex uk-flex-top uk-hidden@m " uk-grid='true'>
                        <div class="uk-width-1-1@xs uk-text-center uk-margin-auto uk-margin-auto-vertical">
                            <h1 id='websiteheader'>
                                Designing and building websites 
                                using the best technologies
                                is what we do best 

                            </h1>
                            <h4 id='websiteTopInfo' className='uk-margin-xlarge-bottom'>
                                Break free of templates! Unlike <a className='websitelinks' target='_blank' href='https://www.squarespace.com/'>Squarespace </a> 
                                and <a className='websitelinks'  target='_blank' href='https://www.wix.com/'>Wix</a>, we are here to help promote your business by creating a website 
                                that is distinctively yours. Our experts will sit down with you to discuss 
                                your company’s unique goals and make you to stand out from your competitors. Let us build a website that advances your business while reflecting what 
                                makes it unique.
                            </h4>
                            <img className='servicesMainPictures'  src='../images/websitePic.jpg'></img>
                        </div>

                    </div>
                </div>

            {/* end */}


        {/* <div id='websiteCarousel' >
          <div className='uk-container'>
                <div className='uk-height-expand uk-width-1-1@m  uk-margin-auto uk-margin-auto-vertical '>
                <h1 className=' uk-margin-large-bottom uk-text-center uk-margin-large-top uk-overflow-hidden' uk-parallax="opacity: 0.5,1; scale: .5,1,1; viewport: 0.5;" >Our Work</h1> */}

                
                  {/* <div  className='uk-overflow-hidden' >
              
                  <AliceCarousel autoPlay={false}  >
                    <a target='_blank' href='https://www.elevatemassageco.com/'><img src="../images/elevatemassage.png"  className="carouselImages" /> </a>                   
                    <a target='_blank' href='https://www.herbaltranquilitymarijuanamassage.com/'><img src="../images/HerbalTranquility.png"  className="carouselImages" /> </a>  
                    <a target='_blank' href='https://www.bankshotmusic.com/'><img src="../images/bankshotWebiste.png"  className="carouselImages" /> </a>  
                   
                    </AliceCarousel>
                    <p style={{marginTop:'-20px'}} className='uk-text-center'><span className='uk-margin-small-right' uk-icon="icon: info"></span>CLICK IMAGE TO VISIT WEBSITE<span className='uk-margin-small-left' uk-icon="icon: info"></span></p>
                  </div>
                </div>

                <div div class="uk-width-1-1@s uk-overflow-hidden uk-text-center uk-margin-auto uk-margin-auto-vertical">
                      <a href='/Contact'><button  className="c-btn c-btn--primary uk-margin-xlarge-bottom uk-text-center c-btn--pill uk-align-center homeButtons "><span uk-icon="arrow-right">Contact Us For a Free Quote  </span></button></a>
                  </div>
            </div>
          </div> */}




            <div id='websiteMiddleSection'>
              <div className='uk-container uk-overflow-hidden'>
                <h1 uk-parallax="y: 300,0; viewport: 0.5;" className='uk-overflow-hidden uk-text-center uk-margin-large-top uk-margin-large-bottom'>Technologies we use</h1>
                <div class="uk-child-width-1-2@s uk-grid-match  uk-margin-xlarge-bottom" uk-grid='true'>
                    <div>
                        <div class="uk-card uk-card-default uk-card-hover  websiteCards uk-card-body uk-overflow-hidden" uk-parallax="x: -800,-800,0; viewport: 0.4;">
                            <h3 class="uk-card-title uk-text-center">MongoDB</h3>
                            <ul>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>Maintain your database with ease!</li>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>Build large volumes of structured, semi-structured, and unstructured data.</li>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>Satisfy your all of your clients needs without making them wait with <a href='https://graphql.org/'>GraphQL</a> and MongoDB.</li>
                                <a target='_blank' href='https://www.mongodb.com/what-is-mongodb'><li><span class="uk-margin-small-right" uk-icon="icon: link"></span><b>More info</b></li></a>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-hover websiteCards uk-card-body uk-overflow-hidden"  uk-parallax="x: 800,800,0; viewport: 0.4;">
                            <h3 class="uk-card-title uk-text-center">Express.js</h3>
                            <ul>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>Easy to integrate into other technologies.</li>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>Works great with cloud servers.</li>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>Can create stable API's with Node.js</li>
                                <a target='_blank' href='https://expressjs.com/'><li><span class="uk-margin-small-right" uk-icon="icon: link"></span><b>More info</b></li></a>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-hover websiteCards uk-card-body uk-overflow-hidden" uk-parallax="x: -800,-800,0; viewport: 0.4;">
                            <h3 class="uk-card-title uk-text-center">React.js</h3>
                            <ul>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>Creates a virtual DOM (Document Object Model) for lightning fast renders.</li>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>Guaranteed stable code for less maintenance.</li>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>SEO friendly.</li>
                                <a target='_blank' href='https://reactjs.org/'><li><span class="uk-margin-small-right" uk-icon="icon: link"></span><b>More info</b></li></a>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-hover websiteCards uk-card-body uk-overflow-hidden" uk-parallax="x: 800,800,0; viewport: 0.4;">
                            <h3 class="uk-card-title uk-text-center">Node.js</h3>
                            <ul>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>Built with Javascript (the fastest programming language for the web).</li>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>Perfect for real time applications</li>
                                <li><span class="uk-margin-small-right" uk-icon="icon: info"></span>10X faster than Ruby on Rails</li>
                                <a target='_blank' href='https://nodejs.org/en/about/'><li><span class="uk-margin-small-right" uk-icon="icon: link"></span><b>More info</b></li></a>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
            </div>



            <div  id='websiteBottomSection' >
              <div className='uk-container'>
                      <h1 id='hostingHeader' uk-parallax="y: 300,300,0; viewport: 0.5;"  className='uk-overflow-hidden  uk-text-center uk-margin-large-top uk-margin-large-bottom'>Hosting</h1>
                      <div uk-parallax="y: 300,300,0; viewport: 0.5;"  className="uk-overflow-hidden uk-height-large uk-background-cover uk-visible@s  uk-flex uk-flex-top websiteSections" >
                          <div class="uk-width-1-2@xs uk-text-center uk-margin-auto ">
                              <h1><u>Get Cloud Hosting</u></h1>
                              <img className='websiteBottomPic' src='../images/cloudServer.jpg'></img>

                          </div>
                          <div class="uk-width-1-2@xs uk-text-center uk-margin-auto ">
                              <h1><u>Cloud Hosting Benefits</u></h1>
                              <ul className='uk-margin-auto uk-margin-auto-vertical websiteCloudText'>
                              <li className='websiteCloudText'><span uk-icon="icon:  check; ratio: 1.5"></span><b>Increase up-time and load speeds</b></li>
                              <li className='websiteCloudText'><span uk-icon="icon:  check; ratio: 1.5"></span><b>More secure than other hosting</b></li>
                              <li className='websiteCloudText'><span uk-icon="icon:  check; ratio: 1.5"></span><b>Easy Scalability</b></li>
                              <li className='websiteCloudText'><span uk-icon="icon:  check; ratio: 1.5"></span><b>Gives you the competitive edge</b></li>
                              <a target='_blank' href='https://www.globaldots.com/cloud-computing-benefits/'><li><span uk-icon="icon:  link; ratio: 1.5"></span><b>More info here</b></li></a>
                              </ul>
                          </div>

                      </div> 


                          {/* mobile */}
                      <div uk-parallax="y: 300,300,0; viewport: 0.5;" className="uk-height-expand uk-background-cover  uk-hidden@s  uk-flex uk-flex-top websiteSections" uk-grid='true'>
                          <div  class="uk-width-1-1@xs uk-overflow-hidden uk-text-center uk-margin-auto ">
                              <h1 className='websiteClouds'><u>Get Cloud Hosting</u></h1>
                              <img className='websiteBottomPic uk-margin-large-bottom' src='../images/cloudServer.jpg'></img>

                          </div>
                          <div  class="uk-width-1-1@xs uk-overflow-hidden uk-margin-large-bottom uk-text-center uk-margin-auto ">
                              <h1 className='websiteClouds'><u>Cloud Hosting Benefits</u></h1>
                              <ul className='uk-margin-auto-vertical websiteCloudText'>
                                <li className='websiteCloudText'><span uk-icon="icon:  check; ratio: 1.5"></span><b>Increase up-time and load speeds</b></li>
                                <li className='websiteCloudText'><span uk-icon="icon:  check; ratio: 1.5"></span><b>More secure than other hosting</b></li>
                                <li className='websiteCloudText'><span uk-icon="icon:  check; ratio: 1.5"></span><b>Easy Scalability</b></li>
                                <li className='websiteCloudText'><span uk-icon="icon:  check; ratio: 1.5"></span><b>Gives you the competitive edge</b></li>
                                <a id='mobileWebsiteLink' className='websiteCloudText' target='_blank' href='https://www.globaldots.com/cloud-computing-benefits/'><li><span uk-icon="icon:  link; ratio: 1.5"></span><b>More info here</b></li></a>
                              </ul>
                          </div>
                      </div>


                      <div div class="uk-width-1-1@s uk-text-center uk-margin-auto uk-margin-auto-vertica">
                          <a href='/Seo'><button  className="c-btn c-btn--primary uk-margin-xlarge-bottom  uk-text-center c-btn--pill uk-align-center homeButtons "><span uk-icon="arrow-right">Expand Your Business</span></button></a>
                      </div>
                </div>
              </div>
      </div>
    );
  }
}


export default Website;
