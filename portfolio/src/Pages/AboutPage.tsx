import React, { useState } from 'react'
import {motion} from 'framer-motion'
import myimg from '../assets/back.png'

const AboutPage = () => {
  const [hoverlink, sethoverlink] = useState<string | null>('');
  const link = [
    ['fa-brands fa-instagram', 'Instagram', 'https://www.instagram.com/'],
    ['fa-brands fa-facebook', 'Facebook', 'https://www.facebook.com/profile.php?id=100010053016821'],
    ['fa-brands fa-linkedin', 'LinkedIn', 'https://www.linkedin.com/in/guga-muchiashvili-55a379286/'],
    ['fa-brands fa-github', 'GitHub', 'https://github.com/guga-ggw'],
  ];

  return (
    <div id="AboutPage">
      <div className="photo_container">
        <div className="photoshape">
          <img src={myimg} alt="" />
        </div>
        <div>
        <h2>&lt;h2&gt;Guga Muchiashvili&lt;/h2&gt;</h2>
        <h3>&lt;h3&gt;Georgia, Tbilisi 📍&lt;/h3&gt;</h3>
        </div>
 
      </div>
      <div className="info_about_container">

      </div>
      <div className="HomePage_Links">
        {link.map((item, i) => (
          <div key={item[1]}>
            <motion.div
              className="icon_list"
              onHoverStart={() => sethoverlink(item[1])}
              onHoverEnd={() => sethoverlink(null)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6, type: 'spring', stiffness: 100 }}
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
              {item[1] === hoverlink && (
                <motion.h2
                style={{color : "black"}}
                  id='hll'
                  initial={{ x: 20, borderTopRightRadius: 150, borderBottomRightRadius: 150 }}
                  animate={{ x: 5, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                  transition={{ type: 'spring', duration: .1, damping: 200 }}
                >
                  {link[i][1]}
                </motion.h2>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
