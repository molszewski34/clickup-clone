'use client'
import React, { useState } from 'react'
import { Icons } from '../icons/icons'
import ButtonVariant1 from '../components/ButtonVariant1'
import ButtonVariant2 from '../components/ButtonVariant2'
import ButtonVariant3 from '../components/ButtonVariant3'
import ButtonVariant4 from '../components/ButtonVariant4'
const SubBarNavTop = () => {
  const [isToolView,setIsToolView]=useState(false);
  
  return (
    <nav className=' bg-nav border-borderColor border-t border-b dark:bg-subNavBackgroud font-sans font-medium flex px-4'>
      <div className='w-full flex items-center h-12 text-sm capitalize '>
        <div className='flex mr-2 h-12 gap-2'>
        <ButtonVariant1 onClick={()=>setIsToolView(false)}>
          <Icons.DashboardIcon className='text-[14px] relative top-[4px]'/>
          overview
        </ButtonVariant1>
        <ButtonVariant1 onClick={()=>setIsToolView(true)}>
          <Icons.BoardIcon className='text-[14px] relative top-[4px]'/>
          board
        </ButtonVariant1 >
        <ButtonVariant1 onClick={()=>setIsToolView(true)}>
          <Icons.ListUlicon className='text-[14px] relative top-[4px]'/>
          list
        </ButtonVariant1>
        <ButtonVariant1 onClick={()=>setIsToolView(true)}>
          <Icons.CalendarIcon className='text-[14px] relative top-[4px] 'style={{strokeWidth:"2.4px"}}/>
          calendar
        </ButtonVariant1>
        <ButtonVariant1 onClick={()=>setIsToolView(true)}>
          <Icons.GantIcon className='text-[14px] relative top-[4px]'/>
          gantt
        </ButtonVariant1>
        <ButtonVariant1 onClick={()=>setIsToolView(true)}>
          <Icons.TeableIcon className='text-[14px] relative top-[4px]'/>
          table
        </ButtonVariant1>
        </div>
        <ButtonVariant2 isLineBefore={true}>
          <Icons.PlusIco className='text-[14px] relative top-[4px]'/>
          view
        </ButtonVariant2>
        
      </div>
      <div className='flex items-center h-12 text-sm capitalize'>
        <div className='flex items-center pl-2 h-12 gap-2'>
          {isToolView?
            <>
              <ButtonVariant2>
                <Icons.SearchIcon className='text-[16px] relative top-[2px]'/>
                search  
              </ButtonVariant2>
              <ButtonVariant2>
                <Icons.SliderHorizontal className='text-[14px] relative top-[4px]'/>
                show
              </ButtonVariant2>
              <ButtonVariant2>
                <Icons.SettingsIcon className='text-[16px] relative top-[3px]'/>
                customize
              </ButtonVariant2>
            </>
          : 
            <ButtonVariant2>
              <Icons.SliderHorizontal className='text-[14px] relative top-[4px]'/>
              show
            </ButtonVariant2>
          }
          <div className='w-[1px] h-4 mx-[2px] bg-hoverGray'></div>
          <ButtonVariant3>
            Add card
          </ButtonVariant3>
          <ButtonVariant4>
            <Icons.ArrowDownIcon className='text-[16px] relative top-[1px]'/>
          </ButtonVariant4>
        </div>
      </div>
    </nav>
  )
}
export default SubBarNavTop;