'use client';

import { motion } from 'framer-motion';
//imports strings wit commands
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  //defines sections in a document, makes padding god down.
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    //repeats animation everytime you scroll, amount is how much of the element needs to be there
    viewport={{ once:false, amount: 0.25}}
    //use `${name}` to implement outter string into styles code
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div /*set align, make things inside centered (relative x,y), list items in col, relative elements (required when putting a z element, keeps everything same),appear above*/ className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 
        variants={textVariant(0.5)}
        className={styles.heroHeading}>
          God Fucking
        </motion.h1>
        <motion.div
          variants={textVariant(0.7)}
          className="flex flex-row justify-center items-center"
        >
          {/*<h1 className={styles.heroHeading}>In</h1> */}
          
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>ammit</h1>
        </motion.div>
      </div>
    </motion.div>
    <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      //margin top gives space, negative moves it up, relative makes it 
      className="relative w-full md:-mt-[20px] -mt-[12px]"
    >
      <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]"/>
      <img
        src="/cover.png"
        alt="cover"
        className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-1 relative"
      />

      <a href="#explore">
        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
          <img
            src='/stamp.png'
            alt="stamp"
            className="sm:w-[155px] w-[100px] sm:h[155px] h-[100px] object-contain"
          />
        </div>
      </a>

    </motion.div>
  </section>
);

export default Hero;
