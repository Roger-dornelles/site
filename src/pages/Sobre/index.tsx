import { motion } from 'framer-motion';

import { useRef } from 'react';
import Image from 'next/image';

import pessoa1 from '../../../public/assets/image/pessoa-G.jpg';
import pessoa2 from '../../assets/image/pessoa2.jpg';
import pessoa3 from '../../../public/assets/image/pessoa1-G.jpg';

import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { IconType } from 'react-icons';
import ParallaxText from '@/components/Parallax';

import ImageFounder from '@/components/ImageFounder';
import Footer from '@/components/Footer';

interface SocialsType {
  id: number;
  icon: IconType;
}

const socials = [
  { id: 1, icon: BsInstagram },
  { id: 2, icon: BsFacebook },
  { id: 3, icon: BsYoutube },
];

const Sobre = () => {
  const ref1 = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
      transition={{ ease: 'easeOut', duration: 2.5 }}
      exit={{ opacity: 0 }}
      className={`bg-[#323538] w-[100%] min-h-[100%] flex justify-center items-center flex-col  m-auto pt-[10rem] `}
    >
      <div className={`w-[90%] h-[600px] m-auto flex justify-center items-center relative max-md:w-[100%]  overflow-hidden`}>
        <div
          className={`w-[100%] h-[95%] snap-y  m-auto  flex flex-row justify-center items-center overflow-hidden rotate-90 max-xl:justify-center max-xl:items-center `}
        >
          <ParallaxText baseVelocity={3}>
            <div className={`flex justify-between w-full h-full`}>
              <div className={`rotate-[-90deg] flex flex-col w-[100%] justify-center items-center m-[1rem]`}>
                <Image
                  src={pessoa1}
                  alt="teste"
                  width={0}
                  height={0}
                  className={`w-[100%] h-[100%] border-[3px] flex justify-center items-center text-center`}
                />
              </div>
            </div>
          </ParallaxText>
          <ParallaxText baseVelocity={3}>
            <div className={`flex justify-between w-full h-full`}>
              <div className={`rotate-[-90deg] flex flex-col w-[100%] justify-center items-center m-[1rem]`}>
                <Image
                  src={pessoa2}
                  alt="teste"
                  width={0}
                  height={0}
                  className={`w-[100%] h-[100%] border-[3px] flex justify-center items-center text-center`}
                />
              </div>
            </div>
          </ParallaxText>
          <ParallaxText baseVelocity={3}>
            <div className={`flex justify-between w-full h-full`}>
              <div className={`rotate-[-90deg] flex flex-col w-[100%] justify-center items-center m-[1rem]`}>
                <Image
                  src={pessoa3}
                  alt="teste"
                  width={0}
                  height={0}
                  className={`w-[100%] h-[100%] border-[3px] flex justify-center items-center text-center`}
                />
              </div>
            </div>
          </ParallaxText>
        </div>

        <div
          className={`w-[100%] h-[95%] snap-y max-md:hidden justify-center items-center max-xl:justify-center max-xl:items-center m-auto  flex flex-row  overflow-hidden rotate-[270deg] `}
        >
          <ParallaxText baseVelocity={3}>
            <div className={`flex justify-between w-full h-full`}>
              <div className={`rotate-[90deg] flex flex-col w-[100%] justify-center items-center m-[1rem]`}>
                <Image
                  src={pessoa2}
                  alt="teste"
                  width={0}
                  height={0}
                  className={`w-[100%] h-[100%] border-[3px] flex justify-center items-center text-center`}
                />
              </div>
            </div>
          </ParallaxText>

          <ParallaxText baseVelocity={3}>
            <div className={`flex justify-between w-full h-full`}>
              <div className={`rotate-[90deg] flex flex-col w-[100%] justify-center items-center m-[1rem]`}>
                <Image
                  src={pessoa1}
                  alt="teste"
                  width={0}
                  height={0}
                  className={`w-[100%] h-[100%] border-[3px] flex justify-center items-center text-center`}
                />
              </div>
            </div>
          </ParallaxText>

          <ParallaxText baseVelocity={3}>
            <div className={`flex justify-between w-full h-full`}>
              <div className={`rotate-[90deg] flex flex-col w-[100%] justify-center items-center m-[1rem]`}>
                <Image
                  src={pessoa3}
                  alt="teste"
                  width={0}
                  height={0}
                  className={`w-[100%] h-[100%] border-[3px] flex justify-center items-center text-center`}
                />
              </div>
            </div>
          </ParallaxText>
        </div>

        <div
          className={`w-[100%] h-[95%] snap-y max-xl:hidden m-auto justify-center items-center flex flex-row  overflow-hidden rotate-90`}
        >
          <ParallaxText baseVelocity={3}>
            <div className={`flex justify-between w-full h-full`}>
              <div className={`rotate-[-90deg] flex flex-col w-[100%] justify-center items-center m-[1rem]`}>
                <Image
                  src={pessoa2}
                  alt="teste"
                  width={0}
                  height={0}
                  className={`w-[100%] h-[100%] border-[3px] flex justify-center items-center text-center`}
                />
              </div>
            </div>
          </ParallaxText>

          <ParallaxText baseVelocity={3}>
            <div className={`flex justify-between w-full h-full`}>
              <div className={`rotate-[-90deg] flex flex-col w-[100%] justify-center items-center m-[1rem]`}>
                <Image
                  src={pessoa3}
                  alt="teste"
                  width={0}
                  height={0}
                  className={`w-[100%] h-[100%] border-[3px] flex justify-center items-center text-center`}
                />
              </div>
            </div>
          </ParallaxText>

          <ParallaxText baseVelocity={3}>
            <div className={`flex justify-between w-full h-full`}>
              <div className={`rotate-[-90deg] flex flex-col w-[100%] justify-center items-center m-[1rem]`}>
                <Image
                  src={pessoa1}
                  alt="teste"
                  width={0}
                  height={0}
                  className={`w-[100%] h-[100%] border-[3px] flex justify-center items-center text-center`}
                />
              </div>
            </div>
          </ParallaxText>
        </div>

        <div
          className={`w-[100%] text-[5rem] max-md:text-[3.3rem] text-white leading-[5rem] text-center p-[2rem] z-[9] absolute `}
        >
          Construimos
          <br /> há 15 anos o <span className={`text-[#bc9c57] mt-[3rem]`}>Futuro</span>
          <br /> da sua Familia
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
        transition={{ ease: 'easeOut', duration: 2.5 }}
        exit={{ opacity: 0 }}
        className={`flex justify-start w-[100%] text-white mt-[5rem] flex-row overflow-hidden snap-y `}
      >
        <ParallaxText baseVelocity={4} baseWidth={40}>
          <div className={`flex flex-row justify-between w-[100%]`}>
            <h2 className={`text-[3rem] leading-[3rem] flex-nowrap gap-4`}>
              Qualidade em
              <br />
              <span className={`text-[#bc9c57]`}>todos os detalhes</span>
            </h2>

            <h2 className={`text-[3rem] leading-[3rem] px-[15rem]`}>
              Transparência total
              <br />
              <span className={`text-[#bc9c57]`}>em todos os processos</span>
            </h2>

            <h2 className={`text-[3rem] leading-[3rem]`}>
              Tecnologia avançada
              <br />
              <span className={`text-[#bc9c57]`}>para resultados precisos</span>
            </h2>
          </div>
        </ParallaxText>
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
        transition={{ ease: 'easeOut', duration: 2.5 }}
        exit={{ opacity: 0 }}
        className={`flex justify-start w-[100%] text-white mt-[1rem] flex-row overflow-hidden snap-x `}
      >
        <ParallaxText baseVelocity={-4} baseWidth={100}>
          <div className={`flex flex-row justify-between w-[100%]`}>
            <h2 className={`text-[3rem] leading-[3rem]`}>
              Durabilidade e qualidade
              <br />
              <span className={`text-[#bc9c57]`}>em cada projeto</span>
            </h2>

            <h2 className={`text-[3rem] leading-[3rem] px-[15rem]`}>
              Qualidade e segurança
              <br />
              <span className={`text-[#bc9c57]`}>nossa prioridade</span>
            </h2>

            <h2 className={`text-[3rem] leading-[3rem]`}>
              Compromisso com prazos
              <br />
              <span className={`text-[#bc9c57]`}>entrega garantida</span>
            </h2>
          </div>
        </ParallaxText>
      </motion.div>

      <motion.div className={`flex justify-center items-center w-[90%] flex-col m-auto mt-[6rem] pb-[3rem]`}>
        <div className={`w-[100%] m-auto flex justify-center items-center`}>
          <h2 className={`flex justify-center items-center text-[3rem] w-full text-center text-[#fff] font-bold mb-[2rem] `}>
            Team
          </h2>
        </div>

        <div
          className={`w-[80%] h-[400px] m-auto flex bg-[#bc9c57] justify-around items-end z-[99] mt-[5rem] max-md:justify-center  max-md:flex-col max-md:h-[550px] max-md:w-[100%] max-md:items-center `}
        >
          <ImageFounder image={pessoa1} name={'Ana'} />
          <ImageFounder image={pessoa2} name={'Andre'} />
          <ImageFounder image={pessoa3} name={'Ricardo'} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
        transition={{ ease: 'easeOut', duration: 2.5 }}
        exit={{ opacity: 0 }}
        className={`w-full h-[500px] flex flex-col m-auto relative max-md:pt-[2rem]`}
      >
        <div className={`w-[70%] flex justify-center items-center flex-col m-auto text-[#fff]`}>
          <h2 className={`uppercase text-[2.5rem] font-medium `}>Manifesto</h2>
          <p className={`uppercase text-[1.8rem] font-thin titulo-principal `}>
            construindo um futuro melhor com inovação, qualidade e compromisso com nossos clientes e o meio ambiente
          </p>
        </div>

        <div className={`w-[15%] max-xl:w-[30%] mb-[-1.4rem] flex justify-center z-[99] m-auto`}>
          <div className={`bg-black flex flex-row w-[100%] justify-around rounded-[25px] px-[1.5rem] py-[0.7rem]`}>
            {socials &&
              socials.map((item: SocialsType) => {
                return (
                  <button
                    key={item.id}
                    className={`flex justify-center flex-row text-[#bc9c57] text-[22px] hover:text-[##61460b]`}
                  >
                    <item.icon />
                  </button>
                );
              })}
          </div>
        </div>
      </motion.div>

      <Footer ref={ref1} />
    </motion.section>
  );
};

export default Sobre;
