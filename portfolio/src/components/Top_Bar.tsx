import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../store/store';
import { motion } from 'framer-motion';
import { addPages, deletePages, setCurrentPage } from '../store/routing/routingslice';

const Top_Bar: React.FC = () => {
  const pages = useAppSelector((state) => state.routing.pages);
  const current = useAppSelector((state) => state.routing.currentPage);
  const dispatch = useAppDispatch();

  const close = (page: string, type: string) => {
    type === 'add' ? dispatch(addPages(page)) : dispatch(deletePages(page !== "MainPage" ? page : ""));
    dispatch(setCurrentPage(type === 'add' ? page : 'MainPage'));
  };

  const handleXClick = (e: React.MouseEvent<HTMLParagraphElement>, page: string) => {
    e.stopPropagation();
    close(page, 'close');
  };

  return (
    <motion.div id='Top_Bar' >
      <motion.div 
      className="pages_drag"
      drag="x"
      dragDirectionLock={true}
      dragConstraints={{ left: 0, right: -150}}
      >
      {pages.map((page) => (
        <motion.div
          key={page} 
          initial={{ x: -1600, zIndex: 0 }}
          animate={{
            x: 0,
            zIndex: 100,
            background: current === page ? 'rgba(38, 38, 38, 0.742)' : '',
          }}
          onClick={() => close(page, 'add')}
          transition={{ delay: 0.1, duration: .4 }}
          id='tag_modul'
        >
          {page === 'MainPage' ? (
            <i className='fa-brands fa-html5' style={{ color: '#E44D26' }}></i>
          ) : page === 'AboutPage' ? (
            <i className='fa-brands fa-css3-alt' style={{ color: '#0097DD' }}></i>
          ) : page === 'ProjectsPage' ? (
            <i className='fa-brands fa-react' style={{ color: 'lightblue' }}></i>
          ) : (
            <i className='fa-brands fa-react' style={{ color: 'lightblue' }}></i>
          )}{' '}
          <h1>{page}</h1>
          <p onClick={(e) => handleXClick(e, page)}>x</p>
        </motion.div>
      ))}
      </motion.div>
    </motion.div>
  );
};

export default Top_Bar;