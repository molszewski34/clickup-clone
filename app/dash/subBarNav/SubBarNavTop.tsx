'use client'
import React from 'react'
import { Icons } from '../icons/icons'
// type Props = {}

const SubBarNavTop = () => {
  return (
    <nav className=' bg-nav border-borderColor border-t border-b dark:bg-subNavBackgroud font-sans font-medium flex px-4'>
      <div className='w-full flex items-center h-12 text-sm capitalize '>
        <div className='flex mr-2 h-12 gap-2'>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-hoverGray hover:text-textWhite active:text-textWhite '>
            <Icons.DashboardIcon className='text-[14px] relative top-[4px]'/>
            overview
          </div>
        </div>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-hoverGray hover:text-textWhite active:text-textWhite '>
            <Icons.BoardIcon className='text-[14px] relative top-[4px]' />
            Board
          </div>
        </div>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-hoverGray hover:text-textWhite active:text-textWhite  '>
            <Icons.ListUlicon className='text-[14px] relative top-[4px]' />
            list
          </div>
        </div>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-hoverGray hover:text-textWhite active:text-textWhite '>
            <Icons.CalendarIcon className='text-[14px] relative top-[4px] 'style={{strokeWidth:"2.4px"}}/>
            calendar
          </div>
        </div>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-hoverGray hover:text-textWhite active:text-textWhite '>
            <Icons.GantIcon className='text-[14px] relative top-[4px]' />
            gantt
          </div>
        </div>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-hoverGray hover:text-textWhite active:text-textWhite  '>
            <Icons.TeableIcon className='text-[14px] relative top-[4px]' />
            table
          </div>
        </div>
        
        </div>
        
        <div className=' ml-[14px] relative h-full flex items-center
         before:content-[""] before:absolute before:-left-[9px] before:font-thin before:bg-hoverGray before:w-[0.5px] before:h-4 before:flex-shrink-0 '>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-hoverGray cursor-pointer '>
            <Icons.PlusIco className='text-[14px] relative top-[4px]' />
            view
          </div>
        </div>
        
      </div>
      <div className='flex items-center h-12 text-sm capitalize'>
        <div className='flex items-center pl-2 h-12 gap-2'>
          <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-hoverGray hover:text-textWhite active:text-textWhite cursor-pointer'>
            <Icons.SliderHorizontal className='text-[14px] relative top-[4px]'/>
            show
          </div>
          </div>
          <div className='w-[1px] h-4 mx-[2px] bg-hoverGray'></div>
          {/* Blue button --component */}
          <div className='h-full flex items-center min-w-max normal-case'>
          <div className='flex px-[7px] h-6 text-xs items-center rounded-[0.25rem] bg-buttonBackgroundBlue hover:bg-buttonBackgroundBlueHover text-textFullWhite hover:text-textFullWhite'>
            Add card
          </div>
          </div>
          {/* end button component */}
          {/* drop down button -- component */}
          <div className='h-full flex items-center'>
          <div className='flex w-[26px] h-[26px] min-w-[26px] rounded-[13px] items-center justify-center bg-hoverGray hover:bg-expandButtonBgHover cursor-pointer'>
            <Icons.ArrowDownIcon className='text-[16px] relative top-[1px]'/>

          </div>
          </div>
          {/* end drop button component */}
        </div>
      </div>
    </nav>
  )
}
export default SubBarNavTop;