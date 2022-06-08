import React from 'react';

export default function About(){
    return(
        <div className="aboutDiv" id="about">
            <div className="aboutContent1">
                <h6>Education Level</h6>
                <p>Post Graduate(MCA)</p>
                <br/>
                <h6>Birthday</h6>
                <p>10th June, 2000</p>
                <h6>Birth Place</h6>
                <p>Patna, Bihar, India<br/></p>
            </div>
            <div  className="aboutText">
                <h2 style={{padding: "30px"}}>About Me</h2>
                <img className="aboutImg" src="./Images/profile8.jpeg"/>
                <p><strong>Pranjal Shrivastava</strong></p>
            </div>
            <div className="aboutContent2">
                <h6>Hobbies</h6>
                <p>Coding, Travelling,<br/>Cultural Activities, </p>
                <h6>Git Hub</h6>
                <p>github.com/Pranjal-Sh</p>
                <h6>Address</h6>
                <p>Ghaziabad, UP, India</p>
            </div>
            <p align="justify" style={{padding: "0px 230px"}}>Hi, I am Pranjal Shrivastava. I believe life is too short to experience everything, but long enough to master at least one thing. That one thing for me is my coding skills. I want to expand my knowledge in a dedicated fashion. I enjoy it so I've pursued it as my career. 
                Colors give me peace, so my hobby is art and craft. Too much of work stress means a time off for a sketch.
            </p>
        </div>
    )
}