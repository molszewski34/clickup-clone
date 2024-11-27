import ButtonVariant2 from '@/components/ButtonVariant2';
import { Icons } from '@/icons/icons';
import React, { useState } from 'react'

type Props = {
    children:React.ReactNode,
    spaceName:string
}

const SubBarNavHeader:React.FC<Props> = ({children,spaceName}) => {
  const [activeButton, setActiveButton]=useState<string|null>(null);
  return (
    <div className='font-sans flex items-center text-white_100 dark:bg-grayv4 max-h-[112px] px-12 pt-6 pb-4'>
      <h1 className='text-2xl mr-[6px]'>{spaceName}</h1>
      <ButtonVariant2 isActive={activeButton==='dots'} onClick={()=>setActiveButton((prev)=>prev==='dots'?"":'dots')}>
       <Icons.DotsIcon className='h-8 '/>
      </ButtonVariant2>
    </div>
  )
}

export default SubBarNavHeader