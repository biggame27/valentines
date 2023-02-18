'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { TypingText } from '../components'

const Feedback = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    {/*will only occur when the user or pwd is touched */}
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    {/**prevents from reloading page */}
    e.preventDefault();
    if(pwd === "iloveyou")
      setSuccess(true);
    setPwd('');
  }

  return (
    <section className={`${styles.paddings} relative z-10 gap-4`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto flex flex-col gap-6 lg:flex-col`}
      >
        <TypingText title="| Just For You!" textStyles="text-center" />

        <>
          {success ? (<h1></h1>) : (
            <form 
              onSubmit={handleSubmit}
              className={`flex gap-6 lg:flex-row justify-center`}
            >
              <label htmlFor="password" className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
                Password:
              </label>
              <input 
                onChange={(e) => setPwd(e.target.value)} 
                value={pwd} 
                required 
                className="rounded-[24px] px-[10px]"
                type='password'
              />
              <button className="w-[5%] rounded-[32px] border-[1px] border-[#6A6A6A] glassmorphism">Enter </button>
            </form>
          ) }
        </>

        <div className={`flex gap-6 flex-col lg:flex-row ` + (success ? `` : `blur-lg`)}>
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
                | The One And Only
              </p>
            </div>

            <p className="mt-[24px] font-normal sm:text-[18px] text-[18px] sm:leading-[45px] leading-[16px] text-white">
              HAPPY VALENTINE'S DAYYYYY💕🌹💋!!!! Hopefully you liked the surprise I planned out today, this quite literally took me like days to put together.
              Anyways, happy valentine's dayyy I love you soo much. I can't believe its been three months already, I feel like I was literally just trying to rizz you up 
              for the first time just yesterday LMAOO. Guess time flies because you make it fly. Every minute with you is fleeting and I love every second of those minutes.
              I love how you put chapstick on my lips, how you kiss me on the cheek, how you let me lay on you, and how you comfort me. You give me so much confidence and always help me believe in myself. Sometimes I get scared because of how hard I
              fell for you. I would listen to sad songs and realize, I've never had true heartbreak because the only way that could happen is from losing you. But the 
              next day I see or call you, I always get relieved that I fell for someone as loyal and caring as you. I wouldn't want it to be anyone else. Thanks for everything you do for me. You motivate me so much
              and the dreams you have to travel the world are slowly creeping into me as well. Maybe we can even travel the world together some day..  
            </p>
            
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            I LOVE YOU SO SO SO SO MUUCH, Harrison
            </h4>

            <a type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] w-[20%]" href="https://youtu.be/x18MYpHvdfs" >
              <img 
                src="/headset.svg"
                alt="headset"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">SURPRISE!</span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="relative flex-[0.5] flex justify-center items-center"
          >
            <img 
              src="/secret.jpg"
              alt="planet-09"
              className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
            />
          </motion.div>
        </div>
        
      </motion.div>
  </section>
  )
};

export default Feedback;
