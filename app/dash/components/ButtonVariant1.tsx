
import React from 'react'

type Props = {
    children:React.ReactNode,
    onClick?:()=>void,
    isActive?:boolean,
}

const ButtonVariant1: React.FC<Props> = ({ children, onClick,isActive=false }) =>{
  return (
    <div className={` h-full flex items-center
     ${isActive?"border-b-2 border-b-blue-600":""}`}>
          <button onClick={onClick} className='capitalize flex gap-1 px-2 py-1 rounded-md hover:bg-grayv3 hover:text-whitev2 transition-colors ease-in-out active:bg-grayv2 active:text-whitev2 cursor-pointer'>
            {children}
          </button>
        </div>
  )
}

export default ButtonVariant1