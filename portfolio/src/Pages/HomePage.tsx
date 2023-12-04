import React from 'react'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../store/store'
import { addPages, setCurrentPage } from '../store/routing/routingslice'
import useWindowResize from '../hooks/useWindowResize'


const HomePage = () => {
  const dispatch = useAppDispatch()
  const title = ["<", "t", "i", "t", "l", "e", ">", "G", "u", "g", "a", "'", "s", "", " ", "P", "o", "r", "t", "f", "o", "l", "i", "o", "<", "/", "t", "i", "t", "l", "e", ">"]
  const h1txt = [ "<", "-", "   ", "W", "e", "b", "‎ ‎ ‎ " , "D", "e", "v", "e", "l", "o", "p", "e", "r", "/", "-", ">" ]
  const Name = [ 'G', 'U', 'G', 'A', '  ‎  ‎ ', 'M', 'U', 'C', 'H', 'I', 'A', 'S', 'H', 'V', 'I', 'L', 'I']

  useEffect(() => {
    dispatch(setCurrentPage('MainPage'))
    dispatch(addPages('MainPage'))
  })

  const {height, width} = useWindowResize()

  console.log(width)
  
  return (
    <div id='HomePage'>
      <div className="head_text">
          {title.map((letter, i) => (
            <motion.h2 
            initial={{opacity : 0, x : -10}} 
            animate={{opacity : 1, x : 0}} 
            transition={{delay : i * 0.05, duration : 1, type : "spring", stiffness : 200, bounce : 1 }}>
              {letter}
            </motion.h2>
          ))}
      </div>
     <div className="Name_txt">
      {Name.map((lett, i) => (
        <motion.h1 
        initial={{opacity : 0}} 
        animate={{opacity : 1}} 
        transition={{delay : i * 0.1, duration : 1}}>{lett}</motion.h1>
      ))}
     </div>
      <div className="head_text">
          {h1txt.map((letter, i) => (
            <motion.h3 
            initial={{opacity : 0, x : -10}} 
            animate={{opacity : 1, x : 0}} 
            transition={{delay : i * 0.05, duration : 1, type : "spring", stiffness : 200, bounce : 1 }}>
              {letter}
            </motion.h3>
          ))}
      </div>
      <div className="HomePage_buttons">
        <motion.button initial={{scale : 0.5, y : -50, opacity : 0}} animate={{scale : 1, y : 0, opacity : 1}} transition={{delay : .8, duration : .6, ease: "easeIn"}}>About Me</motion.button>
        <motion.button initial={{scale : 0.5, y : -50, opacity : 0}} animate={{scale : 1, y : 0, opacity : 1}} transition={{delay : .821, duration : .6, ease: "easeIn"}}>My projects</motion.button>
      </div>
    </div>
  )
}

export default HomePage