import Icon from '@/app/(dashboard)/ui/Icon';
import { Icons } from '@/icons/icons';
import React from 'react';

const Title = () => {
  return (
    <div className="flex gap-2 items-center bg-grayv4 hover:bg-[#3c414a] focus-within:bg-[#3c414a] focus-within:ring-2  rounded-lg p-2">
      <Icon className="text-whitev1 text-2xl mb-2" icon={<Icons.CiShare2 />} />
      <input
        value={'Lorem ipsum dolor sit amet consectetur '}
        className="text-3xl font-bold w-full text-whitev1 bg-transparent outline-none focus:ring-0 active:ring-0 active:outline-none focus-visible:ring-transparent focus-visible:ring-0  focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Title;
