import { staggerContainer, textVariant } from '../../utils/motion'
import React from "react";
import { styles } from './style2'
import { experiences } from "../../constants";

import "./style.scss";
import SectionHeader from "../SectionHeader";




import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

import 'react-vertical-timeline-component/style.min.css'



// const SectionWrapper = (Component, idName) => 
// function HOC() {
//     return ( 
//         <motion.section
//             variants={staggerContainer()}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once:true, amount: 0.25}}
//             className="padding"
//         >
//             <span className='hash-span' id={idName}>
//                 &nbsp;
//             </span>
//             <Component /> 
//         </motion.section>
//     )
// }



const ExperienceCard = ({experience}) => (

    <VerticalTimelineElement
      contentStyle={{background:'black', color: '#fff'}}
      contentArrowStyle={{borderRight:'7px solid black'}}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, boxShadow: 'white 0px 0px 0px 5px' }}
      icon= {
        <div className="icondiv">
          <img 
            src={experience.icon} 
            alt={experience.company_name}
            className="iconimg"   
          />
        </div>
      }
    >
      <div> 
        <h3 className="jobTitle">{experience.title}</h3>
        <p className="companyName" style={{ margin:0 }}>{experience.company_name}</p>
      </div>
  
      <ul className="exPointsList">
        {experience.points.map((point,index) => (
          <li 
            key={`experience-point-${index}`}
            className="exPoints"  
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>

  )
  
  
  const Experience = () => {
    return (
    <section className="header-container" data-scroll-section>
        <SectionHeader title="Experience" />
  
        <div className="vtdiv">
          <VerticalTimeline
            lineColor={'black'}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience}/>
              )
            )}
          </VerticalTimeline>
        </div>
    </section>
    )
  }
  
  export default Experience