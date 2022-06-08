import React from 'react';

export default function Contact(){
    return(
        <div className="contactDiv" id="contact">
            <h2>Contact Me</h2>
            <form action="mailto:pranjalshrivastava.sg@gmail.com" method="post" encType="text/plain">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" name="FullName" placeholder="Pranjal Shrivastava"/>            
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="EmailID" placeholder="xyz@gmail.com"/>
                </div>
                <br/>
                <div className="form-group">
                    <label>Phone Number</label>
                        <input type="text" className="form-control" name="Phone" placeholder="9123456780"/>
                </div>
                <div className="form-group">
                    <label>Web Address</label>
                    <input type="text" className="form-control" name="Website" placeholder="google.com"/>
                </div>
                <br/>
                <div className="form-group">
                    <label>Write Your Message Here</label>
                    <textarea className="form-control" name="Message" rows="5" cols="56" placeholder="Hello!"></textarea>
                </div>
                <br/>
                <input type="submit" className="btn btn-primary" value="Send"/>
            </form>
        </div>
    )
}