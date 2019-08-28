import React, { Component } from 'react';
import '@zendeskgarden/css-buttons';
import SVG from '../../Components/SVG/SVG'
import './Home.css'
import {TweenLite, TimelineLite, Power4, Power3, Power0, Power1 } from 'gsap'




class Home extends Component {


  constructor(props){
    super(props);

    // reference to the DOM node
    this.myElement1 = null;
    this.myElement2 = null;
    this.myElement3 = null;

    this.solutions1 = null;
    this.solutions2 = null;
    this.solutions3 = null;
    this.solutions4 = null;
    this.solutions5 = null;
    this.solutions6 = null;
    this.solutions7 = null;
    this.solutions8 = null;
    this.solutions9 = null;

    this.largLetters1 = null;
    this.largLetters2 = null;
    this.largLetters3 = null;
  
    this.myElementImage = null;


    // reference to the animation
    this.myTween = null;
    
  }


  componentDidMount(){
    // use the node ref to create the animation
 
    this.myTween = new TimelineLite({ paused:false })
    .set(this.largLetters1, {
      opacity:0
    })
    .to(this.largLetters1, 1, { rotation:360, transformOrigin:"50% 50%", opacity:1}) 
    
    

    this.myTween = new TimelineLite({ paused:false })
    .set(this.largLetters2, {
      y: 600,
      opacity:0
    })
    .to(this.largLetters2, 0.5, {x:-220,y:-25, opacity:1, ease:Power4.easeIn}, 1)
    .to(this.largLetters2, 0.5, {scale:3})
    .to(this.largLetters2, 0.5, {scale:1, y:0,x:0, ease:Power3.easeIn})
   

    this.myTween = new TimelineLite({ paused:false })
    .set(this.largLetters3, {
      y: 600,
      opacity:0
    })
    .to(this.largLetters3, 0.5, {x:-230,y:-200, opacity:1, ease:Power4.easeIn}, 2)
    .to(this.largLetters3, 0.5, {scale:3})
    .to(this.largLetters3, 0.5, {scale:1, y:0, x:0, ease:Power3.easeIn})
    


    this.myTween = new TimelineLite({ paused:false })
    .set(this.myElement1, {
      y: -500
    })
    .to(this.myElement1, 0.5, {y:0,  ease: Power4.easeIn},3) 
    .to(this.myElement1, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.myElement1, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.myElement1, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.myElement1, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.myElement1, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.myElement1, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.myElement2, {
      y: -500
    })
    .to(this.myElement2, 0.5, {y:0,  ease: Power4.easeIn},3.1) 
    .to(this.myElement2, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.myElement2, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.myElement2, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.myElement2, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.myElement2, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.myElement2, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.myElement3, {
      y: -500
    })
    .to(this.myElement3, 0.5, {y:0,  ease: Power4.easeIn}, 3.2) 
    .to(this.myElement3, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.myElement3, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.myElement3, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.myElement3, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.myElement3, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.myElement3, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.solutions1, {
      y: -500
    })
    .to(this.solutions1, 0.5, {y:0,  ease: Power4.easeIn}, 3.3) 
    .to(this.solutions1, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.solutions1, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions1, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.solutions1, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions1, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.solutions1, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.solutions2, {
      y: -500
    })
    .to(this.solutions2, 0.5, {y:0,  ease: Power4.easeIn}, 3.4) 
    .to(this.solutions2, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.solutions2, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions2, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.solutions2, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions2, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.solutions2, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.solutions3, {
      y: -500
    })
    .to(this.solutions3, 0.5, {y:0,  ease: Power4.easeIn}, 3.5) 
    .to(this.solutions3, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.solutions3, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions3, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.solutions3, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions3, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.solutions3, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.solutions4, {
      y: -500
    })
    .to(this.solutions4, 0.5, {y:0,  ease: Power4.easeIn}, 3.6) 
    .to(this.solutions4, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.solutions4, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions4, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.solutions4, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions4, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.solutions4, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.solutions5, {
      y: -500
    })
    .to(this.solutions5, 0.5, {y:0,  ease: Power4.easeIn}, 3.7) 
    .to(this.solutions5, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.solutions5, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions5, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.solutions5, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions5, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.solutions5, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.solutions6, {
      y: -500
    })
    .to(this.solutions6, 0.5, {y:0,  ease: Power4.easeIn}, 3.8) 
    .to(this.solutions6, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.solutions6, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions6, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.solutions6, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions6, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.solutions6, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.solutions7, {
      y: -500
    })
    .to(this.solutions7, 0.5, {y:0,  ease: Power4.easeIn}, 3.9) 
    .to(this.solutions7, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.solutions7, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions7, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.solutions7, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions7, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.solutions7, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.solutions8, {
      y: -500
    })
    .to(this.solutions8, 0.5, {y:0,  ease: Power4.easeIn}, 4) 
    .to(this.solutions8, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.solutions8, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions8, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.solutions8, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions8, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.solutions8, 0.2,{y:0, ease: Power3.easeIn})

    this.myTween = new TimelineLite({ paused:false })
    .set(this.solutions9, {
      y: -500
    })
    .to(this.solutions9, 0.5, {y:0,  ease: Power4.easeIn}, 4.1) 
    .to(this.solutions9, 0.2, {y:-100,  ease: Power4.easeIn  })
    .to(this.solutions9, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions9, 0.2, {y:-50, ease: Power3.easeIn})
    .to(this.solutions9, 0.2,{y:0,  ease: Power4.easeIn})
    .to(this.solutions9, 0.2, {y:-25, ease: Power3.easeIn})
    .to(this.solutions9, 0.2,{y:0, ease: Power3.easeIn})



    this.myTween = new TimelineLite({ paused:false })
    .set(this.myElementImage, {
      x: 1000,
      opacity:0
    })
    .to(this.myElementImage, 1, {x:-200, opacity:1, ease:Power4.easeIn}, 4)
    .to(this.myElementImage, 1, {scale:2})
    .to(this.myElementImage, 0.5, {scale:1, x:0, ease:Power3.easeIn})

  

  }


