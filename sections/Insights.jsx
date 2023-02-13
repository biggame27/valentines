'use client';
import { motion } from 'framer-motion';
//no brackets mean the default export is from one file, brackets mean itw as just export const
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Thank you" textStyles="text-center" />
      <TitleText title="Thanks for everything" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard 
            key={`insight-${index}`}
            {...insight}
            index={index+1}
          />
          
        ))}
        <div className="relative gradient-04 z-0 bottom-[0px] right-[0px]" />
      </div>
    </motion.div>
  </section>
);

export default Insights;
