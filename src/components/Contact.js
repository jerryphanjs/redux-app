import React, { Component } from 'react';
import BreadCrumb from './Layout/Other/BreadCrumb';

const iFrameUrl = 'http://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=Newbury+Street,+Boston,+MA,+United+States&aq=1&oq=NewBoston,+MA,+United+States&sll=42.347238,-71.084011&sspn=0.014099,0.033023&ie=UTF8&hq=Newbury+Street,+Boston,+MA,+United+States&t=m&ll=42.348994,-71.088248&spn=0.001388,0.006276&z=18&iwloc=A&output=embed';
class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="span9">
          <BreadCrumb />
          <hr className="soften" />
          <div className="well well-small">
            <h1>Visit us</h1>
            <hr className="soften" />	
            <div className="row">
              <div className="span8 relative">
                <iframe style={{width: '100%', height: '350px'}} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src={iFrameUrl} />
                <div className="absoluteBlk">
                  <div className="well wellsmall">
                    <h4>Contact Details</h4>
                    <h5>
                      2601 Mission St.<br />
                      San Francisco, CA 94110<br /><br />
                      info@mysite.com<br />
                      Tel 123-456-6780<br />
                      Fax 123-456-5679<br />
                      web:wwwmysitedomain.com
                    </h5>
                  </div>
                </div>
              </div>
              <div className="span8">
                <h4>Email Us</h4>
                <form className="form-horizontal">
                  <fieldset>
                    <div className="control-group">
                      <input type="text" placeholder="name" className="input-xlarge" />
                    </div>
                    <div className="control-group">
                      <input type="text" placeholder="email" className="input-xlarge" />
                    </div>
                    <div className="control-group">
                      <input type="text" placeholder="subject" className="input-xlarge" />
                    </div>
                    <div className="control-group">
                      <textarea rows={3} id="textarea" className="input-xlarge" defaultValue={""} />
                    </div>
                    <button className="shopBtn" type="submit">Send email</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Contact;