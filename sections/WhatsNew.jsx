'use client';

import { motion } from 'framer-motion';
//no brackets mean the default export is from one file, brackets mean itw as just export const
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.25}}
      //sets max width, centers a div, makes flex container (inflex)
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| IDKKKK" />
        <TitleText title={<>III LOVE YOUUUUUUUUU</>}/>
        {/*flex wrap is when the items are forced onto next line */}
        {<div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures
              key={feature.title}
              {...feature}
            />
          ))}
          </div>}
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/ilove.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
