import React from 'react';
import TaskTypeBtn from './TaskTypeBtn';
import TaskIdBtn from './TaskIdBtn';
import CoverBtn from './CoverBtn';

const NavbarSub = () => {
  return (
    <div className="flex  bg-grayv4  text-white p-2 ">
      <div className="flex items-center ">
        <TaskTypeBtn />
        <TaskIdBtn />
        <CoverBtn />
      </div>
    </div>
  );
};

export default NavbarSub;
