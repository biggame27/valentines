'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, emoji, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.5)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="you"
      className="md:w-[270px] w-[full] h-[250px] rounded-[32px] object-cover"
    />

    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        {/*if text can be bigger, then make it that size */}
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-amber-100">
          {subtitle}
        </p>
      </div>
      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <p
          className="text-[30px]"
        >
          {emoji}
          </p>
      </div>
      
    </div>
  </motion.div>
);

export default InsightCard;
