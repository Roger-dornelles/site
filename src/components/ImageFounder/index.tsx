import Image, { StaticImageData } from 'next/image';
import { BsFullscreen, BsClipboardFill, BsFillGeoAltFill } from 'react-icons/bs';
import { motion, transform } from 'framer-motion';
interface ImagesType {
  image: StaticImageData;
  name: string;
}

const ImageFounder = ({ image, name }: ImagesType) => {
  return (
    <motion.div
      initial={{ opacity: 0.6, fontSize: '32px', color: '#fff ' }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 1.2 },
        fontSize: '42px',
      }}
      whileTap={{ scale: 0.97 }}
      whileInView={{ opacity: 1 }}
      className={` flex flex-col w-[500px] max-md:w-[400px] max-sm:w-[300px] h-[300px] mt-[12rem] pl-[1rem] relative max-md:p-[1rem]`}
    >
      <Image
        src={image}
        alt="imagem prédio"
        className={`w-[350px] h-[470px] z-[99] relative ml-[4rem] max-md:ml-[6rem] max-sm:ml-[3rem] mt-[-11.6rem] max-md:w-[170px] max-md:h-[220px]`}
      />
      <span
        className={`absolute right-[2.7rem] bottom-[1.5rem] z-[99] max-sm:right-[4.5rem] max-md:right-[8rem] max-md:bottom-[1rem] max-xl:bottom-[1rem] max-xl:right-[-3rem] `}
      >
        {name}
      </span>
    </motion.div>
  );
};

export default ImageFounder;
