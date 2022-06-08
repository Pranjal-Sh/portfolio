import React from "react";
import {useParams} from 'react-router-dom';
import useFetch from "../useFetch";

export default function Carousel(props){
  const {id} = useParams();
  const { data: project, error, isPending } = useFetch('http://localhost:8000/projects/' + id);
    return(
        <>
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { project && (
        <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel" data-interval="500">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={project.img1} alt="Picture 1" className="d-block carouselImage"/>
              <div className="carousel-caption">
                <h3>{project.img1Title}</h3>
                <p>{project.img1Desc}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={project.img2} alt="Picture 2" className="d-block carouselImage" />
              <div className="carousel-caption">
                <h3>{project.img2Title} </h3>
                <p>{project.img2Desc} </p>
              </div> 
            </div>
            <div className="carousel-item">
              <img src={project.img3} alt="Picture 3" className="d-block carouselImage"/>
              <div className="carousel-caption">
                <h3>{project.img3Title}</h3>
                <p>{project.img3Desc}</p>
              </div>  
            </div>
            <div className="carousel-item">
              <img src={project.img4} alt="Picture 4" className="d-block carouselImage"/>
              <div className="carousel-caption">
                <h3>{project.img4Title}</h3>
                <p>{project.img4Desc}</p>
              </div>  
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        )}
      </>
    )
}