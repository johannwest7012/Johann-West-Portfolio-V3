import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";

import "./style.scss";

import lottie from 'lottie-web'



export default function Header() {

  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container,
      renderer: 'svg',
      load: true, 
      autoplay: true, 
      animationData: ''
    })

    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    
    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="header-container" data-scroll-section>
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">Johann West</h1>
      <div className="container" ref={container}></div>
    </section>
  );
}
