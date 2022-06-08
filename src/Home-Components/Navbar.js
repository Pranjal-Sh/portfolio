import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#"><Link to="/">Pranjal</Link></a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="nav navbar-nav ml-auto">
                        <li><a href="#intro">{props.title}</a></li>
                        <li><a href="#project">{props.projects}</a></li>
                        <li><a href="#about">{props.about}</a></li>
                        <li><a href="#skill">{props.skills}</a></li>
                        <li><a href="#education">{props.education}</a></li>
                        <li><a href="#contact">{props.contact}</a></li>
                    </ul>
                    <ul className="navbar-nav sm-icons ml-auto">
                        <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/pranjal.shree.7/" target="_blank"><img src="/Images/facebook.png"/></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/shreya.106/" target="_blank"><img src="/Images/instagram.png"/></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/pranjal-shrivastava-208203213/" target="_blank"><img src="/Images/linkedin.png"/></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://twitter.com/pranjalshr" target="_blank"><img src="/Images/twitter.png"/></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
