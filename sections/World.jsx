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
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center"/>
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

        <div className="absolute bottom-20 right-20 w[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png" alt = "people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-10 left-20 w[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png" alt = "people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png" alt = "people"
            className="w-full h-full"
          />
        </div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="absolute top-1/2 left-40 w-[196px] h-[150px]"
        >
          <div className="absolute w-[217px] h-[167px] rounded-[24px] bg-[#5d6680] glassmorphism left-[-10px] top-[-8px]" />
          <img 
            src="/planet-01.png" alt="planet"
            className="absolute w-full h-full object-cover rounded-[24px]"
          />
          <p className="absolute mt-[100px] left-[20px] font-bold md:text-[30px] text-[40px] text-white">Hi</p>
          <div className="absolute gradient-01 w-[200px] h-[200px]" />
          

        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="absolute top-40 right-[350px] w-[196px] h-[150px]"
        >
          <div className="absolute w-[217px] h-[167px] rounded-[24px] bg-[#5d6680] glassmorphism left-[-10px] top-[-8px]" />
          <img 
            src="/planet-01.png" alt="planet"
            className="absolute w-full h-full object-cover rounded-[24px]"
          />
          <p className="absolute mt-[100px] left-[20px] font-bold md:text-[30px] text-[40px] text-white">Hi</p>
          <div className="absolute gradient-01 w-[200px] h-[200px]" />
          

        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
