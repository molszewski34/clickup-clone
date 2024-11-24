import React from 'react'

type Props = {
    children:React.ReactNode,
    isLineBefore?:boolean|null,
}

const ButtonVariant2:React.FC<Props> = ({children, isLineBefore=false,}) => {
    const line=`ml-[14px] relative before:content-[""] before:absolute before:-left-[9px] before:font-thin before:bg-hoverGray before:w-[1px] before:h-4 before:flex-shrink-0`
    console.log(isLineBefore)
    return (
    <div className={`h-full flex items-center
    ${isLineBefore?line:''}`} >
        <button className='capitalize flex gap-1 px-2 py-1 rounded-md hover:bg-expandButtonBgHover cursor-pointer'>
            {children}
        </button>
    </div>
  )
}

export default ButtonVariant2