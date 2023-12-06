import React from 'react'
import {motion} from 'framer-motion'

const Modal_Page = () => {
  return (
    <motion.div 
    id='nav_modul'
    initial={{x : -1200, y : -1500, borderRadius : "50%"}}
    animate={{x : 0, y : 0, borderRadius: ["50%", "50%", "50%", 0]}}
    transition={{duration : 1.1, delay : .1}}
    >modal</motion.div>
  )
}

export default Modal_Page