 style1 = {
  fontStyle:'normal',
  fontVariant:'normal',
  fontWeight:'normal',
  fontStretch:'normal',
  fontSize:'296.20523071px',
  lineHeight:'1.25',
  fontFamily:'Maiandra GD',
  textAlign:'start',
  letterSpacing:'0px',
  wordSpacing:'0px',
  fontVariantCaps:'normal',
  fontVariantLigatures:'normal',
  fontVariantNumeric:'normal',
  fontFeatureSettings:'normal',
  textAnchor:'start',
  strokeWidth:'4.96904469',
  writingMode:'lr-tb',
  stroke:'none',
  // fillOpacity:'1',
  display:'inline',
  stroke:'#6A829C'
 }

 style2 = {
  fontStyle:'normal',
  fontVariant:'normal',
  fontWeight:'normal',
  fontStretch:'normal',
  fontSize:'151.99087524px',
  lineHeight:'1.25',
  fontFamily:'Maiandra GD',
  textAlign:'start',
  letterSpacing:'0px',
  wordSpacing:'0px',
  fontVariantCaps:'normal',
  fontVariantLigatures:'normal',
  fontVariantNumeric:'normal',
  fontFeatureSettings:'normal',
  textAnchor:'start',
  // strokeWidth:'2.68438292',
  writingMode:'lr-tb',
  stroke:'none',
  fillOpacity:'1',
  display:'inline',
  stroke:'#333333'
 }

 


