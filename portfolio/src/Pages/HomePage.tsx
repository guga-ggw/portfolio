import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../store/store';
import { addPages, setCurrentPage } from '../store/routing/routingslice';
import useWindowResize from '../hooks/useWindowResize';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [hoverlink, sethoverlink] = useState<string | null>('');
  const link = [
    ['user', 'About me', 'AboutPage'],
    ['code', 'my skills', 'SkillsPage'],
    ['list-check', 'my projects', 'ProjectsPage'],
  ];
  const title = [
    '<',
    't',
    'i',
    't',
    'l',
    'e',
    '>',
    'G',
    'u',
    'g',
    'a',
    "'",
    's',
    '',
    ' ',
    'P',
    'o',
    'r',
    't',
    'f',
    'o',
    'l',
    'i',
    'o',
    '<',
    '/',
    't',
    'i',
    't',
    'l',
    'e',
    '>',
  ];
  const h1txt = [
    '<',
    '-',
    '   ',
    'W',
    'e',
    'b',
    '‎ ‎ ‎ ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '/',
    '-',
    '>',
  ];
  const Name = [
    'G',
    'U',
    'G',
    'A',
    '  ‎  ‎ ',
    'M',
    'U',
    'C',
    'H',
    'I',
    'A',
    'S',
    'H',
    'V',
    'I',
    'L',
    'I',
  ];

  useEffect(() => {
    dispatch(setCurrentPage('MainPage'));
    dispatch(addPages('MainPage'));
  }, [dispatch]);

  const setcurrent = (page: string) => {
    dispatch(setCurrentPage(page));
    dispatch(addPages(page));
  };

  return (
    <div id="HomePage">
      <div className="head_text">
        {title.map((letter, i) => (
          <motion.h2
            key={`title-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.05,
              duration: 1,
              type: 'spring',
              stiffness: 200,
              bounce: 1,
            }}
          >
            {letter}
          </motion.h2>
        ))}
      </div>
      <div className="Name_txt">
        {Name.map((lett, i) => (
          <motion.h1
            key={`name-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 1 }}
          >
            {lett}
          </motion.h1>
        ))}
      </div>
      <div className="head_text">
        {h1txt.map((letter, i) => (
          <motion.h3
            key={`h1txt-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.05,
              duration: 1,
              type: 'spring',
              stiffness: 200,
              bounce: 1,
            }}
          >
            {letter}
          </motion.h3>
        ))}
      </div>
      <div className="HomePage_Links">
        {link.map((item, i) => (
          <AnimatePresence key={i}>
            <motion.div
              className="icon_list"
              onHoverStart={() => sethoverlink(item[1])}
              onHoverEnd={() => sethoverlink(null)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * i,
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <motion.i
                className={`fa-solid fa-${item[0]}`}
                onClick={() => setcurrent(item[2])}
              ></motion.i>
            </motion.div>
            {item[1] === hoverlink && (
            <motion.div
              key={`text-${i}`}
              className="icon_list_txt"
              initial={{ width: 0, opacity: 0, x : -95, borderRadius : 20 }}
              transition={{ duration: 1 }}
              animate={{ width: 100, opacity: 1, x : -10, borderRadius : 20 }}
              exit={{ opacity: 0, x :20, borderRadius : "50%" }}
            >
              {link.map((linkItem, linkIndex) => (
                <motion.h2
                  key={`h2-${linkIndex}`}
                  initial={{
                    x : 140,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    opacity: linkItem[1] === hoverlink ? 1 : 0,
                    width : 0,
                    y: linkItem[0] == "user" ? -25 : linkItem[0] == "code" ? 135 : 295
                  }}
                  animate={{
                    x: 5,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    opacity: linkItem[1] === hoverlink ? 1 : 0,
                    width : 150,
                  }}
                  transition={{ type: 'spring', duration: 1, damping: 11 }}
                >
                  {linkItem[1]}
                </motion.h2>
              ))}
            </motion.div>
          )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default HomePage;