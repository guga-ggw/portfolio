import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

const ProjectPage = () => {
  const tar = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: tar, offset: ['start', 'end'] });
  const txtTransform = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div id='ProjectPage' ref={tar} style={{ height: '100vh', overflowY: 'auto' }}>
      <motion.div style={{ paddingLeft: txtTransform }} className="projectPage_txt">
        <h1 id='starting_txt'>Projects</h1> <h1>Fitness App</h1> <h1>Ecommerce Car</h1> <h1>Planets</h1>
      </motion.div>
    </div>
  );
};

export default ProjectPage;