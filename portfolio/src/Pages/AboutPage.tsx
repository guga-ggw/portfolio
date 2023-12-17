import React, { useState } from 'react'
import {AnimatePresence, motion, useAnimation} from 'framer-motion'
import myimg from '../assets/back.png'
import useWindowResize from '../hooks/useWindowResize';

const AboutPage = () => {
  const [hoverlink, sethoverlink] = useState<string | null>('');
  const [transised, settransised] = useState<boolean>(false)
  const aboutText = [
    'Hey there!',
  'I\'m a 16-year-old who loves coding and making cool websites while dealing with high school life.',
  'I find joy in the creative side of coding, making things visually awesome.',
  'Even with school stuff, I\'m always working to get better at coding and keep up with the latest tech.',
  'Outside the digital world, I\'m into sports to keep things balanced and healthy.',
  'Strumming my guitar is my go-to creative outlet, adding a musical vibe to my life.',
  'I love learning, not just about code, but in everything I do.',
  'I\'m known for being curious and smart, and I dive into new things with excitement.',
  'Whether it\'s coding challenges or regular life stuff, I enjoy overcoming obstacles.',
  'In a nutshell, I\'m a dynamic person who loves tech, stays active, and is always up for new challenges.',
  'With coding, sports, and music guiding me, I\'m on a journey of constant growth and exploration.'
  ];
  const HeadText = ['W', 'h', 'o', ' ‎  ‎', 'a', 'm', ' ‎ ‎', 'I']
  const link = [
    ['fa-brands fa-instagram', 'Instagram', 'https://www.instagram.com/'],
    ['fa-brands fa-facebook', 'Facebook', 'https://www.facebook.com/profile.php?id=100010053016821'],
    ['fa-brands fa-linkedin', 'LinkedIn', 'https://www.linkedin.com/in/guga-muchiashvili-55a379286/'],
    ['fa-brands fa-github', 'GitHub', 'https://github.com/guga-ggw'],
  ];

  const controls = useAnimation();

  const handleButtonClick = () => {
    controls.start({
      marginLeft: '-172vw',
      opacity: 1,
      transition: { duration: 2, type: 'spring', stiffness: 28 },
    });
    settransised(true)
  };

  const BackClick =() => {
    controls.start({
      marginLeft: '0vw',
      opacity: 1,
      transition: { duration: 2, type: 'spring', stiffness: 28 },
    });
    settransised(false)
  }

  const {width, height} = useWindowResize()

  return (
    <div id="AboutPage">
       <motion.div
        id='first_abt'
        animate={controls}
      >
      <div className="photo_container">
        <motion.div 
        className="photoshape"
        initial={{ borderRadius: "80% 20% 55% 45% / 49% 51% 49% 51%" }}
        animate={{
          borderRadius:  "60% 40% 35% 45% / 49% 51% 29% 51%",

        }}
        transition={{ duration: .5, damping: 125, ease: "easeInOut" }}
      >
          <motion.img 
          initial={{opacity : 0, y : -20}}
          animate={{opacity :1, y : 0}}
          transition={{duration : 1.2}}
          src={myimg} alt="" />
        </motion.div>
        <div>
        <motion.h2 initial={{x : -140, opacity : 0}} animate={{x : -20, opacity : 1,}} transition={{duration : 1.6, delay : .5, type : "spring", stiffness : 12}}>&lt;h2&gt;Guga Muchiashvili&lt;/h2&gt;</motion.h2>
        <motion.h3 initial={{x : -140, opacity : 0}} animate={{x : -20, opacity : 1,}} transition={{duration : 1.6, delay : .7, type : "spring", stiffness : 12}}>📍 Georgia, Tbilisi </motion.h3>
        </div>
 
      </div>
      {transised == false ? (
        <div className="info_about_container">
        <div className="heading_txt_about">
        {HeadText.map((item, i) => (
            <motion.h1 initial={{opacity : 0, x : -20}} animate={{opacity : 1, x : 0}} transition={{duration : .3, delay : .2 * i}}>{item}</motion.h1>
          ))}
        </div>
          <div className="about_me_txt">
            {aboutText.map((item, i) => (
              <motion.p
              initial={{x : -10, opacity : 0}}
              animate={{x : 0, opacity : 1}}
              transition={{duration : .1, delay : 0.09 * i, type : "spring", stiffness : 7}}
              >{item}</motion.p>
            ))}
          </div>

          <motion.button
          onClick={() => handleButtonClick()}
           initial={{y : -20, opacity : 0}} 
           animate={{y : 0, opacity : 1}} 
           transition={
            {duration : .1, delay : 2, type : "spring", stiffness : 156}}>
              My experience →
              </motion.button>
          </div>
      ) : ""}
      
      </motion.div>
      
      <motion.div id='Second_abt'
      drag ={Number(width) < 800 ? "y" : false}
      dragConstraints={{top : -1200, bottom : 0}}
      >
        {transised && (
          <>
          <motion.button initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 1, duration : 1}} id='back_button' onClick={() => BackClick()}>←  Back</motion.button>
          <div className="education_side">
          <motion.h2 initial={{opacity : 0, y : -20}} animate={{opacity : 1, y :0}} transition={{delay : 1.5, duration : .7}}>Experience</motion.h2>
          <motion.div initial={{height : 0, opacity : 0}} animate={{height : "75%", opacity : 1 }} transition={{duration : 1, delay : 1}}  className="content_side">
            <motion.div initial={{opacity : 0, }} animate={{opacity : 1, y : 0, x : -12}} transition={{duration : 1, delay : 2}}></motion.div>
            <motion.div initial={{opacity : 0, }} animate={{opacity : 1, y : 0, x : -12}} transition={{duration : 1, delay : 2.2}}></motion.div>
            <motion.div initial={{opacity : 0, }} animate={{opacity : 1, y : 0, x : -12}} transition={{duration : 1, delay : 2.4}}></motion.div>
          </motion.div>
              <motion.div  initial={{opacity : 0, y : -40}} animate={{opacity : 1, y : 0}} transition={{duration : .7, delay : 2}} id='cont_exp'>
                <motion.h3 initial={{opacity : 0, x : -20, y : -20}} animate={{opacity : 1, y :0, x : 0,}} transition={{duration : 1, delay : 2.5}}>Scrimba React Course (dec 2021 - jan 2022)</motion.h3>
                <motion.p initial={{opacity : 0, y : -10}} animate={{opacity : 1, y : 0}} transition={{delay : 2.5, duration : 1.7, type : "spring" ,stiffness: 55}}> 
                My initial encounter with React was 
                enchanting, sparking a love for web development. 
                Exploring its elegant syntax and capabilities, 
                I immersed myself in a learning style that not only taught me U
                I basics but also shaped my problem-solving approach. This delightful
                 journey, guided by motion and
                 transitions, became the foundation of my love affair with React.
                  </motion.p>
              </motion.div>
              <motion.div initial={{opacity : 0, y : -40}} animate={{opacity : 1, y : 0}} transition={{duration : .7, delay : 2.2}} id='cont_exp'>
                <motion.h3 initial={{opacity : 0, x : -20, y : -20}} animate={{opacity : 1, y :0, x : 0,}} transition={{duration : 1, delay : 2.5}}>Meta Fronted Course (jun 2022 - aug 2022)
                </motion.h3>
                <motion.p initial={{opacity : 0, y : -10}} animate={{opacity : 1, y : 0}} transition={{delay : 2.5, duration : 1.7, type : "spring" ,stiffness: 55}}>
                This course holds a special place in my journey as it became more than just a frontend exploration. 
                It unfolded the intricacies of webpage structures, providing a profound understanding of web development. 
                The knowledge gained extended beyond the surface, 
                delving into the complexities of this craft. It was a challenging yet enriching experience, 
                paving the way for a holistic comprehension of not just the frontend, but the entire web development landscape.
                </motion.p>
              </motion.div>
              <motion.div initial={{opacity : 0, y : -40}} animate={{opacity : 1, y : 0}} transition={{duration : .7, delay : 2.4}} id='cont_exp'>
                <motion.h3 initial={{opacity : 0, x : -20, y : -20}} animate={{opacity : 1, y :0, x : 0,}} transition={{duration : 1, delay : 2.5}}>Skillwill Frontend Course (jun 2023 - sep 2023)</motion.h3>
                <motion.p initial={{opacity : 0, y : -10}} animate={{opacity : 1, y : 0}} transition={{delay : 2.5, duration : 1.7, type : "spring" ,stiffness: 55}}>
                This course stands as the most pivotal in my life. Through it, I delved deep into the realms of React and React Native, unlocking a wealth of knowledge. Skillwill Academy not only provided the tools for mastering these technologies but also instilled in me the confidence to craft exceptional webpages with React. It's here that I not only learned but thrived, earning the honor of becoming the Top Student in the academy.
                  </motion.p>
              </motion.div>
        </div>
        <div className="myexperience_side">
          <motion.h2 initial={{opacity : 0, y : -20}} animate={{opacity : 1, y :0}} transition={{delay : 1.5, duration : .7}}>Education</motion.h2>
        <motion.div initial={{height : 0, opacity : 0}} animate={{height : "75%", opacity : 1 }} transition={{duration : 1, delay : 1}}  className="content_side">
            <motion.div initial={{opacity : 0,}} animate={{opacity : 1, y : 0, x : -12}} transition={{duration : 1, delay : 2}}></motion.div>
            <motion.div initial={{opacity : 0,}} animate={{opacity : 1, y : 0, x : -12}} transition={{duration : 1, delay : 2.2}}></motion.div>
            <motion.div initial={{opacity : 0, }} animate={{opacity : 1, y : 0, x : -12}} transition={{duration : 1, delay : 2.4}}></motion.div>
          </motion.div>
          <motion.div  initial={{opacity : 0, y : -40}} animate={{opacity : 1, y : 0}} transition={{duration : .7, delay : 2}} id='cont_exp'>
                <motion.h3 initial={{opacity : 0, x : -20, y : -20}} animate={{opacity : 1, y :0, x : 0,}} transition={{duration : 1, delay : 2.5}}>School (2014 - 2026)</motion.h3>
                <motion.p initial={{opacity : 0, y : -10}} animate={{opacity : 1, y : 0}} transition={{delay : 2.5, duration : 1.7, type : "spring" ,stiffness: 55}}> 
                Beyond writing code and playing guitar, my school life is a significant and thriving part of my journey. 
                I excel in my studies and have been recognized through various programs, 
                even receiving a laptop from school. These academic achievements, 
                coupled with my dedication to self-improvement, 
                shape a well-rounded aspect of my life. School, 
                with its opportunities and support, 
                is an integral part of my ongoing learning and growth.
                </motion.p>
              </motion.div>
              <motion.div initial={{opacity : 0, y : -40}} animate={{opacity : 1, y : 0}} transition={{duration : .7, delay : 2.2}} id='cont_exp'>
                <motion.h3 initial={{opacity : 0, x : -20, y : -20}} animate={{opacity : 1, y :0, x : 0,}} transition={{duration : 1, delay : 2.5}}>Aisi Camp (jun 2023)</motion.h3>
                <motion.p initial={{opacity : 0, y : -10}} animate={{opacity : 1, y : 0}} transition={{delay : 2.5, duration : 1.7, type : "spring" ,stiffness: 55}}>
                Participating in Aisi Camp stands out as one of the most challenging yet 
                rewarding experiences of my life. Being chosen for this program, 
                my objective was to enhance my skills in survival and logical problem-solving 
                situations. 
                The journey proved demanding, but I thrived and performed exceptionally well, 
                turning it into an incredibly fun and fulfilling endeavor.
                </motion.p>
              </motion.div>
              <motion.div initial={{opacity : 0, y : -40}} animate={{opacity : 1, y : 0}} transition={{duration : .7, delay : 2.4}} id='cont_exp'>
                <motion.h3 initial={{opacity : 0, x : -20, y : -20}} animate={{opacity : 1, y :0, x : 0,}} transition={{duration : 1, delay : 2.5}}>Nantes exchange Program (aug 2023)</motion.h3>
                <motion.p initial={{opacity : 0, y : -10}} animate={{opacity : 1, y : 0}} transition={{delay : 2.5, duration : 1.7, type : "spring" ,stiffness: 55}}>
                The Nantes exchange program marked a life-changing chapter for me. Among 15 chosen students from Georgia, I embarked on a journey to France, where we gathered in Nantes. There, we connected with children from various countries and collaborated on impactful projects. This unique experience broadened my horizons and left an indelible mark on my personal and cultural growth.

                </motion.p>
              </motion.div>
        </div></>
        )}
      </motion.div>

      <div className="HomePage_Links">
        {link.map((item, i) => (
          <div key={item[1]}>
            <motion.div
              className="icon_list"
              onHoverStart={() => sethoverlink(item[1])}
              onHoverEnd={() => sethoverlink(null)}
              initial={{ opacity: 0, y: -10, zIndex : 100}}
              animate={{ opacity: 1, y: 0, zIndex : 200 }}
              transition={{ delay: 0.2 * i, duration: .5, type: 'spring', stiffness: 47 }}
            >
              <motion.a
              id='contact_icon'
                href={item[2]}
                target="_blank"
                rel="noopener noreferrer"
                className={`${item[0]}`}
              >
              </motion.a>
            </motion.div>
            <motion.div
              className="icon_list_txt"
              initial={{  opacity: 0 ,}}
              transition={{ duration: 1 }}
              animate={{   opacity: 1 }}
            >
              <AnimatePresence>

              {item[1] === hoverlink && (
                <motion.h2
                style={{color : "black"}}
                  id='hll'
                  exit={{opacity : 0, scale : .4, x : 180, borderRadius : 150}}
                  initial={{ x: 160, y : -50, borderTopRightRadius: 150, borderBottomRightRadius: 150 }}
                  animate={{ x: 140, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                  transition={{ type: 'spring', duration: .1, damping: 20 }}
                >
                  {link[i][1]}
                </motion.h2>
              )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default AboutPage;
