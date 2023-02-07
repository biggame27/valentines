'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  //defines sections in a document, makes padding god down.
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    //repeats animation everytime you scroll
    viewport={{ once:false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div /*set align, make things inside centered (relative x,y), list items in col, relative elements (change where they are around everyone else),appear above*/ className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 
        variants={textVariant(1.1)}
        className={styles.heroHeading}>
          Locked In
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>In</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>eeD</h1>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
