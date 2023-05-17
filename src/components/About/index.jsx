import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SectionHeader from "../SectionHeader";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";

export default function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.1);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
    else setReveal(false);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 2,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="about" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Integer a sem turpis. Mauris quis ligula ligula. Donec 
      placerat orci et felis scelerisque, vitae interdum enim aliquam. 
      Phasellus tincidunt volutpat neque id fermentum. Morbi convallis 
      erat in lorem placerat tincidunt. Etiam vitae fringilla sem. 
      Quisque id consectetur felis. Sed ultrices nulla mauris, id 
      congue purus eleifend eu. Nunc eget placerat est.
      </p>
    </section>
  );
}
