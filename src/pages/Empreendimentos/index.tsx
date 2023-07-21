import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaAtlassian } from 'react-icons/fa';

import Images from '@/components/Images';

import predio2 from '../../assets/image/predio-2.jpg';
import predio1 from '../../assets/image/predio-1.jpg';
import logo from '../../assets/image/logo-interprase.png';
import arrowRight from '../../assets/image/seta-direita.png';
import arrowLeft from '../../assets/image/setas-esquerda.png';
import book from '../../assets/image/livros.jpg';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { BsCCircle, BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { IconType } from 'react-icons';
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

const Empreendimentos = () => {
  const ref1 = useRef(null);
  const ref11 = useRef(null);
  const ref2 = useRef(null);
  const ref22 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref44 = useRef(null);
  const ref5 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView11 = useInView(ref11);
  const isInView2 = useInView(ref2);
  const isInView22 = useInView(ref22);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  const isInView44 = useInView(ref44);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
      transition={{ ease: 'easeOut', duration: 2.5 }}
      exit={{ opacity: 0 }}
      className={`bg-[#323538] w-[100%] min-h-[100%] flex justify-center items-center flex-col  m-auto pt-[10rem] flex-wrap `}
      data-cy="section"
    >
      <div ref={ref1} />
      <div className={`w-[80%] max-2xl:w-[95%] `}>
        <h2 className={`w-[10%] text-[3rem] text-white leading-[3rem] `}>
          Pré
          <br />
          <span className={`text-[#bc9c57]`}>Lançamento</span>
        </h2>

        <div ref={ref1} />
        <div
          className={`w-[90%] flex flex-row justify-between mt-[2rem] max-xl:flex-col max-xl:w-[100%] max-md:w-[90%] max-xl:justify-center max-xl:items-center
          ${
            isInView1 || isInView11
              ? 'max-xl:translate-x-[-44px] duration-[1.3s] translate-x-[20px] opacity-[1] ease-in-out flex flex-row justify-between'
              : 'max-xl:translate-x-[-44px] translate-x-[35px] opacity-0 duration-[1.1s] ease none'
          }
          `}
        >
          <Images image={predio1} logo={logo} />
          <Images image={predio2} logo={logo} />
        </div>
      </div>
      <div ref={ref11} />

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
        transition={{ ease: 'easeOut', duration: 2.5 }}
        exit={{ opacity: 0 }}
        className={`text-white flex flex-row justify-start text-left max-xl:justify-center items-center mt-[2rem] w-[80%]`}
      >
        <div className={`mr-[5rem]`}>
          <Image src={arrowLeft} alt={'seta direita'} width={0} height={0} className={`text-[1rem] w-[55px]`} />
        </div>
        <div>
          <Image src={arrowRight} alt={'seta esquerda'} width={0} height={0} className={`text-[1rem] w-[55px]`} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
        transition={{ ease: 'easeOut', duration: 2.5 }}
        exit={{ opacity: 0 }}
        className={`flex justify-start w-[80%] max-2xl:w-[95%] text-white mt-[5rem] flex-col `}
      >
        <div ref={ref2} />
        <h2 className={`text-[3rem] leading-[3rem]`}>
          Em
          <br />
          <span className={`text-[#bc9c57]`}>Construção</span>
        </h2>

        <div
          className={`w-[90%] flex flex-row justify-between mt-[2rem] max-xl:flex-col max-xl:w-[100%] max-xl:justify-center max-xl:items-center max-sm:w-[90%]
          max-sm:justify-center max-sm:items-center
          ${
            isInView2 || isInView22
              ? 'max-xl:translate-x-[-44px] duration-[1.5s] translate-x-[20px] opacity-[1] ease-in-out flex flex-row justify-between'
              : 'translate-x-[-44px] opacity-0 duration-[1.5s] ease none'
          }
          `}
        >
          <Images image={predio1} logo={logo} />
          <div ref={ref2} />

          <Images image={predio2} logo={logo} />
        </div>
        <div ref={ref22} />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
          transition={{ ease: 'easeOut', duration: 2.5 }}
          exit={{ opacity: 0 }}
          className={`text-white flex flex-row justify-start max-xl:justify-center text-left items-center mt-[2rem] w-[80%]`}
        >
          <div className={`mr-[5rem] `}>
            <Image src={arrowLeft} alt={'seta direita'} width={0} height={0} className={`text-[1rem] w-[55px]`} />
          </div>
          <div>
            <Image src={arrowRight} alt={'seta esquerda'} width={0} height={0} className={`text-[1rem] w-[55px]`} />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className={`${
          isInView3
            ? ' duration-[1.5s] opacity-[1] ease-in-out flex flex-row justify-between m-auto'
            : ' opacity-0 duration-[1.5s] ease none'
        } w-[100%] h-[500px] mt-[3rem] relative m-auto `}
        data-cy="ebook"
      >
        <Image src={book} alt={'imagem de livros'} width={0} height={0} className={`w-full h-full `} />
        <div
          className={`absolute flex flex-col justify-center items-center m-auto top-[30%]  max-2xl:left-[10%] 2xl:left-[20%] leading-[3rem] text-[#fff]`}
        >
          <div ref={ref3} />
          <h2 className={`text-[5rem] max-xl:text-[4rem] max-xl:text-center leading-[5rem]`}>
            Conheça nossas <span className={`text-[#bc9c57] ml-[1rem]`}>obras entregues</span>{' '}
          </h2>
          <button
            className={`w-[20%] max-xl:w-[33%] max-sm:mt-[1rem] flex justify-center items-center h-[40px] mt-[5rem] rounded-[25px] bg-black text-[#fff] uppercase`}
          >
            Ver portfolio
          </button>
        </div>
      </motion.div>
      <div ref={ref4} />

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
        transition={{ ease: 'easeOut', duration: 2.5 }}
        exit={{ opacity: 0 }}
        className={`bg-[#bc9c57] w-[100%] h-[500px] max-xl:h-[520px] flex justify-center items-center m-auto flex-col z-[99] `}
      >
        <div
          className={`
          ${
            isInView4 || isInView44
              ? ' transform-x-[0px] duration-[1.5s] opacity-[1] ease-in-out flex flex-row justify-between max-xl:flex-col '
              : 'transform-x-[-44px] opacity-0 duration-[1.5s] max-xl:flex-col ease none'
          }
          flex justify-between items-center w-[100%] h-[90%]`}
        >
          <div className={`w-[50%]`}>
            <h2 className={`w-[65%] max-xl:w-full m-auto flex flex-row text-[#fff] text-[4rem] max-xl:text-[2rem] font-bold`}>
              Cadastre-se e receba as novidades
            </h2>
          </div>

          <div className={`w-[50%] max-xl:w-[100%] max-md:w-[100%] max-xl:mt-[0rem] `}>
            <form className={`w-[50%] m-auto text-[#fff]`}>
              <Input label={'Nome'} value={''} placeHolderColor={`#fff`} />
              <Input label={'Email'} value={''} placeHolderColor={`#fff`} />
              <button
                className={`bg-[#000] text-white w-[150px] h-[40px] rounded-[25px] uppercase flex justify-center items-center `}
              >
                Enviar
              </button>
            </form>
          </div>

          <div className={`w-[15%] mb-[-2.8rem] flex justify-center max-xl:w-[30%] xl:hidden`}>
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
        </div>
        <div className={`w-[15%] mb-[-2.8rem] flex justify-center max-xl:w-[30%] max-xl:hidden`}>
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
        <div ref={ref44} />
      </motion.div>

      <Footer ref={ref5} />
    </motion.section>
  );
};

export default Empreendimentos;
