import React, { useRef, useState } from "react";
import cn from "classnames";

import SectionHeader from "../SectionHeader";
import { download } from "../../constants";


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
      <h1 className="school-h" style={{fontWeight:"600",fontStyle:"italic"}}>Bachelor of Science in Computer Science and Human Organizational Development</h1>
      <h1 className="school-h">3.4 Computer Science GPA</h1>
      <h1 className="school-h">35 ACT</h1>
      <h1 className="school-h">Receivier of the John W & Ann Johnson Scholarship</h1>



      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })} style={{marginTop:'20px'}}>
      Hi I’m Johann and I'm currently studying Computer Science and Human Organizational Development at Vanderbilt University. 
      <br/>While the progression of my expertise is a constant endeavor, 
      I have tangible professional experience being an integral part of multiple software development teams developing impactful systems and applications. 
      <br/>
      <br/>To me, programming is an engine for creativity and change. 
      <br/>
      <p style={{fontWeight:"600"}}>It’s artistic, and it's powerful.</p>
      My next goal in my career is to contribute to and 
      become a part of a team or an organization that shares my appreciation for the impact technology can have at every scale. 
     
     
      </p>
      <div className="contact-container">
        <p className="row contact-h">Email:  johannwest@gmail.com</p>
        <p className="row contact-h">Mobile:  (931)-704-3785</p>
        <a href="" className="row download">Download Resume <img src={download}></img></a>
      </div>
    </section>
  );
}

