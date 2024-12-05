import ButtonIcon from '@/app/(dashboard)/ui/ButtonIcon';
import { Icons } from '@/icons/icons';
import React from 'react';

const SwitchTask = () => {
  return (
    <div className="flex  text-sm">
      <ButtonIcon
        className=" flex justify-center items-center w-8 h-8 hover:bg-[#3c414a] rounded-md"
        icon={<Icons.ArrowDownIcon />}
      />
      <ButtonIcon
        className="flex justify-center items-center w-8 h-8 hover:bg-[#3c414a] rounded-md"
        icon={<Icons.ArrowUpIcon />}
      />
    </div>
  );
};

export default SwitchTask;
