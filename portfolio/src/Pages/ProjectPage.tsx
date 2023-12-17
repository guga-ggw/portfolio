import React, { ReactComponentElement, useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import airportImg from '../assets/airportsProject.png'
import CarImg from '../assets/carProject.png'
import NbaImg from '../assets/nbaProject.png'
import fitnessImg from '../assets/fitnesProject.png'
import {motion} from 'framer-motion'

const ProjectPage = () => {
  type data = {
    name : string,
    description : string,
    img?: string, 
    errormessage : string,
  }
  const ProjectData: data[] = [
    {
      name: "Airport Explorer",
      description: "Explore airports worldwide, including currency exchange functionality.",
      img: airportImg,
      errormessage : ""
    },
    {
      name: "Car Marketplace",
      description: "Discover and buy cars from others or showcase your own car models.",
      img: CarImg,
      errormessage : "this Webpage will be ready soon"
    },
    {
      name: "NBA Stats Hub",
      description: "Check out player stats in the NBA across different years.",
      img: NbaImg,
      errormessage : "this Webpage will be ready soon"
    },
    {
      name: "Fitness Companion",
      description: "Access workout programs focusing on specific muscles with subscription options.",
      img: fitnessImg,
      errormessage : "not published"
    },
  ]

  const []


  return (
    <div id='ProjectPage'>
      <h1 id='Project_txt'>Projects</h1>
      <div className="Project_list">
        {ProjectData.map((item, i) => (
          <motion.div key={i} initial={{opacity : 0, y : -40}} animate={{opacity : 1, y : 0}} transition={{duration : .7, delay : 0.2 * i, type : "spring", stiffness : 20 }} className="card_project">
            <div className="img_over">
            <img src={item.img} alt="" />
            </div>
              <div className="desc_project_side">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>

                  <button><a href={item.name == 'Airport Explorer' ?  }>See</a></button>
              </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;;