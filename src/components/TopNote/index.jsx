import React, { useRef, useEffect }from "react";
import "./style.scss";
import { githubicon, reactlogosvg, gsaplogo, sasslogo } from '../../constants';
export default function TopNote() {
  
  return (
  
    <div id="top-note" className="top-note" data-scroll-section>
      <a href="https://github.com/johannwest7012/Johann-West-Portfolio-V3" className="top-text">
           <img className="tiny-img" src={githubicon}/>&nbsp;Website built with React.js
           <img className="tiny-img" src={reactlogosvg}/>, GSAP
           <img className="tiny-img" src={gsaplogo}/>, SCSS 
           <img className="tiny-img" src={sasslogo}/>
      </a>
    </div>

  );
}
