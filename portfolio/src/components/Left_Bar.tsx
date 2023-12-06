import React, { useState } from 'react'
import globe from '../assets/globe.png'
import {motion} from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../store/store'
import { addPages, setCurrentPage, togglemodal } from '../store/routing/routingslice'
import Modal_Page from './modal'

const Left_Bar = () => {
  const [showFiles, setshowFiles] = useState(true)
  const current = useAppSelector((store) => store.routing.currentPage)
  const dispatch = useAppDispatch()
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const modal = useAppSelector((state) => state.routing.modal)

  const setcurrent = (page : string) => {
    dispatch(setCurrentPage(page))
    dispatch(addPages(page))
  }

  const icons = ["guitar", "futbol", "earth-americas", "landmark" ]
  const hobbyTexts = [
    "Guitar has become a significant part of my life; I've been playing for over three years now.",
    "Football is a hobby that brings me joy every time. I've loved playing it since childhood, and it has become a passion of mine.",
    "Geography and Geopolitics represent another facet of my interests. I find myself immersed in these subjects, constantly reading the news to stay informed.",
    "History, a subject that continually amazes me, serves as proof that the world and its past are truly extraordinary. My love for history blossomed through exploring the rich tapestry of my home country, Georgia. From there, I delved into world history, discovering the fascinating narratives that shape our global heritage."
  ];
  return (
    <div id='Left_Bar'>
       <div className="add_side">
       <motion.div className="icon-container">
          <motion.i
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6, type: 'spring', stiffness: 100 }}
            className={`fa-solid fa-copy`}
          ></motion.i>
        </motion.div>
      {icons.map((item, i) => (
        <motion.div key={item} className="icon-container">
          <motion.i
            onHoverStart={() => setHoveredIcon(item)}
            onHoverEnd={() => setHoveredIcon(null)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6, type: 'spring', stiffness: 100 }}
            className={`fa-solid fa-${item}`}
          ></motion.i>
         {typeof hoveredIcon == 'string' && (
          <motion.div
          className="tooltip"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ opacity: 1 }}
        >
          {hoveredIcon === item && <h2>{hobbyTexts[i]}</h2>}
        </motion.div>
         )} 
        </motion.div>
      ))}
    </div>
      <div className="heading_files">
      {modal ? (<motion.h2 
      id='x_icon' 
      onClick={() => dispatch(togglemodal())}
      initial={{opacity : 0, y : -20}} 
      animate={{opacity : 1, y : 0}} 
      transition={{duration : 1.4, type : "spring"}}
      >X
      
      </motion.h2>
      ) 
      : (
      <motion.i 
      initial={{opacity : 0, y : -20}} 
      animate={{opacity : 1, y : 0}} 
      transition={{duration : 1.5, type : "spring"}} 
      id='menu_icon' 
      className="fa-solid fa-bars" 
      onClick={() => dispatch(togglemodal())}>

      </motion.i>
      )}
        <div className="heading_txt">
        {showFiles ? (<i className="fa-solid fa-angle-down" onClick={() => setshowFiles(!showFiles)}></i>) : (<i className="fa-solid fa-angle-up"onClick={() => setshowFiles(!showFiles)}></i>)}
        <h2 style={{color : 'white'}}>Portfolio</h2>
        </div>
        {showFiles && (<div className="file_list">
        <motion.div
          initial={{ opacity : 0, x : -50 }}
          whileHover={{ background: "rgba(255, 175, 55, 0.137)", }}
          animate={{background : current == "MainPage" ? "rgba(255, 175, 55, 0.137)" : "", opacity : 1, x : 0 }}
          exit={{ background: "transparent" }}
          transition={{ duration: 0.4, delay : 0.025, type : "spring", stiffness : 200 }}
          id={current == "MainPage" ?  "targeted_tag" : ""}
          onClick={() => setcurrent("MainPage")}
        >
          <i className="fa-brands fa-html5" style={{ color: "#E44D26" }}></i>
          <h5>Main.html</h5>
        </motion.div>
        <motion.div
         initial={{ background: "transparent", opacity : 0, x : -50 }}
         whileHover={{ background: "rgba(255, 175, 55, 0.137)", transition : {delay : 0} }}
         animate={{background : current == "AboutPage" ? "rgba(255, 175, 55, 0.137)" : "", opacity : 1, x : 0 }}
          exit={{ background: "transparent" }}
          transition={{ duration: 0.4, delay : 0.05, type : "spring", stiffness : 200 }}
          id={current == "AboutPage" ?  "targeted_tag" : ""}
          onClick={() => setcurrent("AboutPage")}
        >
          <i className="fa-brands fa-css3-alt" style={{ color: "#0097DD" }}></i>
          <h5>About.css</h5>
        </motion.div>
        <motion.div
         initial={{ background: "transparent", opacity : 0, x : -50 }}
         whileHover={{ background: "rgba(255, 175, 55, 0.137)", transition : {delay : 0} }}
         animate={{background : current == "ProjectsPage" ? "rgba(255, 175, 55, 0.137)" : "", opacity : 1, x : 0 }}
          exit={{ background: "transparent" }}
          transition={{ duration: 0.4, delay : 0.075, type : "spring", stiffness : 200 }}
          onClick={() => setcurrent("ProjectsPage")}
          id={current == "ProjectsPage" ?  "targeted_tag" : ""}
        >
          <i className="fa-brands fa-react" style={{ color: "lightblue" }}></i>
          <h5>Projects.jsx</h5>
        </motion.div>
        <motion.div
          initial={{ background: "transparent", opacity : 0, x : -50 }}
          whileHover={{ background: "rgba(255, 175, 55, 0.137)", transition : {delay : 0} }}
          animate={{ background: current == 'SkillsPage' ? "rgba(255, 175, 55, 0.137)" : "transparent" , opacity : 1, x : 0 }}
          exit={{ background: "transparent" }}
          transition={{ duration: 0.1, delay : 0.1, type : "spring", stiffness : 200 }}
          onClick={() => setcurrent("SkillsPage")}
          id={current == "SkillsPage" ?  "targeted_tag" : ""}
        >
          <i className="fa-brands fa-react" style={{ color: "lightblue" }}></i>
          <h5>skills.jsx</h5>
        </motion.div>
        
        </div>)}
        
      </div>
    </div>
  )
}

export default Left_Bar