import React, { useEffect, useRef } from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader";
import { projects, backicon, githubicon } from "../../constants";
import lottie from "lottie-web";




const Project = ({ id }) => {
  const project = projects.find((item) => item.id === id);


  console.log("Project:", project);
  const container = useRef(null);

  // const github = project.github; 
  // const live = project.live; 

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../animations/animation2.json"),
    });
  }, []);

  console.log("project id", id);

  return (
    <div>
    {(project) ? (
    <div className="wrapper">
      <div className="behind-hero" style={{background: project.background}}>
        <div className="top-row">
          <a href="/" className="back-to-home"><img className="back-icon" src={backicon} />Back</a>
        </div>
        <img className="hero-image" src={project.heroimg} alt="Hero" />
      </div>
    <div className="project-container">
      
      <div className="inner">
        <div className="inner-title-row">
          <span className="project-name">{project.name} </span>
          {project.live ? (<a href={project.live_link} className="access-project">Access the project<img className="access-project-icon" src={backicon} /></a>
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
        {project.github ? (
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
            <p className="description-subhead-text">{project.description}</p>
          </div>
        </div>
        <div className="image-list-div">
          {project.image_list.map((item, index) => (
            <>
            <img src={item.image} className="image-list-img" key={index}/>
            <p className="image-list-caption">{item.caption}</p>
            </>
          ))}
        </div>
        

       

         
      </div>
    </div>
    </div>
    ) : <div>This wasn't supposed to happen :/</div>}
    </div>
  );
};

export default Project;