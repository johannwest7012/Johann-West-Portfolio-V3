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
import useLocoScroll from "../hooks/useLocoScroll";

import Intro from "../components/Intro";
import Experience from "../components/Experience";

import "../styles/home.scss";

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

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
    <div style={{height:"100vh"}}>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Portfolio</h1>
          <h2>Johann West</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Navbar />
          <Header />
          <Intro />
          <Featured />
          <About />
          <Experience />
          <Gallery />
          <Footer />
        </div>
      )}
    </div>
  );
};
export default Home;
