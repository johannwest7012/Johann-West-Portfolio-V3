import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../CustomCursor";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";
//import useLocoScroll from "../hooks/useLocoScroll";
import LoadableLocoScroll from "../hooks/LoadableLocoScroll";

import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import TopNote from "../components/TopNote";

import "../styles/home.scss";

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  //let locoScroll = useLocoScroll(!preloader);
  
  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <div style={{ height: "100vh" }}>
      <CustomCursor />
      <LoadableLocoScroll />

      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Portfolio</h1>
          <h2>Johann West</h2>
          <div className="loading-line" />
        </div>
      ) : (
       
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <div className="sub-class-1">
            <TopNote />
            <Navbar />
            <Header />
            <Gallery />
          </div>
          <div className="sub-class-2">
            <Intro />
            <Featured />
            <About />
            <Skills />
            <Experience />
            <Footer />
            <div style={{ height: "100px" }}>
              <p>Thanks for looking :)</p>
            </div>
          </div>
        </div>  
      )}
    </div>
  );
};
export default Home;
