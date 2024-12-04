import React, { ReactNode } from 'react';

interface ButtonIconProps {
  onClick?: () => void;
  icon: ReactNode;
  className?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {icon}
    </button>
  );
};

export default ButtonIcon;
