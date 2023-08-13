import React, { useRef, useState } from "react";
import cn from "classnames";

import SectionHeader from "../SectionHeader";
import { download } from "../../constants";
import { downloadicon, resumepdf } from "../../assets";


import "./style.scss";


// ABout without animations 
export default function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(true);

  return (
    <section
      id="about"
      className={cn("about-section-static", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="about"/>




      <h1 className="school-h" style={{fontWeight:"600",fontStyle:"italic"}}>Vanderbilt University 2024</h1>
      <h1 className="school-h" style={{fontWeight:"600",fontStyle:"italic"}}>Dual Major</h1>
      <h1 className="school-h" style={{fontWeight:"600",fontStyle:"italic"}}>Bachelor of Science in Computer Science and Human Organizational Development</h1>
      <h1 className="school-h">3.4 Computer Science GPA</h1>
      <h1 className="school-h">35 ACT</h1>
      <h1 className="school-h">Receivier of the John W & Ann Johnson Scholarship</h1>

    

      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })} style={{marginTop:'20px'}}>
      Hi I’m Johann, and I'm currently studying Computer Science and Human Organizational Development at Vanderbilt University. 
      <br/>
      <p className="empty-line"></p>
      A little about myself, I originate from a small, farm town in the Upper Cumberlands of Tennessee, but for the past few years I have been 
      calling Nashville my home to pursue my college education as I prepare to start a career in technology. 
      <p className="empty-line"></p>

      I have impactful, professional experience being an part of multiple development teams developing software applications. 
      <br/>
      <p className="empty-line"></p>

      And I believe I am just getting started, one of the many things I love about being a programmer is that you really never stop learning. 
      <br/>
      <p className="empty-line"></p>
      My next goal in my career is to contribute to and 
      become a part of a team or organization that shares my appreciation for the impact technology can have on all sectors of life. 
      I believe software is our greatest expression of human creativity and achievement.
      <p className="empty-line"></p>

     
     
      </p>
      <div className="contact-container">
        <p className="row contact-h">Email:  johannwest@gmail.com</p>
        <p className="row contact-h">Mobile:  (931)-704-3785</p>
        <a href={resumepdf} download="Johann_West_Resume.pdf" className="row download">Download Resume <img src={downloadicon}></img></a>
      </div>
    </section>
  );
}

