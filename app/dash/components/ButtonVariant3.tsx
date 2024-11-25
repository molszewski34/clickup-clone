import React from 'react'

type Props = {
    children:React.ReactNode,
    doubleButton?:boolean
}

const ButtonVariant3:React.FC<Props> = ({children,doubleButton=false,}) => {
  return (
    <div className='h-full  flex items-center min-w-max normal-case'>
        <button className={`flex px-[7px] h-6 text-xs items-center bg-bluev1 hover:bg-bluev2 text-whitev1 hover:text-whitev1
            ${!doubleButton?'rounded-[0.25rem]':"rounded-l-[0.25rem]"}`}>
        {children}
        </button>
    </div>
  )
}

export default ButtonVariant3