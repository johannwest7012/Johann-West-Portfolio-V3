import React, { useRef, useEffect }from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import LocomotiveScroll from "locomotive-scroll";
import { useDispatch } from "react-redux";


export default function Navbar() {

  const dispatch = useDispatch();
  
  const scroll1Action = () => {
    dispatch({
      type: "SCROLL1_TRUE"
    })}
  // removed data-scroll-section from navbar div
  return (
  
    <div id="navbar" className="navbar" data-scroll-section>
      <a className="nav-link">
           Github
      </a>

      <a className="nav-link">Resume</a>

      <a href="https://www.linkedin.com/in/johann-west-89960120b/" className="nav-link">LinkedIn</a>
    </div>

  );
}
