'use client';
import { motion } from 'framer-motion';
//no brackets mean the default export is from one file, brackets mean itw as just export const
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="| Places I Wanna Go With You" textStyles="text-center" />
      <TitleText title={<>And maybe I don't have the money neow, but here's where I'd take u</>} textStyles="text-center"/>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        initial="hidden"
        whileInView="show"
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img 
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-[150px] right-[300px] w-[40px] h-[40px] p-[6px] rounded-full">
          <img
            src="place.png" alt = "people"
            className="object-cover"
          />
        </div>
        <div className="absolute top-[80px] left-[500px] w-[40px] h-[40px] p-[6px] rounded-full">
          <img
            src="place.png" alt = "people"
            className="object-cover"
          />
        </div>
        <div className="absolute top-[130px] right-[280px] w-[40px] h-[40px] p-[6px] rounded-full">
          <img
            src="place.png" alt = "people"
            className="object-cover"
          />
        </div>
        <div className="absolute top-[130px] right-[250px] w-[40px] h-[40px] p-[6px] rounded-full">
          <img
            src="place.png" alt = "people"
            className="object-cover"
          />
        </div>
        <div className="absolute top-[130px] right-[250px] w-[40px] h-[40px] p-[6px] rounded-full">
          <img
            src="place.png" alt = "people"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-[75px] right-[65px] w-[40px] h-[40px] p-[6px] rounded-full">
          <img
            src="place.png" alt = "people"
            className="object-cover"
          />
        </div>
        <div className="absolute top-[115px] left-[220px] w-[40px] h-[40px] p-[6px] rounded-full">
          <img
            src="place.png" alt = "people"
            className="object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
