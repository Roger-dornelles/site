import { BsWhatsapp, BsXCircle, BsFillGeoAltFill } from 'react-icons/bs';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import { SetStateAction, useEffect, useState } from 'react';

interface ContactType {
  openModal: boolean;
}

const ModalContact = ({ openModal }: ContactType) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [messageTextArea, setMessageTextArea] = useState<string>('');

  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPhone, setErrorPhone] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');
  useEffect(() => {
    setIsOpenModal(openModal);
  }, [openModal]);

  const handleClose = () => {
    setIsOpenModal(!openModal);
    setEmail('');
    setPhone('');
    setErrorEmail(false);
    setErrorPhone(false);
  };

  const phoneMask = (value: string) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
  };

  const handleFormInformation = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = regex.test(email);
      if (!isEmailValid) {
        setErrorEmail(true);
        setMessageError('Email invalido');
        return;
      }
      setErrorEmail(false);
    }

    if (phone) {
      var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');
      const isvalidPhone = regex.test(phone);
      if (!isvalidPhone) {
        setErrorPhone(true);
        setMessageError('Numero Celular invalido');
        return;
      }
      setErrorPhone(false);
      setMessageError('');
    }
  };
  return (
    <>
      <div
        className={`
          ${
            isOpenModal
              ? 'flex z-[99] duration-[2s] top-0 opacity-[1] ease h-auto flex-wrap'
              : ' duration-[2s] top-[-1000px] ease-in-out opacity-0 flex flex-wrap'
          }
          absolute w-full bg-[#2d343e]  justify-between m-auto z-[99] p-8
          `}
      >
        <b
          className={`absolute right-[1.7rem] top-[1rem] text-[1.5rem] cursor-pointer hover:text-[#bc9c57]`}
          onClick={handleClose}
        >
          <BsXCircle />
        </b>
        <div className={`flex flex-col text-[3.75rem]  max-md:text-[1.7rem]  max-sm:mb-[1rem] flex-wrap md:text-[2rem]`}>
          <p>COMO PODEMOS</p>
          <span className={`text-[#bc9c57]`}>AJUDAR?</span>
        </div>

        <div>
          <div className={`flex items-center`}>
            <b className={`mr-[1rem] text-[#bc9c57] text-[1.5rem]`}>
              <BsFillGeoAltFill />
            </b>
            <div>
              <p>Faça-nos uma visita</p>
              <p>Av. Senador Atílio Fontana, n 947 </p>
              <p>Balneário Perequê - Porto Belo / SC</p>
            </div>
          </div>

          <div className={`flex items-center my-[1.5rem]`}>
            <b className={`mr-[1rem] text-[#bc9c57] text-[1.5rem]`}>
              <BsWhatsapp />
            </b>

            <div>
              <p>Comercial</p>
              <p>(47) 99999-9999</p>
            </div>
          </div>

          <div className={`flex items-center `}>
            <b className={`mr-[1rem] text-[#bc9c57] text-[1.5rem]`}>
              <BsWhatsapp />
            </b>

            <div>
              <p>Administrativo</p>
              <p>(47) 99999-9999</p>
            </div>
          </div>
        </div>

        <form
          className={`flex flex-col w-[520px] mt-[12px]  min-h-[300px] max-sm:mt-[3rem] max-sm:m-auto`}
          onSubmit={handleFormInformation}
        >
          <Input
            label={'Email'}
            value={email}
            onChange={(e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value)}
            error={errorEmail}
            message={messageError}
          />
          <Input
            label={'Celular'}
            value={phone}
            onChange={(e: { target: { value: SetStateAction<string> } }) => setPhone(phoneMask(String(e.target.value)))}
            maxLength={15}
            error={errorPhone}
            message={messageError}
          />
          <TextArea
            message={''}
            placeholder={`Mensagem`}
            value={messageTextArea}
            onChange={(e: { target: { value: SetStateAction<string> } }) => setMessageTextArea(e.target.value)}
          />

          <Button title={`Enviar`} justify={'justify-end'} />
        </form>
      </div>
    </>
  );
};

export default ModalContact;
