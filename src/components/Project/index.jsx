import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader";
import { projects, backicon, forwardicon, githubicon } from "../../constants";
import lottie from "lottie-web";
import YouTubePlayer from "../VideoPlayer/VideoPlayer";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Project = ({ id }) => {
    const [preloader, setPreload] = useState(true);
    const [timer, setTimer] = React.useState(1);

    const project = projects.find((item) => item.id === id);
    const container = useRef(null);


    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../../animations/animation2.json"),
        });
    }, []);

    const clear = () => {
        window.clearInterval(id.current);
        setPreload(false);
    };

    const refid = React.useRef(null);

    React.useEffect(() => {
        refid.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    React.useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    console.log("project id", id);

    var backlink = null;
    var forwardlink = null;
    if (id - 1 > 0) {
        backlink = "/projects/" + `${parseInt(id) - 1}`;
    }
    if (id < projects.length) {
        forwardlink = "/projects/" + `${parseInt(id) + 1}`;
    }

    return (
        <>
            {preloader ? (
                <div className="loader-wrapper absolute">
                    <h1>Portfolio</h1>
                    <h2>Johann West</h2>
                    <div className="loading-line" />
                </div>
            ) : (
                <div>
                    {project ? (
                        <div className="wrapper">
                            <div className="behind-hero" style={{ background: project.background }}>
                                <div className="top-row">
                                    {backlink ? (
                                        <a href={backlink} className="back-to-home">
                                            <img className="back-icon" src={backicon} />
                                            Previous
                                        </a>
                                    ) : null}

                                    <a href="/" className="back-to-home">
                                        Home
                                    </a>
                                    {forwardlink ? (
                                        <a href={forwardlink} className="back-to-home">
                                            Next
                                            <img className="back-icon" src={forwardicon} />
                                        </a>
                                    ) : null}
                                </div>
                                <img className="hero-image" src={project.heroimg} alt="Hero" />
                            </div>
                            <div className="project-container">
                                <div className="inner">
                                    <div className="inner-title-row">
                                        <span className="project-name">{project.name} </span>
                                        {project.live ? (
                                            <a href={project.live_link} target="_blank" className="access-project">
                                                Access the project
                                                <img
                                                    className="access-project-icon"
                                                    src={backicon}
                                                />
                                            </a>
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
                                            <p className="project-subhead-text">
                                                {project.category}
                                            </p>
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
                                            <p className="project-subhead-text">
                                                {project.technologies}
                                            </p>
                                        </div>
                                    </div>
                                    {project.github ? (
                                        <div className="col-container">
                                            <div className="col">
                                                <p className="project-subhead">Github -</p>
                                            </div>
                                            <div className="col">
                                                <a href={project.github_link} target="_blank">
                                                    <img src={githubicon} className="git-icon" />
                                                </a>
                                            </div>
                                        </div>
                                    ) : null}
                                    <div className="col-container">
                                        <div className="col">
                                            <p className="project-subhead">Description -</p>
                                        </div>
                                        <div className="col">
                                            <p className="description-subhead-text">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="image-list-div">
                                        {project.video_id ? (
                                            <>
                                                <YouTubePlayer videoId={project.video_id} />
                                                <p className="image-list-caption">
                                                    {" "}
                                                    Demo Video (5 min)
                                                </p>
                                            </>
                                        ) : null}
                                       
                                        {project.image_list.map((item, index) => (
                                            <>
                                                <img
                                                    src={item.image}
                                                    className="image-list-img"
                                                    key={index}
                                                />
                                                <p className="image-list-caption">{item.caption}</p>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>BAD URL 404 grr</div>
                    )}
                </div>
            )}
        </>
    );
};

export default Project;
