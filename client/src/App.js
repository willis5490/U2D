import React, { Component } from 'react';
import { Route, Router, Switch } from "react-router-dom";

//create browser history
import History from './Pages/History/History.js'
//components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
//pages
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Branding from './Pages/Branding/Branding.js';
import Consulting from './Pages/Consulting/Consulting.js';
import Contact from './Pages/Contact/Contact.js';
import Seo from './Pages/Seo/Seo.js';
import Website from './Pages/Website/Website.js';
import NotFound from './Pages/NotFound/NotFound.js'
require("dotenv").config();




class App extends Component {
  render() {
    return ( 
      
      <Router  history={History}>
         <div className="App">
        <Header></Header>
          
            <Switch>
              
              <Route exact path="/" render={props =><Home/>} />
              <Route exact path="/About" render={props =><About/>} />
              <Route exact path="/Branding" render={props =><Branding/>} />
              <Route exact path="/Consulting" render={props =><Consulting/>} />
              <Route exact path="/Contact" render={props =><Contact/>} />
              <Route exact path="/Seo" render={props =><Seo/>} />
              <Route exact path="/Website" render={props =><Website/>} />
              <Route render={props =><NotFound/>}/>
              
            </Switch>
          
        <Footer></Footer>
        </div>
      </Router>
    
  
    );
  }
}

export default App;
