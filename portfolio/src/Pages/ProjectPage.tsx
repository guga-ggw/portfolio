import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';
import airportImg from '../assets/airportsProject.png';
import CarImg from '../assets/carProject.png';
import NbaImg from '../assets/nbaProject.png';
import fitnessImg from '../assets/fitnesProject.png';

const ProjectPage = () => {
  type ProjectData = {
    name: string;
    description: string;
    img?: string;
    errormessage: string;
  };

  const ProjectData: ProjectData[] = [
    {
      name: "Airport Explorer",
      description: "Explore airports worldwide, including currency exchange functionality.",
      img: airportImg,
      errormessage: "",
    },
    {
      name: "Car Marketplace",
      description: "Discover and buy cars from others or showcase your own car models.",
      img: CarImg,
      errormessage: "This webpage will be ready soon",
    },
    {
      name: "NBA Stats Hub",
      description: "Check out player stats in the NBA across different years.",
      img: NbaImg,
      errormessage: "This webpage will be ready soon",
    },
    {
      name: "Fitness Companion",
      description: "Access workout programs focusing on specific muscles with subscription options.",
      img: fitnessImg,
      errormessage: "Not published",
    },
  ];

  const [modul, setModul] = useState<ProjectData | null>(null);


  return (
    <div id='ProjectPage'>
      {modul && 
      (<div id='project_modul'>
      <motion.h2 initial={{opacity : 0, y : -20}} animate={{y : 0, opacity : 1}}>{modul.errormessage}</motion.h2>
      <motion.button initial={{opacity : 0, y : -20}} animate={{y : 0, opacity : 1}} transition={{duration : .5, delay : .2}}  onClick={() => setModul(null)}>Okay</motion.button>
      </div>)
      
      }
      <h1 id='Project_txt'>Projects</h1>
      <div className="Project_list">
        {ProjectData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 * i, type: "spring", stiffness: 20 }}
            className="card_project"
          >
            <div className="img_over">
              <img src={item.img} alt="" />
            </div>
            <div className="desc_project_side">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <button onClick={(e) => {
                item.name !==  "Airport Explorer" ?  e.preventDefault() : ""
                  item.name !== "Airport Explorer" ? setModul(item) : null
                }}>
                  <a href={item.name === 'Airport Explorer' ? "https://airports-every.vercel.app/" : ""}>See</a>
                </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;