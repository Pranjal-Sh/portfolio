import React from 'react';
import {Link} from 'react-router-dom';


export default function Projects(){
    
    return(
        <div className="projectDiv" id="project">
            <h2>Projects</h2>
            <div className="card-deck mx-auto projectDeck">
                <div className="card align-items-center projectCard">
                    <img className="card-img-top projectImg" src="./Images/covidApp/one.png" alt="Covid App"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize: "14px"}}>Covid-19 App</h5>
                        <p align="justify" className="card-text">Android Application to locate Covid-19 patients on GoogleMaps and get live update of cases in Indian States. (June, 2020)</p>
                        <Link to="/projects"><button className="btn btn-primary">Show Project</button></Link>
                    </div>
                </div>
                <div className="card align-items-center projectCard">
                    <img className="card-img-top projectImg" src="./Images/marketApp/eight.png" alt="Meat Market App"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize: "14px"}}>Product Marketing App</h5>
                        <p align="justify" className="card-text">Android Application for meat product marketing avalaible in 3 languages. Locate buyers and sellers on GoogleMaps. (Oct,2021)</p>
                        <Link to="/projects"><button className="btn btn-primary">Show Project</button></Link>
                    </div>
                </div>
                <div className="card align-items-center projectCard">
                    <img className="card-img-top projectImg" src="./Images/publication/one.png" alt="Publication"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize: "14px"}}>IEEE Publication</h5>
                        <p align="justify" className="card-text">Review Paper on the topic 'Role and Applications of Digital Marketing in Digital Era: A Review', published on IEEE website in Nov,2021</p>
                        <Link to="/projects"><button className="btn btn-primary">Show Project</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}