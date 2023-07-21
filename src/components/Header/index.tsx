import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import logo from '../../../public/assets/image/logoSite.png';

import { BsFacebook, BsYoutube, BsInstagram, BsWhatsapp, BsXCircle, BsFillGeoAltFill } from 'react-icons/bs';
import { IconType } from 'react-icons';

import ModalContact from '../ModalContact';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { spawn } from 'child_process';
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
  { id: 1, name: 'empreendimentos', link: '/Empreendimentos' },
  { id: 2, name: 'sobre nós', link: '/Sobre' },
  { id: 3, name: 'oportunidades', link: '/' },
  { id: 4, name: 'portfólio', link: '/' },
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
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  const [idNavigation, setIdNavigation] = useState<number>(0);
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
      <header
        className={`w-full h-[95px] flex justify-around  items-center bg-transparent absolute text-white top-0 left-0 z-50  flex-wrap  ${
          route.pathname === '/Empreendimentos' ? 'bg-[#1b1b1b]' : ''
        }`}
      >
        <ModalContact openModal={openModal} />

        <Image
          src={logo}
          alt={'logomarca'}
          width={0}
          height={0}
          className={`ml-4 h-[50px] w-[60px] cursor-pointer max-xl:absolute max-xl:left-[5rem] `}
          onClick={handleClickImage}
          data-cy="logo"
        />

        <nav className={`flex flex-1 justify-center items-center flex-wrap max-xl:hidden`} >
          <ul className={` flex flex-row justify-between h-[100%] flex-wrap `}>
            {navigation &&
              navigation.map((item: NavigationType) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => {
                      handleOpenModal(item.name);
                      setIdNavigation(item.id);
                    }}

                    className={`flex justify-between  align-center py-[2rem]  ${
                      idNavigation === item.id && 'border-t-[3px] border-[#bc9c57] '
                    } hover:text-[#bc9c57] ${idNavigation === item.id && ' text-[#bc9c57]'} `}
                  >
                    <Link href={item.link} className={`cursor-pointer flex mx-[1.5rem]  h-[100%] `}>
                      {item.name.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>

        <span
          className={`hidden text-[2rem] cursor-pointer absolute right-[2rem] max-xl:flex hover:text-[#bc9c57]`}
          onClick={() => {
            setOpenMenuMobile(true);
          }}
          data-cy="mobile-icon"
        >

          <FaBars />
        </span>

        <nav
          className={`xl:hidden ${
            openMenuMobile
              ? 'flex z-[99] duration-[2s] top-0 right-0 opacity-[1] ease  flex-wrap  rounded-bl-lg'
              : 'duration-[2s] top-[-300px]  ease-in-out opacity-0 flex flex-wrap'
          }  h-[270px] w-[290px] absolute  top-0 right-0 pt-[2rem] bg-[#9b9b9b] `}
        >
          <span
            className={`hidden text-[2rem] cursor-pointer absolute left-[1rem] max-xl:flex hover:text-[#d45050]`}
            onClick={() => {
              setOpenMenuMobile(false);
            }}
            data-cy="mobile-icon-close"
          >
            <BsXCircle />
          </span>
          <ul className={` flex flex-col flex-wrap absolute right-[1.8rem]`}>
            {navigation &&
              navigation.map((item: NavigationType) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => {
                      handleOpenModal(item.name);
                      setOpenMenuMobile(false);
                    }}
                    className={`flex justify-between  align-center p-[0.2rem] hover:text-yellow-500 `}
                  >
                    <Link href={item.link} className={`cursor-pointer flex mx-[1.5rem]`}>
                      {item.name.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
          </ul>

          <div className={`flex justify-between w-[150px] absolute right-[3rem] bottom-[1rem]  `}>
            {socials &&
              socials.map((item: SocialsType) => {
                return (
                  <button key={item.id} className={`text-white text-[22px] hover:text-[#bc9c57]`}>
                    <item.icon />
                  </button>
                );
              })}
          </div>
        </nav>

        <div className={`flex justify-between w-[150px] mr-4  max-xl:hidden`}>
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
      <section>{children}</section>
    </>
  );
};

export default Header;
