import React from 'react'

type Props = {children:React.ReactNode}

const ButtonVariant3:React.FC<Props> = ({children}) => {
  return (
    <div className='h-full  flex items-center min-w-max normal-case'>
        <button className='flex px-[7px] h-6 text-xs items-center rounded-[0.25rem] bg-buttonBackgroundBlue hover:bg-buttonBackgroundBlueHover text-textFullWhite hover:text-textFullWhite'>
        {children}
        </button>
    </div>
  )
}

export default ButtonVariant3