'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { TypingText } from '../components'

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10 gap-4`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} mx-auto flex flex-col gap-6 lg:flex-col`}
    >
      <TypingText title="| Just For You!" textStyles="text-center" />
      <div className={`flex gap-6 flex-col lg:flex-row`}>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-1 lg:max-w-[800px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Dear Angelina,
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Founder | Metaversus
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[18px] text-[18px] sm:leading-[45px] leading-[16px] text-white">
          "With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-[0.5] flex justify-center items-center"
      >
        <img 
          src="/planet-09.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
      </motion.div>
      </div>
      
    </motion.div>
  </section>
);

export default Feedback;
