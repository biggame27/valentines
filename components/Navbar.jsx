'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    //py-8 represents y padding, relative is position according to normall flow and offsets are calculated
    className={`${styles.xPaddings} py-8 relative`}
  >
    
    <div /*inset covers whole element, absolute width makes the div smaller*/className="absolute w-[50%] inset-0 gradient-01" />
    <div /*makes the div go all the way through, centers element, makes items inside a list, make equal space,make gap*/className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        //object-contain makes the thing contain insuide
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">ANGELINA</h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