  // render nav
  render() {
    return (
      <div>

          <div id='homeMainPic' class="uk-height-large uk-background-cover  uk-flex uk-flex-top homeHeadPiece">
            <div class="uk-width-1-1@xs uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <div className='uk-container'>
              
              
              <svg id='svg868' width="441.54mm" height="345.96mm" version="1.1" viewBox="0 0 441.54 345.96" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g transform="translate(83.567 -46.157)">
                    <g>
                    <g className='lines' transform="scale(1.0558 .94711)" fill="" style={this.style1} aria-label="U">
                      <path ref={path => this.largLetters1 = path} d="m-58.927 75.138q7.6305-4.3355 14.914-6.5899 7.457-2.2545 14.567-2.2545 9.1912 0 12.486 5.376 3.4684 5.2026 3.4684 21.331 0 7.1102-1.9076 42.314-1.9076 35.204-1.9076 63.125 0 51.852 14.741 73.357 14.741 21.504 49.598 21.504 40.58 0 58.789-27.747 18.209-27.747 18.209-89.831 0-38.846-4.5089-63.472-4.3355-24.626-13.18-35.551 7.6305-5.2026 13.874-7.8039 6.4165-2.6013 11.619-2.6013 13.527 0 18.382 14.22 5.0292 14.047 5.0292 64.686 0 95.207-26.186 136.13-26.013 40.754-86.016 40.754-49.425 0-71.275-25.493-21.851-25.493-21.851-83.935 0-13.006 0.8671-36.938 1.0405-23.932 1.0405-34.857 0-23.758-2.6013-39.54-2.6013-15.955-8.1507-26.186z" fill="#6a829c" stroke-width="5.9581" style={this.style1}/>
                    </g>
                    <g className='smallLines' transform="scale(1.4326 .69802)" fill="" style={this.style2} aria-label="2">
                      <path ref={path => this.largLetters2 = path} d="m149.23 219.65q-1.3348-2.5806-1.9577-4.8942-0.6229-2.3136-0.6229-4.3603 0-9.2546 18.598-22.78 5.1612-3.7374 8.0088-5.8731 20.556-15.573 29.988-28.209 9.5215-12.636 9.5215-24.471 0-10.411-7.0299-16.818-7.0299-6.496-18.509-6.496-9.0766 0-15.573 4.4493-6.496 4.3603-11.39 13.793-3.7374-2.4026-5.6061-5.2502-1.8687-2.8476-1.8687-6.0511 0-9.1656 9.9665-15.662 10.055-6.585 25.005-6.585 18.687 0 30.255 10.411 11.657 10.411 11.657 26.963 0 16.996-15.395 35.239t-48.853 40.756q2.4916 0.089 6.763 0.17797 7.6528 0.17798 9.9665 0.17798 17.352 0 28.298-1.5128 10.945-1.6018 16.551-4.8053 1.1568 3.0255 1.6907 5.7841 0.62291 2.6696 0.62291 5.0722 0 5.8731-3.7374 8.2757-3.7374 2.3136-13.704 2.3136-7.5638 0-21.268-0.44494-13.615-0.44493-19.755-0.44493-6.229 0-11.568 0.35595-5.3392 0.26696-10.055 0.88986z" fill="#363d41" stroke-width="0" style={this.style2}/>
                    </g>
                    <g className='smallLines' transform="scale(1.2228 .8178)" fill="" style={this.style2} aria-label="D">
                      <path ref={path => this.largLetters3 = path} d="m190.11 272.64q-0.54366 16.465-0.77665 29.59-0.233 13.048-0.233 22.756 0 8.5432 0.15533 16.698 0.233 8.0772 0.69899 15.766 3.6502 0.93198 7.3005 1.398 3.7279 0.46599 7.4558 0.46599 21.669 0 34.949-12.116 13.358-12.116 13.358-31.765 0-19.494-13.203-31.687-13.203-12.193-34.328-12.193-4.2716 0-8.0772 0.31066-3.8056 0.233-7.3005 0.77665zm-19.416-12.582q10.64-0.15533 21.28-0.54365 10.718-0.38833 10.951-0.38833 30.367 0 48.308 14.446 18.018 14.446 18.018 38.522 0 12.892-5.3589 24.387-5.2812 11.417-15.3 19.96-9.2421 7.9218-21.669 11.96-12.349 3.9609-27.649 3.9609-15.611 0-20.581-2.4853-4.8929-2.4853-4.8929-9.5528 0-0.54366 0.69899-18.407 0.77665-17.863 0.77665-35.26 0-18.873-1.165-29.823-1.0873-11.028-3.4173-16.776z" fill="#363d41" stroke-width="0" style={this.style2}/>
                    </g>
                    <g  transform="scale(1.0587 .94455)" fill="#363d48" stroke-width=".12238" style={this.style2} aria-label="Web Solutions">
                      <path ref={path => this.myElement1 = path} className='web' d="m-24.916 352.74q0.94794-0.35547 1.7478-0.50359 0.82945-0.17774 1.5404-0.17774 1.3923 0 2.0144 0.74058 0.65171 0.74058 0.65171 2.3995 0 2.4883-1.807 7.2576-1.807 4.7693-5.421 11.731 3.14 6.2208 5.0952 9.4201 1.9847 3.1993 2.6661 3.1993 0.41472 0 1.57-1.3627 1.1849-1.3627 2.3698-3.377 4.7101-7.7909 6.8429-13.804 2.1625-6.0431 2.1625-11.375 0-1.2145-0.20736-2.3402-0.17774-1.1553-0.53322-2.2514 0.94794-0.35548 1.807-0.53322 0.85907-0.20736 1.5996-0.20736 1.6293 0 2.3402 0.91832 0.74058 0.91831 0.74058 3.0216 0 4.947-2.4587 11.671-2.4587 6.7244-6.991 13.982l-0.17774 0.29623q-8.4722 13.686-9.9534 13.686-1.6885 0-9.4794-16.322-0.17774-0.35548-0.23698-0.47397-5.0063 8.1167-8.413 12.471-3.377 4.325-4.6804 4.325-0.82945 0-2.1921-2.1625-1.333-2.1625-2.9031-6.1024-2.3698-5.7469-5.9542-15.256-5.8061-15.522-8.6203-17.685 1.0664-1.1849 2.0736-1.7774 1.0072-0.59246 2.044-0.59246 1.7181 0 2.8734 1.3923 1.1553 1.3923 3.0808 6.6948 1.2145 3.4066 3.3178 9.3016 6.3986 18.1 7.7909 18.1 1.0072 0 3.5251-3.4363 2.5476-3.4363 6.0431-9.6571-3.6733-9.1239-6.0727-13.478-2.3995-4.3546-4.5323-5.8654 0.85907-1.333 1.8366-1.9255 0.97756-0.62209 2.2217-0.62209 3.1993 0 9.1239 16.678 0.17774 0.56284 0.29623 0.82945 1.9255-4.2361 2.8734-7.465 0.94794-3.2585 0.94794-5.5691 0-0.88869-0.14812-1.8663-0.14812-0.97756-0.41472-1.9255z" style={this.style2}/>
                      <path ref={path => this.myElement2 = path} className='web' d="m4.6483 376.38q1.9551 0.32585 4.2953 0.50359 2.3698 0.14811 5.0952 0.14811 3.7029 0 4.9471-0.68133t1.2442-2.4587q0-2.6957-1.8663-4.2657-1.8663-1.57-5.0952-1.57-3.4363 0-5.7173 2.1921-2.281 2.1921-2.9031 6.132zm17.241 11.642q0.65171 0.79983 0.94794 1.5108 0.32585 0.68133 0.32585 1.333 0 1.5996-2.3995 2.6364-2.3698 1.0072-6.2208 1.0072-7.0799 0-11.109-3.851-3.9991-3.8806-3.9991-10.694 0-6.8726 4.0287-11.227 4.0584-4.3842 10.398-4.3842 4.8878 0 8.0279 2.7846 3.14 2.7846 3.14 7.1095 0 3.4066-2.6068 4.8582t-8.8573 1.4515q-2.3402 0-4.6804-0.14812-2.3106-0.17773-4.5916-0.50359v0.41472q0 4.6212 2.7253 7.3169 2.7253 2.6957 7.4058 2.6957 2.1921 0 4.0584-0.56283 1.8663-0.59247 3.4067-1.7478z" style={this.style2}/>
                      <path ref={path => this.myElement3 = path} className='web' d="m36.345 388.64q1.807 0.97756 3.4659 1.4515t3.2585 0.47397q4.6212 0 7.6131-3.2882 2.9919-3.3178 2.9919-8.4722 0-4.5027-2.4883-7.1688-2.4883-2.6661-6.6652-2.6661-1.8366 0-3.851 0.74057-2.0144 0.74058-4.3546 2.281v0.17774q-0.11849 5.5395-0.11849 8.2648 0 1.4219 0.02962 3.14 0.02962 1.6885 0.11849 5.0656zm-5.421 3.2585q0.3851-4.325 0.56284-9.9237t0.17774-13.182q0-8.9462-0.35548-11.968-0.35548-3.0512-1.2442-4.7101 1.4515-0.71095 2.4883-1.0072 1.0368-0.32586 1.8366-0.32586 1.333 0 1.8366 0.79982 0.53322 0.79983 0.53322 3.0808 0 0.44435-0.17774 4.9174-0.17774 4.4435-0.23698 8.5907 2.518-1.6885 4.8582-2.4883 2.3698-0.82945 4.7101-0.82945 5.5395 0 9.1535 3.7918 3.6436 3.7918 3.6436 9.6571 0 6.991-4.7397 11.671-4.7101 4.6508-11.879 4.6508-2.5476 0-5.3025-0.65171-2.7549-0.68133-5.8654-2.0736z" style={this.style2}/>
                      <path ref={path => this.solutions1 = path} className='solutions' d="m82.764 387.72q1.2738 0.68133 2.5772 1.0072 1.333 0.32585 2.8142 0.32585 3.5251 0 5.5395-1.57 2.044-1.5996 2.044-4.325 0-3.2585-5.3025-7.5539-0.02962-0.0296-0.02962-0.0296-0.08887-0.0592-0.26661-0.20736-7.6724-6.132-7.6724-10.842 0-2.1625 0.94794-4.2657 0.94794-2.1032 2.6957-3.851 2.6365-2.5772 5.658-3.9102 3.0216-1.3627 6.2208-1.3627 2.3106 0 3.4659 0.7702 1.1553 0.7702 1.1553 2.3106 0 0.53321-0.3851 1.4219-0.38509 0.85906-1.1257 2.044-1.1553-0.47397-2.3698-0.71096-1.1849-0.2666-2.4291-0.2666-3.7918 0-5.9542 1.7181-2.1329 1.6885-2.1329 4.6508 0 1.7774 0.85907 3.2289 0.88869 1.4515 3.2882 3.4659 0.35548 0.29623 1.0368 0.85907 8.0575 6.7541 8.0575 11.435 0 1.7774-0.65171 3.4955-0.62209 1.7181-1.8959 3.377-2.1625 2.7549-5.3914 4.2657-3.1993 1.4812-6.9318 1.4812-2.518 0-3.8214-0.85907-1.2738-0.8887-1.2738-2.5772 0-0.7702 0.29623-1.6293 0.32585-0.88869 0.97756-1.8959z" style={this.style2}/>
                      <path ref={path => this.solutions2 = path} className='solutions' d="m123.14 390.74q4.7989 0 7.8501-3.1993 3.0808-3.2289 3.0808-8.2648 0-4.9174-3.0216-7.9982-2.9919-3.1104-7.7909-3.1104-4.8878 0-7.9094 3.2289-2.9919 3.1993-2.9919 8.5018 0 4.7101 3.0512 7.7909 3.0512 3.0512 7.7316 3.0512zm-0.35548 4.2657q-6.8726 0-11.198-4.2361t-4.325-10.872q0-7.0503 4.6212-11.434 4.6212-4.4138 11.997-4.4138 6.6652 0 10.961 4.1768 4.325 4.1768 4.325 10.575 0 2.5772-0.82944 5.0952-0.79983 2.518-2.1921 4.2953-2.6364 3.4067-5.9839 5.1248-3.3178 1.6885-7.3762 1.6885z" style={this.style2}/>
                      <path ref={path => this.solutions3 = path} className='solutions' d="m152.97 392.94q-1.2442 0.68133-2.3402 1.0072-1.0664 0.32585-2.0144 0.32585-1.4219 0-1.9551-0.79982-0.53321-0.82945-0.53321-3.0808 0-2.8142 0.32585-10.694 0.32586-7.9094 0.32586-13.034 0-6.3393-0.3851-9.5979-0.3851-3.2882-1.3034-5.0063 1.1849-0.68133 2.281-1.0072 1.096-0.32585 2.0736-0.32585 1.4812 0 2.0144 0.74057 0.53322 0.74058 0.53322 3.0216 0 1.8959-0.32586 9.9534-0.32585 8.0575-0.32585 14.189 0 6.5763 0.35548 9.5979 0.3851 3.0216 1.2738 4.7101z" style={this.style2}/>
                      <path ref={path => this.solutions4 = path} className='solutions' d="m180.7 389.97q-2.0144 2.4587-4.325 3.614t-5.2137 1.1553q-4.8878 0-7.4946-2.9327-2.5772-2.9623-2.5772-8.5314 0-1.1849 0.14812-4.3546 0.14811-3.1993 0.14811-5.2137 0-2.6957-0.32585-4.5027-0.32586-1.8366-1.0664-3.1993 1.333-0.65171 2.3106-0.94794 1.0072-0.32585 1.6885-0.32585 1.3923 0 1.8959 0.71095 0.53321 0.68133 0.53321 2.5476 0 1.4812-0.23698 5.6876-0.23699 4.1768-0.23699 6.8726 0 5.658 1.3627 7.8501 1.3627 2.1625 4.7101 2.1625 2.4587 0 4.5323-1.1849 2.1032-1.1849 4.088-3.7325 0.11849-1.8959 0.17774-3.9695 0.0592-2.1032 0.0592-4.5916 0-4.0287-0.41472-6.7244-0.3851-2.7253-1.2442-4.2953 1.333-0.68133 2.3698-1.0072 1.0368-0.32585 1.8959-0.32585 1.3034 0 1.807 0.82944 0.50359 0.82945 0.50359 3.5844 0 1.3034-0.17773 5.7469-0.14812 4.4138-0.14812 7.5539 0 4.3842 0.35548 6.7837 0.3851 2.3698 1.2442 3.7029-1.4812 0.71096-2.4587 1.0368-0.97756 0.29623-1.6885 0.29623-1.2738 0-1.7478-0.85907-0.47396-0.88869-0.47396-3.4363z" style={this.style2}/>
                      <path ref={path => this.solutions5 = path} className='solutions' d="m196.46 370.51q-0.50359 0-1.3923 0.0592-0.8887 0.0296-1.1553 0.0296-1.2146 0-1.7181-0.32586-0.47397-0.35547-0.47397-1.1849 0-0.3851 0.11849-0.88869 0.14812-0.53322 0.44435-1.1849 0.23698 0 0.79982 0.0296t0.88869 0.0296q0.7702 0 2.4587-0.0889 0.20736 0 0.32585-0.0296 0-0.32585 0.0296-0.97756t0.0296-0.94794q0-2.3106-0.29623-4.0584-0.29623-1.7774-0.91832-3.1104 1.2738-0.62209 2.281-0.94794 1.0072-0.32586 1.7181-0.32586 1.2145 0 1.7478 0.7702 0.56283 0.74058 0.56283 2.4587 0 0.74058-0.2666 4.6508-0.0889 1.4515-0.14812 2.3106 1.7181-0.23698 3.0808-0.35548 1.3923-0.11849 2.4883-0.11849 0.97756 0 1.3923 0.35548 0.44435 0.35548 0.44435 1.1553 0 0.44434-0.26661 1.1257-0.26661 0.6517-0.7702 1.4812-0.7702-0.17774-1.6293-0.26661-0.85907-0.0889-2.0736-0.0889-0.20736 0-1.2442 0.0593-1.0368 0.0296-1.7774 0.0592-0.26661 4.6212-0.3851 7.6131-0.1185 2.9919-0.1185 4.8878 0 4.1176 0.71096 5.7765 0.74057 1.6293 2.4587 1.6293 0.47397 0 0.97756-0.17774 0.53322-0.17774 1.0664-0.56284 0.26661 0.59246 0.3851 1.0368 0.1185 0.44435 0.1185 0.79982 0 1.4515-1.2146 2.3995-1.1849 0.91832-3.1104 0.91832-3.1993 0-4.7693-2.1032-1.5404-2.1329-1.5404-6.5171 0-1.2442 0.29623-6.5763 0.29623-5.3618 0.44435-8.798z" style={this.style2}/>
                      <path ref={path => this.solutions6 = path} className='solutions' d="m222.05 392.94q-1.2442 0.68133-2.3698 1.0072-1.1257 0.32585-2.1625 0.32585-1.4515 0-1.9847-0.7702-0.5036-0.79982-0.5036-3.1697 0-1.3627 0.26661-6.1024t0.26661-8.1463q0-3.7029-0.35548-6.0135-0.35547-2.3106-1.1553-3.9399 1.0961-0.6517 2.2514-0.97756 1.1553-0.35548 2.281-0.35548 1.3627 0 1.8663 0.68134 0.50359 0.6517 0.50359 2.4587 0 0.47397-0.26661 5.184t-0.26661 8.9462q0 3.9695 0.3851 6.5763 0.41473 2.6068 1.2442 4.2953zm-0.23698-37.177q0 1.6885-1.1849 2.8142-1.1849 1.1257-2.9919 1.1257-1.57 0-2.4883-0.8887-0.91832-0.88869-0.91832-2.3995 0-1.6589 1.1849-2.8142 1.1849-1.1849 2.8734-1.1849 1.5404 0 2.518 0.94794 1.0072 0.94794 1.0072 2.3995z" style={this.style2}/>
                      <path ref={path => this.solutions7 = path} className='solutions' d="m243.88 390.74q4.7989 0 7.8501-3.1993 3.0808-3.2289 3.0808-8.2648 0-4.9174-3.0216-7.9982-2.9919-3.1104-7.7909-3.1104-4.8878 0-7.9094 3.2289-2.9919 3.1993-2.9919 8.5018 0 4.7101 3.0512 7.7909 3.0512 3.0512 7.7316 3.0512zm-0.35547 4.2657q-6.8726 0-11.198-4.2361-4.325-4.2361-4.325-10.872 0-7.0503 4.6212-11.434 4.6212-4.4138 11.997-4.4138 6.6652 0 10.961 4.1768 4.325 4.1768 4.325 10.575 0 2.5772-0.82945 5.0952-0.79982 2.518-2.1921 4.2953-2.6364 3.4067-5.9839 5.1248-3.3178 1.6885-7.3761 1.6885z" style={this.style2}/>
                      <path ref={path => this.solutions8 = path} className='solutions' d="m271.85 371.52q-0.0593 3.2585-0.17774 7.0207-0.0889 3.7325-0.0889 4.2065 0 3.851 0.35548 6.2505 0.35547 2.3995 1.1257 3.9991-1.2442 0.65171-2.281 0.97756-1.0368 0.29623-2.044 0.29623-1.3627 0-1.8662-0.7702t-0.50359-3.2289q0-0.53322 0.29623-5.4803 0.32585-4.9767 0.32585-9.3905 0-4.1768-0.32585-6.4578-0.32585-2.281-1.0664-4.088 0.65171-0.20736 1.3034-0.32585 0.68133-0.1185 1.3034-0.1185 1.57 0 2.4883 0.8887 0.91831 0.85907 1.0368 2.4587 2.2217-1.5996 4.7101-2.4587 2.4883-0.8887 4.9174-0.8887 2.9623 0 5.3025 1.3034 2.3698 1.2738 3.614 3.5548 0.85907 1.57 1.2145 3.6733 0.3851 2.0736 0.3851 6.3393 0 0.44434-0.0592 2.1032-0.0296 1.6589-0.0296 2.8734 0 3.0512 0.3851 5.2433 0.41473 2.1921 1.2146 3.4363-1.3923 0.68133-2.4291 1.0072-1.0072 0.32585-1.8366 0.32585-1.3923 0-1.9551-0.71095-0.53322-0.74058-0.53322-2.755 0-1.2145 0.17774-5.2137 0.20736-4.0287 0.20736-6.8429 0-5.3618-1.6293-7.7612-1.6293-2.4291-5.2433-2.4291-1.8366 0-3.9695 0.77019-2.1329 0.74058-4.325 2.1921z" style={this.style2}/>
                      <path ref={path => this.solutions9 = path} className='solutions'd="m300.49 389.53q1.0664 0.56284 2.044 0.82945 0.97756 0.2666 1.8959 0.2666 2.1329 0 3.4363-1.0072 1.3034-1.0368 1.3034-2.6957 0-1.3034-0.71095-2.4291-0.71096-1.1257-2.6661-2.7253-0.32585-0.23699-0.88869-0.71096-5.0063-4.1472-5.0063-7.3465 0-1.3034 0.50359-2.6068 0.50359-1.3034 1.4812-2.4883 1.8662-2.2217 4.3546-3.377 2.518-1.1849 5.421-1.1849 1.4219 0 2.1625 0.56284 0.74058 0.53321 0.74058 1.57 0 0.50359-0.26661 1.2146-0.2666 0.68133-0.88869 1.7478-0.79982-0.32586-1.5108-0.47397-0.71095-0.17774-1.3923-0.17774-2.4587 0-3.9991 1.2145-1.5108 1.1849-1.5108 3.0808 0 2.0736 4.1176 5.5988 1.0368 0.88869 1.57 1.3923 1.7478 1.5404 2.5772 3.0512 0.82944 1.4812 0.82944 3.0512 0 3.7029-3.2882 6.3986-3.2585 2.6661-7.939 2.6661-1.6293 0-2.518-0.6517-0.85907-0.65171-0.85907-1.8366 0-0.56283 0.23698-1.2442 0.23699-0.68134 0.7702-1.6885z" style={this.style2}/>
                    </g>
                    </g>
                    <image ref={path => this.myElementImage = path} x="210.96" y="166.26" width="121.23" height="31.741" fill="#363d41" image-rendering="optimizeQuality" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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 YXRpb24AMYRY7O8AAAAASUVORK5CYII= "/>
                  </g>
              </svg>




                <h1 id='homeStatment' ><b>WEB SOLUTIONS DESIGNED AND BUILT FOR BUSINESS</b></h1>
                {/* <div >
                  <a href='/Website#websiteCarousel'><button id='homeButton' className="c-btn c-btn--primary uk-margin-large-top c-btn--pill homeButtons "><span uk-icon="arrow-right">Check Out Our Work Here </span></button></a>

                </div> */}
              </div>
            </div>
          </div>

        <div className='uk-container uk-margin-large-bottom'>

              <div  className='uk-panel uk-text-center uk-overflow-hidden h1HomeTextDiv'>
                <h1 uk-parallax="opacity: 0,1,1; scale: 0.5,1,1; viewport: 0.5;"  id='homeH1Text'>We build custom websites tailored to your business needs.</h1>
                <h3 id='homeParagraph' uk-parallax=" opacity: 0,1,1; scale: 0.5,1,1; viewport: 0.5;">We have worked with many business models, from e-commerce websites to big data warehouses. No matter what your needs, we can integrate it; so look no further, we've got you covered!
                </h3>
                <a href='/Contact'><button id='homeButton2' className="c-btn c-btn--primary uk-margin-large-top c-btn--pill homeButtons  ">Contact Us For a Free Quote</button></a>              
              </div>


              <div id='arrowLink' class="uk-height-medium uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-visible@m homeInfoSections" >
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <h1 ><u>SIT DOWN WITH US</u></h1>
                    <p  >
                      We want you to know we care! Here at U2D we'll sit down with you to fully understand the vision of your business, and help find a way to get you there. U2D can save you money,
                      increase your clientele, and fix web related issues your business may be experiencing.
                    </p>
                </div>
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <img className='homePicsR' src='../images/sitDownMeeting2.jpg'></img>
                </div>
              </div>

              <div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-visible@m homeInfoSections2" >
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                  <img className='homePicsL'  src='../images/branding.jpg'></img>
                </div>
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                  <h1 ><u>DEFINE YOUR BUSINESS</u></h1>
                    <p >
                      One of the most important parts of your business is engaging your clients! You want your website to stand out from the rest while creating
                       an easy user experience. Our UX (user experience) designers will guarantee a design your customers and you will love.
                    </p>
                </div>
              </div>

              <div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-visible@m homeInfoSections" >
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <h1 ><u>FIND MORE CLIENTS</u></h1>
                    <p >
                     Before you launch your amazing website, you will want to integrate an SEO (Search Engine Optimization) strategy to stimulate client growth.
                     We first review your business plan, then strategically target keywords that will not only increase consumer traffic to your website but also 
                     attract a wider demographic.
                    </p>
                </div>
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <img className='homePicsR'  src='../images/seoPic.jpg'></img>
                </div>
              </div>

              <div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-visible@m homeInfoSections2 lastHomeDiv" >
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <img className='homePicsL'  src='../images/growthImage.jpg'></img>
                </div>
                <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical ">
                <h1 ><u>WATCH YOUR BUSINESS GROW!</u></h1>
                    <p >
                      Our services will not just give you the online presence you deserve, but the growth your business needs! Wether it's a custom built website, 
                      an SEO strategy, some social media marketing or cloud architecture, we've got you covered!  
                    </p>
                </div>
              </div>

              <div div class="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                 <a href='/Website'><button  className="c-btn c-btn--primary uk-margin-large-bottom uk-text-center c-btn--pill uk-align-center homeButtons uk-visible@m"><span uk-icon="arrow-right">Get started now  </span></button></a>
              </div>






              {/* mobile view */}
                <div class="uk-height-expand uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-hidden@m" >
                      <div class="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                          <h1 className='homeSectionHeaders' uk-parallax="opacity: 0,1,1; y: -100,0,0; x:150,150,0; scale: 2,1,1; viewport: 0.5;"><u>SIT DOWN WITH US</u></h1>
                          <p  uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
                            We want you to know we care! Here at U2D we'll sit down with you to fully understand the vision of your business, and help find a way to get you there. U2D can save you money,
                            increase your clientele, and fix web related issues your business may be experiencing.
                          </p>
                          <img className='homePics uk-margin-xlarge-bottom '  uk-parallax="opacity: 0,1,1; scale: .5,1,1; viewport: 0.5;" src='../images/sitDownMeeting2.jpg'></img>
                      </div>

                    </div>

                    <div class="uk-height-expand uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-hidden@m" >

                      <div class="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                            <h1 className='homeSectionHeaders' uk-parallax="opacity: 0,1,1; y: -100,0,0; x: -150,-150,0; scale: 2,1,1; viewport: 0.5;"><u>DEFINE YOUR BUSINESS</u></h1>
                            <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: 100,100,0; scale: 0.5,1,1; viewport: 0.5;">
                              One of the most important parts of your business is engaging your clients! You want your website to stand out from the rest while creating
                              an easy user experience. Our UX (user experience) designers will guarantee a design your customers and you will love.
                            </p>
                          <img className='homePics uk-margin-xlarge-bottom ' uk-parallax="opacity: 0,1,1; scale: .5,1,1; viewport: 0.5;" src='../images/branding.jpg'></img>
                      </div>
                    </div>

                    <div class="uk-height-expand uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-hidden@m" >
                      <div class="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                          <h1 className='homeSectionHeaders' uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 150,150,0; scale: 2,1,1; viewport: 0.5;"><u>FIND MORE CLIENTS</u></h1>
                          <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
                            Before you launch your amazing website, you will want to integrate an SEO (Search Engine Optimization) strategy to stimulate client growth.
                            We first review your business plan, then strategically target keywords that will not only increase consumer traffic to your website but also 
                            attract a wider demographic.
                          </p>
                          <img className='homePics uk-margin-xlarge-bottom' uk-parallax="opacity: 0,1,1; scale: .5,1,1; viewport: 0.5;" src='../images/seoPic.jpg'></img>
                      </div>

                    </div>

                    <div class="uk-height-expand uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top uk-hidden@m " >

                      <div class="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                          <h1 className='homeSectionHeaders' uk-parallax="opacity: 0,1,1; y: -100,0,0; x: -150,-150,0; scale: 2,1,1; viewport: 0.5;"><u>WATCH YOUR BUSINESS GROW!</u></h1>
                          <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: 100,100,0; scale: 0.5,1,1; viewport: 0.5;">
                            Our services will not just give you the online presence you deserve, but the growth your business needs! Wether it's a custom built website, 
                            an SEO strategy, some social media marketing or cloud architecture, we've got you covered!  
                          </p>
                          <img className='homePics uk-margin-xlarge-bottom' uk-parallax="opacity: 0,1,1; scale: .5,1,1; viewport: 0.5;" src='../images/growthImage.jpg'></img>
                      </div>
                    </div>

                    <div div class="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                      <a href='/Website'><button  className="c-btn c-btn--primary uk-margin-large-bottom uk-text-center c-btn--pill uk-align-center homeButtons uk-hidden@m"><span uk-icon="arrow-right">Get Started Now  </span></button></a>
                    </div>

          </div>
      </div>
    );
  }
}


export default Home;
