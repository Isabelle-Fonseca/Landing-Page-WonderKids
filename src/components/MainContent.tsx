import React from 'react';
import CustomButton from './CustomButton';
import Line1 from './../assets/Line1.svg';
import Line2 from './../assets/Line2.svg';
import Element1 from './../assets/Element1.svg';
import Element2 from './../assets/Element2.svg';
import Element3 from './../assets/Element3.svg';
import littleBoy1 from './../assets/littleboy1.svg';
import littleBoy2 from './../assets/littleboy2.svg';

const MainContent = () => {
    const handleButtonClick = () => {
        console.log('Botão clicado');
    };
    return (
        <div className="relative flex flex-col items-center gap-2 py-16">

            <div className="relative flex flex-col items-center  gap-12 w-928">
                <h1 className="font-quicksand text-112 text-center font-semibold leading-none">The best place to <span className='font-courgette font-normal text-purple'> learn</span> and <span className='font-courgette font-normal text-yellow'>play </span>
                    for kids</h1>
                <img src={Line1} alt="Line" className='absolute left-[px] translate-x-[-290px] translate-y-[220px]' />
                <img src={Line2} alt="Line" className='absolute right-[px] translate-x-[322px] translate-y-[220px]' />
                <p className="text-lg w-511 text-center font-quicksand">Discover thousands of fun and interactive learning activities to support your child's growth and learning process.</p>
                
                <CustomButton
                    text="Get Started"
                    onClick={handleButtonClick}
                    buttonColor="border-purple text-white bg-purple" 
                    textColor="text-xl">
                    <span className='bg-white flex items-center justify-center w-10 h-10 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.667 3.33337L3.33366 12.6667" stroke="#704FE6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.667 10.18V3.33337H5.82033" stroke="#704FE6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </CustomButton>


            </div>
            <img src={littleBoy1} alt="little boy" className='absolute translate-x-[-540px] translate-y-[-20px]' />
            <img src={Element1} alt="element" className='absolute translate-x-[-462px] translate-y-[412px]' />
            <img src={Element2} alt="element" className='absolute translate-x-[-516px] translate-y-[170px]' />
            <span className='w-7 h-7 absolute translate-x-[540px] translate-y-[260px] bg-purple-light text-purple-light rounded-full'>.</span>
            <img src={Element3} alt="element" className='absolute translate-x-[580px] translate-y-[40px]' />
            <img src={littleBoy2} alt="little boy" className='absolute translate-x-[436px] translate-y-[328px]' />

        </div>
    );
};

export default MainContent;
