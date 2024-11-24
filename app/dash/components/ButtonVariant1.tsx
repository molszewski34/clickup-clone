
import React,{useState} from 'react'

type Props = {
    children:React.ReactNode,
    onClick?:()=>void,
}

const ButtonVariant1: React.FC<Props> = ({ children, onClick }) =>{
    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
    if (onClick) onClick();
  };
  return (
    <div className={` h-full flex items-center
     ${isActive?"border-b-2 border-b-blue-600":""}`}>
          <button onClick={handleClick} className='capitalize flex gap-1 px-2 py-1 rounded-md hover:bg-hoverGray hover:text-textWhite active:text-textWhite cursor-pointer'>
            {children}
          </button>
        </div>
  )
}

export default ButtonVariant1