import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import cn from "classnames";

import "./style.scss";

export default function Footer() {
    const ref = useRef(null);

    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref, 0.3);

    useEffect(() => {
        if (onScreen) setReveal(onScreen);
        else setReveal(false);
    }, [onScreen]);

    useEffect(() => {
        if (reveal && typeof window !== 'undefined') {
            const split = new SplitText("#location-text", {
                type: "lines",
                linesClass: "lineChildren",
            });
            const splitParent = new SplitText("#location-text", {
                type: "lines",
                linesClass: "lineParent",
            });
            gsap.fromTo(
                split.lines,
                { y: 200 },
                {
                    duration: 1,
                    y: 0,
                    // opacity: 1,
                    stagger: 0.1,
                    ease: "power2",
                }
            );
        }
    }, [reveal]);

    return (
        <section className="footer" data-scroll-section>
            <SectionHeader title="Contact" />

            <div className="contact-card-container">
                <div className="contact-container-column">
                    <div className="contact-card">
                        <div className="contact-row1">
                            <p className="contact-row1-text">Information</p>
                        </div>
                        <div className="contact-row2">
                            <div className="contact-column1">
                                <div className="contact-row-even">Name</div>
                                <div className="contact-row-odd">Email</div>
                                <div className="contact-row-even">Phone</div>
                                <div className="contact-row-odd">Graduation</div>
                            </div>
                            <div className="contact-column2">
                                <div className="contact-row-even">Johann West</div>
                                <div className="contact-row-odd">johannwest@gmail.com</div>
                                <div className="contact-row-even">(931)-704-3785</div>
                                <div className="contact-row-odd">May 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-container-col">
                    <ul className="icons-wrapper">
                        <li>
                            <a
                                className="linkedin"
                                href="https://www.linkedin.com/in/johann-west-89960120b/"
                                target="_blank"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <img
                                    src="/linkedinblue.svg"
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                ></img>
                            </a>
                        </li>
                        <li>
                            <a
                                className="github"
                                href="https://github.com/johannwest7012/"
                                target="_blank"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <img
                                    src="/githubpink.svg"
                                    className="fa fa-github"
                                    aria-hidden="true"
                                ></img>
                            </a>
                        </li>
                    </ul>
                    <img className="vandyimg" src="/vandybig.png"></img>
                </div>
            </div>
        </section>
    );
}
