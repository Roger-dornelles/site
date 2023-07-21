import Image, { StaticImageData } from 'next/image';
import { BsFullscreen, BsClipboardFill, BsFillGeoAltFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
interface ImagesType {
  image: StaticImageData;
  logo: StaticImageData;
}

const Images = ({ image, logo }: ImagesType) => {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 1.2 },
      }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ opacity: 1 }}
      className={` flex flex-row w-[500px] h-[300px] mt-[12rem] pl-[1rem] max-md:pl-[0] bg-black  max-sm:w-[60%] max-md:w-[50%]  `}
    >
      <Image
        src={logo}
        alt="logo edificio"
        className={`w-[70px] h-[70px] absolute max-xl:w-[40px] max-sm:w-[30px]
         mt-[-11rem] ml-[2rem]`}
      />
      <div className={`text-[#fff]`}>
        <p className={`flex flex-col justify-center w-[120px] text-center mt-[1.5rem]`}>
          <span className={`flex m-auto text-[#8d7541]`}>
            <BsFullscreen />
          </span>
          120 a 150m²
        </p>

        <p className={`flex flex-col justify-center w-[120px] text-center mt-[1.5rem]`}>
          <span className={`flex m-auto text-[#8d7541]`}>
            <BsClipboardFill />
          </span>
          2 ou 3 suites
        </p>

        <p className={`flex flex-col justify-center w-[120px] text-center mt-[1.5rem]`}>
          <span className={`flex m-auto text-[#8d7541]`}>
            <BsFillGeoAltFill />
          </span>
          Rua Manoel da silva pereira
          <br />
          Perequê
          <br />
          Porto Belo/ Sc
        </p>
      </div>

      <Image
        src={image}
        alt="imagem predio"
        className={`w-[350px] h-[470px] z-[99] relative ml-[4rem] max-sm:ml-6 mt-[-11.6rem] max-xl:w-[300px] max-sm:w-[200px]`}
      />
    </motion.div>
  );
};

export default Images;
