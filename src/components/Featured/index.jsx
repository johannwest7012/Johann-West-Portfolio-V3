import React, { useEffect, useRef, useState } from "react";
import photos from "../../data";
import "./style.scss";



import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";




export default function Featured() {

  const [firstImage, secondImage] = photos;


  return (
    <section className="featured-section"  data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstImage} data-scroll/>
      </div>
      <div className='featured-column-layout'>
        <h6>lily</h6>
        <img src={secondImage} data-scroll/>
      </div>
    </section>
  );


}
