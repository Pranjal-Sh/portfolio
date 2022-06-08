import React from 'react';

export default function Introduction() {
    /*style={{ backgroundImage: "url(/Images/bg1.png)" }}*/
    return (       
        <div id="intro">    
            <img className="introImg" src="./Images/profile4.png"/> 
            <div className="intro">
                <div className="introContent" >
                    <h1>Hi! I'm Pranjal Shrivastava</h1>
                    <h3 style={{color: "#E60965"}}>Software Developer</h3>
                    <p>A student pursing MCA from Amity University.<br/>Android Applications and Web Developer</p>
                    <strong>E-mail: </strong> <br/>pranjalshree@ymail.com
                    <a href="Pranjal-Resume.pdf" download={"Pranjal-Resume"}>
                        <button type="button" className="btn btn-primary">Download Resume</button> 
                    </a>
                </div>
                <div className='introbg'></div>
            </div>
        </div>
    )
}