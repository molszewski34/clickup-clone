import React from 'react';

type Props = {
  children: React.ReactNode;
  doubleButtonLeft?: boolean;
  doubleButtonRight?: boolean;
  padding?:string;
  height?:string;
  onClick?:()=>void;
};

const ButtonVariant3: React.FC<Props> = (
  { children,onClick, 
    doubleButtonLeft = false, 
    doubleButtonRight = false,
    padding="px-[7px]", 
    height="h-6",
  }) => {
  const doubleClass = doubleButtonLeft
    ? 'rounded-l-[0.25rem]' 
    : doubleButtonRight
    ? 'rounded-r-[0.25rem] border-l-[1px] border-grayv6'
    : 'rounded-[0.25rem]';

  return (
    <div className="h-full flex items-center min-w-max normal-case">
      <button onClick={onClick}
        className={`flex text-xs  items-center bg-bluev1 hover:bg-blue_400 text-whitev1 hover:text-whitev1 
          ${doubleClass} ${padding} ${height}
          `}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant3;
