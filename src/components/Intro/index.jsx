import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SectionHeader from "../SectionHeader";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";

export default function Intro() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.01);

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
      className={cn("intro-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <p ref={ref} id="headline" className={cn("header-one",{"is-reveal": reveal })}>
        Engineered
      </p>
      <p ref={ref} id="headline" className={cn("header-two",{ "is-reveal": reveal })}>
        Beautifully
      </p>

    </section>
  );
}
