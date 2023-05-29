import React from 'react'
import './style.scss';

export default function SectionHeader({title, type = "1"}) {
  var class_name = 'section-header';
  if (type === "2") {
    class_name = 'section-header2';
  }
  else if (type === "3") { 
    class_name = 'section-header3';
  }
  return (
    <h6 className={class_name}>
      {title}
    </h6>
  )
}
