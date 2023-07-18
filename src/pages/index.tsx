import Image from 'next/image';
import praia from '../assets/image/bg-2.jpg';
export default function Home() {
  return (
    <div className={`block justify-center items-center w-[100%] h-[100%] absolute text-white flex-col `}>
      <Image
        src={praia}
        alt={'imagem praia'}
        sizes="100vw"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        width={0}
        height={0}
        className={``}
      />
      <div className={`flex justify-center items-center absolute top-[28%] left-[10%] m-auto flex-col z-[9] text-center`}>
        <p className={`uppercase text-[4rem] font-thin m-auto  w-[50%]  `}>
          Viva o <b className={`bg-[#edcf75] px-2 font-semibold`}>hoje</b>, com a segurança do seu património
        </p>
        <p className={`text-sm z-[99]`}>Apartamentos com 120 a 150m² no Perequê, Porto Belo</p>

        <button className={`p-[0.2rem] w-[150px] border-[2px] rounded-[1rem] mt-[1.5rem] uppercase`}>Explore</button>
      </div>
      <footer className={`flex justify-between items-center w-full absolute bottom-[1rem] z-[10]`}>
        <div className={`w-[10%] flex justify-start items-center text-left ml-[2rem]`}>
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
            <span className={`text-[2.2rem] flex flex-row ml-[0.5rem]`}>
              C{' '}
              <span
                className={`absolute w-[10px] h-[10px] border-[3px] border-white  rounded-[50%] top-[1.35rem] right-[2.65rem]`}
              ></span>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
