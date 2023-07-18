import Image from 'next/image';
import praia from '../../public/assets/image/bg-praia.jpg';
export default function Home() {
  return (
    <>
      <Image src={praia} alt={'imagem praia'} sizes="100%" fill />
      <div>
        <p className={`text-black z-[99]`}>
          CONSTRUIR O SEU SONHO É A NOSSA MAIOR MOTIVAÇÃO apartamentos com 88 a 125m² em Balneário Perequê, Porto Belo
        </p>
      </div>
    </>
  );
}
