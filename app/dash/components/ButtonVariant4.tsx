import React from 'react'

type Props = {
    children:React.ReactNode,
    onClick?:()=>void,
}

const ButtonVariant4:React.FC<Props> = ({children,onClick}) => {
  return (
    <div className='h-full flex items-center'>
        <button onClick={onClick} className='flex w-[26px] h-[26px] min-w-[26px] rounded-[13px] items-center justify-center bg-grayv3 hover:bg-grayv2 transition-colors ease-in-out active:bg-grayv1 cursor-pointer'>
            {children}
        </button>
    </div>
  )
}

export default ButtonVariant4