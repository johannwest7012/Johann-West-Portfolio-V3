import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "locomotive-scroll/src/locomotive-scroll.scss";
import LocomotiveScroll from "locomotive-scroll";


gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {

  useEffect(() => {
    if (!start) return; 

    let locoScroll = null;

    const scrollEl = document.querySelector("#main-container");
    if (!scrollEl) return;


    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      initPosition: {x : 0, y: 0},
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
    
    locoScroll.on("scroll", () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          if (arguments.length){
     

            return locoScroll.scrollTo(value, 0, 0)
          }
          else { 
            return locoScroll.scroll.instance.scroll.y;
          }
        }
        return null;
      },
      scrollLeft(value) {
        if (locoScroll) {
          if (arguments.length){
   

            return locoScroll.scrollTo(value, 0, 0)
          }
          else { 
            return locoScroll.scroll.instance.scroll.x;
          }
        }
        return null;
      },
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  }, [start]);
}
