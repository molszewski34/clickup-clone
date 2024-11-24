import React from 'react'

type Props = {children:React.ReactNode}

const ButtonVariant4:React.FC<Props> = ({children}) => {
  return (
    <div className='h-full flex items-center'>
        <button className='flex w-[26px] h-[26px] min-w-[26px] rounded-[13px] items-center justify-center bg-hoverGray hover:bg-expandButtonBgHover cursor-pointer'>
            {children}
        </button>
    </div>
  )
}

export default ButtonVariant4