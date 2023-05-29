import React, { useEffect, useRef } from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader";
import { test_project, backicon, githubicon } from "../../constants";
import lottie from "lottie-web";


const Project = ({ id }) => {
  const project = test_project;
  const container = useRef(null);

  const github = project.github; 
  const live = project.live; 

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../animations/animation2.json"),
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="behind-hero">
        <div className="top-row">
          <a href="/" className="back-to-home"><img className="back-icon" src={backicon} />Back</a>
          <p className="top-note">Johann West</p>
        </div>
        <img className="hero-image" src={project.heroimg} alt="Hero" />
      </div>
    <div className="project-container">
      
      <div className="inner">
        <div className="inner-title-row">
          <span className="project-name">{project.name} </span>
          {live ? (<a href={project.live_link} className="access-project">Access the project<img className="access-project-icon" src={backicon} /></a>
            ) : null}
        </div>
        <div className="separator"></div>
       
      </div>
      <div>
        <div className="col-container">
          <div className="col">
            <p className="project-subhead">Category -</p>
          </div>
          <div className="col">
            <p className="project-subhead-text">{project.category}</p>
          </div>
        </div>
        <div className="col-container">
          <div className="col">
            <p className="project-subhead">Client -</p>
          </div>
          <div className="col">
            <p className="project-subhead-text">{project.client}</p>
          </div>
        </div>
        <div className="col-container">
          <div className="col">
            <p className="project-subhead">Technologies -</p>
          </div>
          <div className="col">
            <p className="project-subhead-text">{project.technologies}</p>
          </div>
        </div>
        {github ? (
          <div className="col-container">
            <div className="col">
              <p className="project-subhead">    
              Github -
              </p>
            </div>
            <div className="col">
                <a href={project.github_link}>         
                  <img src={githubicon} className="git-icon"/>
                </a> 
  
            </div>
          </div>
        ) : null }
        <div className="col-container">
          <div className="col">
            <p className="project-subhead">Description -</p>
          </div>
          <div className="col">
            <p className="project-subhead-text">{project.description}</p>
          </div>
        </div>
        <div className="image-list-div">
          {project.image_list.map((image, index) => (
            <img src={image} className="image-list-img"/>
          ))}
        </div>
        

       

         
      </div>
    </div>
    </div>
  );
};

export default Project;