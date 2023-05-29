import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";



import "./style.scss";


import lottie from 'lottie-web'



export default function Header() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      load: true, 
      autoplay: true, 
      animationData: require('../../animations/animation2.json')
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
      <h1 id="header-text" >Johann West</h1>
      <h3 id="header-text" className="portfoliotext" >Developer Portfolio</h3>

      <div className="svg" ref={container} /> 
    </section>
 
  );
}
