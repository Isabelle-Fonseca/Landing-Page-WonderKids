import React from 'react';

interface CustomButtonProps {
    text: string;
    onClick?: () => void; 
    buttonColor?: string;
    boxShadow?: string;
    iconColor?: string; 
    textColor?: string; 
    children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    text,
    onClick,
    buttonColor = 'border-purple text-purple',
    boxShadow = 'shadow-xl shadow-boxShadow',
    iconColor = 'bg-white',
    textColor = 'text-base',
    children,
}) => {
    return (
        <button
            className={`flex items-center gap-4 border-solid border-2 ${buttonColor} pl-6 pr-3 py-2 rounded-full ${boxShadow}`}
            onClick={onClick}
        >
            <span className={textColor}>{text}</span>
            <span className={`${iconColor} flex items-center justify-center w-10 h-10 rounded-full `}>
            {children}
            </span>
        </button>
    );
};

export default CustomButton;
