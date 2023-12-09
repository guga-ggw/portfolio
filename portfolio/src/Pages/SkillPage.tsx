import React, { useState } from 'react'
import { useAppDispatch } from '../store/store'
import {motion} from 'framer-motion'
import useWindowResize from '../hooks/useWindowResize';

const SkillPage = () => {
  type Skill = [string, number];

  const [hoverlink, sethoverlink] = useState<string | null>('')
    const skills: Skill[] = [
      ['HTML', 90],
      ['CSS', 85],
      ['Javascript', 80],
      ['Typescript', 65],
      ['React', 85],
      ['SASS', 70],
      ['Framer Motion', 60],
      ['Git', 50],
      ['Redux', 85],
      ['Communication', 95],
    ];
  const dispatch = useAppDispatch()
  const {width} = useWindowResize()

  console.log(width)

  const calculateDragConstraints = () => {
    const minWidth = 800;
    const mediumWidth = 1070;
  
    const topConstraint = Number(width) < 700 ? -2900 : Number(width) < minWidth ? -1100 : Number(width) < mediumWidth ? -800 : Number(width) < 1600 ? -700 : 0;
    const bottomConstraint = Number(width) < 700 ? 20 : Number(width) < mediumWidth ? 200 : Number(width) < 1400 ? 200 : 50;

    console.log(topConstraint)
  
    return { top: topConstraint, bottom: bottomConstraint };
  };

  return (
    <div id='SkillPage'>
      <div className="header_txt">
        <motion.h1 initial={{opacity : 0, y : -50,}} 
        animate={{opacity : 1, y : 0,}}
        transition={{duration : .4, delay : .4, damping : 8, type : "spring"}}
        >My Skills</motion.h1>
      </div>
      <div className="drag_overflow">
          <motion.div 
          drag ="y"
          dragConstraints={calculateDragConstraints()}
          className="skill_list">
          {skills.map((item, i) => (
      <div id='circle'>
        <div className="outer">
          <div className="inner">
            <motion.div initial={{opacity : 0, y : -10}} animate={{opacity :1, y :0}} transition={{delay : 0.25 * i, duration : 1}} className="procent">
              {item[1]}%
            </motion.div>
          </div>
        </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="165px">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="rgb(124, 74, 1)" />
              <stop offset="100%" stop-color="rgb(255, 175, 55)" />
            </linearGradient>
          </defs>
          <motion.circle
          transition={{ duration: 1.5, delay: 0.1 * i }}
          initial={{ opacity: 0, strokeDasharray: 472, strokeDashoffset: 472 }}
          animate={{ opacity: 1, strokeDashoffset: 472 - (472 / 110) * item[1] }}
          cx="80" cy="85" r="70" strokeLinecap="round"
          stroke="url(#GradientColor)" strokeWidth="15" fill="transparent"
        />

        </svg>
        <motion.h2 initial={{opacity : 0, y : -20}} animate={{opacity : 1, y : 0}} transition={{delay : 0.15 * i, duration : 1,}}>{item[0]}</motion.h2>
      </div>
    ))}
      </motion.div>
      </div>
      
    </div>
  )
}

export default SkillPage