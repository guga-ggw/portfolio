import React from 'react'
import {motion} from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../store/store'
import { addPages, setCurrentPage, togglemodal } from '../store/routing/routingslice'
import useWindowResize from '../hooks/useWindowResize'

const Modal_Page = () => {

  const current = useAppSelector((store) => store.routing.currentPage)
  const dispatch = useAppDispatch()

  const setcurrent = (page : string) => {
    dispatch(setCurrentPage(page))
    dispatch(addPages(page))
    dispatch(togglemodal())
  }

  const {height, width} = useWindowResize()

  return (
    typeof width == "number" && width < 900 ? (
      <motion.div 
    id='nav_modul'
    initial={{x : -1200, y : -1500, borderRadius : "50%"}}
    animate={{x : 0, y : 0, borderRadius: ["50%", "50%", "50%", 0]}}
    transition={{duration : 1.1, delay : .1}}
    >
      <div className="file_list">
        <motion.div
          initial={{ opacity : 0, x : -50 }}
          whileHover={{ background: "rgba(255, 175, 55, 0.137)", }}
          animate={{background : current == "MainPage" ? "rgba(255, 175, 55, 0.137)" : "", opacity : 1, x : 0 }}
          exit={{ background: "transparent" }}
          transition={{ duration: 0.4, delay : 1.525, type : "spring", stiffness : 200 }}
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
          transition={{ duration: 0.4, delay : 1.75, type : "spring", stiffness : 200 }}
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
          transition={{ duration: 0.4, delay : 1.975, type : "spring", stiffness : 200 }}
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
          transition={{ duration: 0.1, delay : 2.1, type : "spring", stiffness : 200 }}
          onClick={() => setcurrent("SkillsPage")}
          id={current == "SkillsPage" ?  "targeted_tag" : ""}
        >
          <i className="fa-brands fa-react" style={{ color: "lightblue" }}></i>
          <h5>skills.jsx</h5>
        </motion.div>
        
        </div>
    </motion.div>
    ) : ""
    
  )
}

export default Modal_Page