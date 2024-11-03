import React from 'react';
import Logo from '../assets/Logo (1).svg';
import Send from '../assets/send.svg';
import CustomButton from './CustomButton';

const Header: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Botão clicado');
};

  return (
    <header className="flex items-center justify-center h-[136px] px-20 py-10 bg-white w-[1440px] mx-auto">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" />
          <div className="text-3xl font-semibold font-quicksand">WonderKids</div>

        </div>
        <nav className="flex items-center gap-2">
          <div className='w-88 border-solid border-2 border-gray-200 hover:border-black px-6 py-2 rounded-3xl'>
            <a href="#" className="text-sm">Home</a>
          </div>
          <div className='w-88 border-solid border-2 border-gray-200 hover:border-black px-6 py-2 rounded-3xl'>
            <a href="#" className="text-sm">Shop</a>
          </div>
          <div className='w-88 border-solid border-2 border-gray-200 hover:border-black px-6 py-2 rounded-3xl'>
            <a href="#" className="text-sm">About Us</a>
          </div>
          <div className='w-88 border-solid border-2 border-gray-200 hover:border-black px-6 py-2 rounded-3xl'>
            <a href="#" className="text-sm">Contact</a>
          </div>
        </nav>

        <div className="flex items-center gap-4 w-251">
          <button className="text-base font-semibold px-4 py-2 rounded">Sign In</button>

          <CustomButton
            text="Contact Us"
            onClick={handleButtonClick}
            buttonColor="border-purple text-purple bg-white"
            boxShadow='none'
            textColor="text-base">
            <span className='bg-purple flex items-center justify-center w-10 h-10 rounded-full'>
              <img src={Send} alt="Logo" />
            </span>
          </CustomButton>
        </div>
      </div>

    </header>
  );
};

export default Header;
