'use client'
import React from 'react'
import { Icons } from '../icons/icons'
// type Props = {}

const SubBarNavTop = () => {
  return (
    <nav className=' bg-nav border-borderColor border-t border-b dark:bg-subNavBackgroud font-sans font-medium'>
      <div className='w-full flex items-center h-12 text-sm capitalize gap-2 px-4'>
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
        <div className=' h-full flex items-center'>
          <span className='pointer-events-none  '>
            |
          </span>
        </div>
      </div>

    </nav>
  )
}
export default SubBarNavTop;