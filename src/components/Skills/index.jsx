import React, { useState } from 'react';
import './style.scss'
import { test_skill, skills } from '../../constants';
import SectionHeader from '../SectionHeader';

const SkillCard = ({ title, text, logo, subtitle, bullets }) => {


    return (
      <div className="card transition">
        <div className='column'>
          <img src={logo} className='customimg'/>
        </div>
        <div className='column'>
          <h2 className="transition customh2">{title}</h2>
          <h3 className='transition customh3'>{subtitle}</h3>
        </div>
        
        {/* <div className='column'>
          <p className='transition customp'>{text}</p>
        </div> */}
        <div className='column bullet-container'>
          <p className='row transition bullet'>{bullets[0]}</p>
          <p className='row transition bullet'>{bullets[1]}</p>
          {bullets.length > 2 &&
                   <a href={bullets[2][1]} className='row transition bullet'>{bullets[2][0]}</a>}
         
        </div>
      </div>)

 

};


const Skills = () => { 
 
  return (
    <section data-scroll-section>
            <SectionHeader title="Skills" />

      <div className='cards-container'>

          {skills.map((card, index) => (
            <SkillCard
              key={index}
              title={card.title}
              text={card.text}
              logo={card.logo}
              subtitle={card.subtitle}
              bullets={card.bullets}
            />
          ))}
      </div>
    </section>
  ) 
};

export default Skills;
