import React, { useEffect, useRef, useState } from "react";
import "./style.scss";



import gsap from "gsap";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";




export default function Featured() {

  //const [firstImage, secondImage] = photos;

  return (
    <section className="featured-section"  data-scroll-section>
      <div className="featured-row-layout">
        <h6>&nbsp;</h6>
        <img src='/headshot2.png' data-scroll/>
      </div>
      <div className='featured-column-layout'>
        <h6>&nbsp;</h6>
        <img src='/vanderbiltcampus.jpg' data-scroll/>
      </div>
      <div className="featured-column-layout">
        <h6>&nbsp;</h6>
        <img src='/vandylogo.png' className='img2' data-scroll/>
      </div>
    </section>
  );


}
