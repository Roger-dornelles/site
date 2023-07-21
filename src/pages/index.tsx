import Image from 'next/image';
import praia from '../assets/image/bg-p-praia.jpg';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
      transition={{ ease: 'linear', duration: 2.5 }}
      exit={{ opacity: 0 }}
      className={`flex justify-center items-center text-white flex-col `}
    >
      <Image
        src={praia}
        alt={'imagem praia'}
        quality={100}
        fill
        sizes="100%"
        style={{
          objectFit: 'cover',
        }}
        width={0}
        height={0}
        className={`w-[100%] min-h-[100%]`}
      />
      <div
        className={`flex justify-center items-center absolute top-[28%] left-[10%] m-auto flex-col z-[9] text-center flex-wrap max-md:left-0 max-lg:pb-[3rem] max-lg:left-0`}
      >
        <p className={`uppercase text-[4rem] font-thin m-auto  w-[50%] max-lg:text-[2.5rem] max-lg:w-[100%] `}>
          Viva o <b className={`bg-[#edcf75] px-2 font-semibold`}>hoje</b>, com a segurança do seu património
        </p>
        <p className={`text-sm z-[99]`}>Apartamentos com 120 a 150m² no Perequê, Porto Belo</p>

        <button className={`p-[0.2rem] w-[150px] border-[2px] rounded-[1rem] mt-[1.5rem] uppercase `}>Explore</button>
      </div>

      <footer
        className={`flex justify-between items-center w-full absolute bottom-[1rem] z-[10] max-lg:bottom-0 max-lg:pb-2 max-lg:flex-col`}
      >
        <div
          className={`w-[10%] flex justify-start items-center text-left ml-[2rem] max-lg:w-[30%] max-lg:text-center max-lg:ml-[4rem]`}
        >
          <button className={` h-[1.5rem] w-[1.5rem] text-black border-[2px] border-white rounded-[50%] cursor-pointer`}></button>
          <button
            className={` h-[0.7rem] w-[0.7rem] text-black border-[2px] border-white rounded-[50%] bg-white cursor-pointer mx-[1rem]`}
          ></button>
          <button
            className={` h-[0.7rem] w-[0.7rem] text-black border-[2px] border-white rounded-[50%] bg-white cursor-pointer`}
          ></button>
        </div>
        <div className={`mr-[2.5rem] flex flex-row items-center`}>
          <p className={` flex flex-row items-center`}>
            Desenvolvido por{' '}
            <span className={`text-[2.2rem] flex flex-row ml-[0.5rem] relative`}>
              C{' '}
              <span
                className={`absolute w-[10px] h-[10px] border-[3px] border-white  rounded-[50%] top-[1.35rem] right-[0.2rem] `}
              ></span>
            </span>
          </p>
        </div>
      </footer>
    </motion.section>
  );
}
