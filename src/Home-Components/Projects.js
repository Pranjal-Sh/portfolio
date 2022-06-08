import React from 'react';
import {Link} from 'react-router-dom';


export default function Projects({projects}){
    
    return(
        <div className="projectDiv" id="project">
            <h2>Projects</h2>
            <div className="card-deck mx-auto projectDeck">
                {
                    projects.map((project)=>(
                    <div className="card align-items-center projectCard" key={project.id}>
                    <img className="card-img-top projectImg" src={project.thumbnail} alt="Covid App"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize: "14px"}}>{project.title}p</h5>
                        <p align="justify" className="card-text">{project.introDesc}</p>
                        <Link to={`/projects/${project.id}`}><button className="btn btn-primary">Show Project</button></Link>
                    </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}