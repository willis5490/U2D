import React, { Component } from 'react';
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.css'



class Contact extends Component {

  state = {
    name: '',
    email: '',
    inquiry: '',
    message: '',
    cappa:false
   }

   notify = () => {
    toast.success("Your Email Has Been Sent !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError = () => {
    toast.error("You Must Fill Out All Forms !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError2 = () => {
    toast.error("You Must Verify You Are Not A Robot !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

   sendEmail = event => {
    //  event.preventDefault()
     if(this.state.name === ''){
       this.notifyError()
     }else if(this.state.email === ''){
      this.notifyError()
     }else if(this.state.inquiry === ''){
      this.notifyError()
     }else if(this.state.message === ''){
      this.notifyError()
     }
     else if(this.state.cappa === false){
      this.notifyError2()
     }
     else {
      axios.post("https://www.u2dwebsolutions.com/sendEmail", {
        email: this.state.email,
         name: this.state.name,
         inquiry: this.state.inquiry,
         message: this.state.message
       })
         .then((response) => {
          console.log(response)
         })
         .catch((err) => {
           console.log(err)
         })
         this.notify()
         this.emptyFields()
         
     }


   };

   handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   };

   emptyFields = () => {
     this.setState({
       name: '',
       email: '',
       inquiry: '',
       message: ''
     })
   }
    onChange(value) {
    console.log("Captcha value:", value);
  }


  // render nav
  render() {
    return (
      <div className="uk-container uk-animation-scale-up uk-transform-origin-top-right">
       <div className="uk-section">
         <h1 className="uk-heading-line uk-text-center">{`Contact U2D`}</h1>

         <h3 className='contactHeader uk-text-center contacth2 uk-margin-remove'>Let us know what service you are interested in, or a question you might have and we will get back to you ASAP.</h3>

         <h4 id='formheader'>Please fill out your information below.</h4>

         <div className="formDiv ">
           <form>
             <fieldset className="uk-fieldset ">
               <div className="uk-margin">
                 <div id="emailInput" className="uk-inline uk-width-1-1">
                   <a className="uk-form-icon" href="#" uk-icon="icon: user"></a>
                   <input
                   value={this.state.name}
                   onChange={this.handleInputChange}
                   name='name'
                    className="uk-input ContactInputBody"
                    type="text"
                    placeholder="Name" />
                 </div>
               </div>
               <div className="uk-margin">
                 <div id="emailInput" className="uk-inline uk-width-1-1">
                   <a className="uk-form-icon" href="#" uk-icon="icon:  pencil"></a>
                   <input
                   value={this.state.email}
                   onChange={this.handleInputChange}
                   name='email'
                    className="uk-input ContactInputBody"
                    type="text"
                    placeholder="Email" />
                 </div>
               </div>
               <div id="inquireInput" className="uk-margin uk-width-1-1">
                 <select
                  value={this.state.inquiry}
                  onChange={this.handleInputChange}
                  name='inquiry'
                 className="uk-select ContactInputBody">
                   <option>{`What type of service are you interested in?`}</option>
                   <option>Build/Design a Website</option>
                   <option>SEO Services</option>
                   <option>Branding</option>
                   <option>Consulting Services</option>
                   <option>Other</option>
                   <span uk-icon="icon: chevron-down"></span>
                 </select>
               </div>

               <div id="textInput" className="uk-margin uk-width-1-1">

                 <textarea
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  name='message'
                  className="uk-textarea ContactInputBody"
                  rows="5"
                  placeholder="Write your message here...">
                  </textarea>
               </div>
             </fieldset>
           </form>
           
           <button onClick={this.sendEmail} id="send-button" type="submit" name="action" className="uk-align-center uk-button uk-margin-auto uk-button-primary uk-button-large uk-width-large">Send</button>
         </div>
         <ToastContainer position="bottom-center" autoClose={4000} />
         <ReCAPTCHA
          sitekey={process.env.REACT_APP_GOOGLEKEY}
          onChange={()=>{this.onChange();
            this.setState({
              cappa:true
            })
          }}
          data-theme="dark" 
        />
       </div>
       </div>
     );
  }
}


export default Contact;
