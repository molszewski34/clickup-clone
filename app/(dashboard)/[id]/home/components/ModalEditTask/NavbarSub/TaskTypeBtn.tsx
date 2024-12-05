import Icon from '@/app/(dashboard)/ui/Icon';
import { Icons } from '@/icons/icons';
import React from 'react';

const TaskTypeBtn = () => {
  return (
    <button className="flex gap-2 items-center bg-grayv4  text-xs text-gray-300  px-2 py-[3px] rounded-l border border-gray-500 hover:bg-[#3c414a]">
      <Icon icon={<Icons.FaRegCircleDot />} />
      Task
      <Icon icon={<Icons.ArrowDownIcon />} />
    </button>
  );
};

export default TaskTypeBtn;
