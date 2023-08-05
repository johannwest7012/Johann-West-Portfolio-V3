import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

import "./style.scss";
import SectionHeader from "../SectionHeader";

import createximg from "../../assets/creatextitle.svg"
import bettoranalyticsimg from  "../../assets/basvg.svg"
import saferouteimg from  "../../assets/saferoutetitle.png"
import qalycountimg from "../../assets/qalycount.svg"

const projects = [
  {
    src:
      bettoranalyticsimg,
    title: "BettorAnalytics",
    subtitle: "CRUD Reporting and Tooling",
    category: "PROFESSIONAL - .NET/C# - Vue.js - PostgreSQL",
    link: "/projects/1"
  },
  {
    src:
    createximg,
    title: "CreateX",
    subtitle: "Digital Asset Exchange Platform",
    category: "PERSONAL - Django/Python - React.js - PostgreSQL",
    link: "/projects/2"

  },
  {
    src:
      saferouteimg,
    title: "SafeRoute",
    subtitle: "Safety in Travel, For All",
    category: "PERSONAL - Express.js - React.js - Mongo DB",
    link: "/projects/3"

  },
  {
    src:
      qalycountimg,
    title: "QALY's Computation Application",
    subtitle: "Undergraduate CS Research Project (under development)",
    category: "RESEARCH - Django/Python - PostgreSQL",
    link: "/projects/4"

  },
];
function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
  link
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <a href={link} className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        >
    
        </div>
      </a>
      <div></div>
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery" ref={ref}>
        <SectionHeader title="projects" type="2"/>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{projects.length}</span>
        </div>
        {projects.map((project, index) => (
          <GalleryItem
            key={project.src}
            index={index}
            {...project}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
