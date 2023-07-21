import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BsCCircle } from 'react-icons/bs';
import { FaAtlassian } from 'react-icons/fa';

const Footer = ({ ref }: any) => {
  const ref5 = useRef(ref);
  const isInView5 = useInView(ref5);
  return (
    <motion.footer
      initial={{ opacity: 1 }}
      animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
      transition={{ ease: 'easeOut', duration: 2.5 }}
      exit={{ opacity: 0 }}
      className={`w-[100%] pt-[9rem] flex flex-col justify-center items-center m-auto bg-[#fff]`}
    >
      <div
        className={`${
          isInView5
            ? ' duration-[1.5s] opacity-[1] ease-in-out flex flex-row justify-between'
            : ' opacity-0 duration-[1.5s] ease none'
        } flex w-[80%] flex-row justify-start items-center  max-xl:flex-col  max-xl:justify-center  max-xl:items-center`}
      >
        <div className={` max-xl:mb-[1.8rem]`}>
          <div className={`w-[60px] h-[5px] bg-[#edcf75] `}></div>
          <h2 className={`text-[1.7rem] font-bold uppercase`}>Empreendimentos</h2>
          <p>Sun Beach Residence</p>
          <p>Gran Palace Residence</p>
          <p>Beau Lac Residence</p>
          <p>Bello Bosque Residence</p>
        </div>

        <div
          className={`mb-[1rem]`}
          data-cy="footer_maisCanais"
        >
          <div className={`w-[60px] h-[5px] bg-[#edcf75] `}></div>
          <h2 className={`text-[1.7rem] font-bold uppercase`}>Mais Canais</h2>
          <p>Trabalhe conosco</p>
          <p>Portal do cliente</p>
        </div>

        <div className={` `}>
          <div className={`w-[60px] h-[5px] bg-[#edcf75] `}></div>
          <h2 className={`text-[1.7rem] font-bold uppercase`}>Ferramentas</h2>
          <p>CUB / SC</p>
        </div>
      </div>
      <div ref={ref5} />
      <div
        className={`w-[80%] border-t-[1px] mt-[2rem] flex flex-row
        `}
      >
        <div className={`flex flex-row w-[100%] justify-between items-center py-[1rem]`}
        data-cy='footer_bottom'>
          <div className={` flex flex-row text-[#bc9c57] items-center`}>
            <p>GD&JR</p>{' '}
            <span className={`text-[10px] px-[0.3rem]`}>
              <BsCCircle />
            </span>
            <p>2023</p>
          </div>

          <div className={`text-[#bc9c57]`}>
            <FaAtlassian />
          </div>

          <div className={`mr-[-0.5rem] flex flex-row items-center relative text-[#bc9c57]`}>
            <p className={` flex flex-row items-center`}>
              Desenvolvido por{' '}
              <span className={`text-[2.2rem] flex flex-row ml-[0.5rem]`}>
                C{' '}
                <span
                  className={`relative w-[10px] h-[10px] border-[3px] rounded-[50%] top-[1.38rem] right-[0.8rem] border-[#bc9c57]`}
                ></span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;
