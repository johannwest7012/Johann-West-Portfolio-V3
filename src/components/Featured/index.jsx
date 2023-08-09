import React from "react";
import "./style.scss";

import { headshot2, vanderbiltcampus, vandylogo1 } from "../../assets";




export default function Featured() {

  //const [firstImage, secondImage] = photos;

  return (
    <section className="featured-section"  data-scroll-section>
      <div className="featured-row-layout">
        <h6>&nbsp;</h6>
        <img src={headshot2} data-scroll/>
      </div>
      <div className='featured-column-layout'>
        <h6>&nbsp;</h6>
        <img src={vanderbiltcampus} data-scroll/>
      </div>
      <div className="featured-column-layout">
        <h6>&nbsp;</h6>
        <img src={vandylogo1} className='img2' data-scroll/>
      </div>
    </section>
  );


}
