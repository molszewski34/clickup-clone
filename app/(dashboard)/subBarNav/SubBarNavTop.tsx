'use client'
import React from 'react'
import { Icons } from '../icons/icons'
// type Props = {}

const SubBarNavTop = () => {
  return (
    <nav className=' bg-nav border-grayv5 border-t border-b dark:bg-grayv4 font-sans font-medium'>
      <div className='w-full flex items-center h-12 text-sm capitalize gap-2 px-4'>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-grayv3 hover:text-whitev2 active:text-whitev2 '>
            <Icons.DashboardIcon className='text-[14px] relative top-[4px]'/>
            overview
          </div>
        </div>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-grayv3 hover:text-whitev2 active:text-whitev2 '>
            <Icons.BoardIcon className='text-[14px] relative top-[4px]' />
            Board
          </div>
        </div>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-grayv3 hover:text-whitev2 active:text-whitev2  '>
            <Icons.ListUlicon className='text-[14px] relative top-[4px]' />
            list
          </div>
        </div>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-grayv3 hover:text-whitev2 active:text-whitev2 '>
            <Icons.CalendarIcon className='text-[14px] relative top-[4px] 'style={{strokeWidth:"2.4px"}}/>
            calendar
          </div>
        </div>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-grayv3 hover:text-whitev2 active:text-whitev2 '>
            <Icons.GantIcon className='text-[14px] relative top-[4px]' />
            gantt
          </div>
        </div>
        <div className='border-b-2 border-b-blue-600 h-full flex items-center'>
          <div className='flex gap-1 px-2 py-1 rounded-md hover:bg-grayv3 hover:text-whitev2 active:text-whitev2  '>
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