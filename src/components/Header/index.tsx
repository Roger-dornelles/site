import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import logo from '../../../public/assets/image/logoSite.png';

import { BsFacebook, BsYoutube, BsInstagram, BsWhatsapp, BsXCircle, BsFillGeoAltFill } from 'react-icons/bs';
import { IconType } from 'react-icons';

import ModalContact from '../ModalContact';
import Link from 'next/link';
interface HeaderType {
  children: ReactNode;
}

interface NavigationType {
  id: number;
  name: string;
  link: string;
}

interface SocialsType {
  id: number;
  icon: IconType;
}

const navigation = [
  { id: 1, name: 'empreendimentos', link: '/Enterprises' },
  { id: 2, name: 'sobre nós', link: '/Enterprises' },
  { id: 3, name: 'oportunidades', link: '/Enterprises' },
  { id: 4, name: 'portfólio', link: '/Enterprises' },
  { id: 5, name: 'fale conosco', link: '' },
];

const socials = [
  { id: 1, icon: BsWhatsapp },
  { id: 2, icon: BsInstagram },
  { id: 3, icon: BsFacebook },
  { id: 4, icon: BsYoutube },
];

const Header = ({ children }: HeaderType) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const route = useRouter();

  const handleOpenModal = (item: string) => {
    if (item === 'fale conosco') {
      setOpenModal(!openModal);
    }
  };

  const handleClickImage = () => {
    route.push('/');
  };

  return (
    <>
      <header className={`w-full flex justify-around p-8  align-center bg-transparent absolute text-white top-0 left-0 z-50`}>
        <ModalContact openModal={openModal} />

        <Image src={logo} alt={'logomarca'} className={`ml-4 h-[50px] w-[60px] cursor-pointer`} onClick={handleClickImage} />

        <nav className={`flex flex-1 justify-center align-center `}>
          <ul className={` flex flex-row justify-between`}>
            {navigation &&
              navigation.map((item: NavigationType) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => {
                      handleOpenModal(item.name);
                    }}
                    className={`pl-5 pt-2 flex justify-between align-center
                      hover:after:min-w-[120px] after:absolute after:top-0 after:h-6
                      after:border-t-y-6 after:border-t-[10px] after:border-yellow-500 hover:transition-[border] hover:text-yellow-500 `}
                  >
                    <Link href={item.link} className={`cursor-pointer`}>
                      {item.name.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>

        <div className={`flex justify-between w-[150px] mr-4 `}>
          {socials &&
            socials.map((item: SocialsType) => {
              return (
                <button key={item.id} className={`text-white text-[22px] hover:text-[#ccc]`}>
                  <item.icon />
                </button>
              );
            })}
        </div>
      </header>
      {children}
    </>
  );
};

export default Header;
