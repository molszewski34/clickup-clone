import React from 'react';

type Props = {
  children: React.ReactNode;
  doubleButtonLeft?: boolean;
  doubleButtonRight?: boolean;
  onClick?:()=>void
};

const ButtonVariant3: React.FC<Props> = ({ children,onClick, doubleButtonLeft = false, doubleButtonRight = false }) => {
  const doubleClass = doubleButtonLeft
    ? 'rounded-l-[0.25rem]' 
    : doubleButtonRight
    ? 'rounded-r-[0.25rem] border-l-[1px] border-grayv6'
    : 'rounded-[0.25rem]';

  return (
    <div className="h-full flex items-center min-w-max normal-case">
      <button onClick={onClick}
        className={`flex px-[7px] h-6 text-xs  items-center bg-bluev1 hover:bg-bluev2 text-whitev1 hover:text-whitev1 ${doubleClass}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant3;
