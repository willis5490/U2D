import React, { Component } from 'react';

import './About.css'



class About extends Component {

  // render nav
  render() {
    return (
      <div id='aboutBody' className='uk-container uk-animation-scale-up uk-transform-origin-top-left'>
          <div class="uk-section">
              <h1 class="uk-heading-line uk-text-center">About U2D</h1>

              <h2 class="uk-text-lead uk-text-center"><b>We want to see your business grow!</b></h2>

              <h5 className='uk-text-center aboutParagraph'>
                Here at U2D we love our jobs and are extremely passionate about doing it right. We guarantee our work will be done correctly 
                the first time so that you can concentrate on what’s important- your business. We pride ourselves on building lasting 
                relationships with our clients, which is probably why they still call us to grab a beer or a cup of coffee. Let’s be real. 
                Nobody wants to work with someone they don’t like, so let’s get together and chat about your business needs.
              </h5>
              
              <br></br>

              {/* <header class="uk-comment-header uk-margin-large-top uk-grid-medium uk-flex-middle" uk-grid='true'>
                  <div class="uk-width-auto">
                      <img class="uk-comment-avatar" src="../images/goodpic.jpg" width='150px' height='150px' alt=""></img>
                  </div>
                  <div class="uk-width-expand">
                      <h4 id='aboutName' class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">William Stearns</a></h4>
                      <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-visible@m uk-margin-remove-top">
                          <li className='aboutTitles'><span class="aboutTitles uk-margin-small-right" uk-icon="icon: user"></span>Founder</li>
                          <li className='aboutTitles'><span class="aboutTitles uk-margin-small-right" uk-icon="icon: social"></span>Lead Full-Stack Developer</li>
                      </ul> */}

                      {/* mobile change */}
                      {/* <ul class="  uk-hidden@m  uk-margin-remove-top">
                          <li className='aboutTitlesMobile'><span class="uk-margin-small-right" uk-icon="icon: user"></span>Founder</li>
                          <li className='aboutTitlesMobile'><span class="uk-margin-small-right" uk-icon="icon: social"></span>Lead Developer</li>
                      </ul> */}

                  {/* </div>
              </header>
              <div class="uk-comment-body uk-margin-large-bottom uk-visible@s">
                  <p id='aboutinfo'>Web developer originally from North Kingstown, Rhode Island. When not building websites you can find me playing music locally, hiking, and snowboarding.</p>
              </div>
              <div class="uk-comment-body uk-margin-large-bottom uk-hidden@s">
                  <div className='uk-container uk-text-center'>
                    <p id='aboutinfo'>Web developer originally from North Kingstown, Rhode Island. When not building websites you can find me playing music locally, hiking, and snowboarding.</p>
                  </div>
              </div> */}

              <div className='uk-text-center'>
                <a href='/Contact'><button id='' className="c-btn c-btn--primary uk-margin-medium-top c-btn--pill homeButtons "><span uk-icon="arrow-right">Contact Us Today</span></button></a>
              </div>
          </div>

      </div>
    );
  }
}


export default About;
