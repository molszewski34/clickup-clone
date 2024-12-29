'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/app/server-actions/user/getUser';
import { getInitials } from '../utils/getInitials';
import { usetaskFormContext } from '@/context/FormProviders/TaskFormProvider';
import { Task } from '@/app/server-actions/types';

function UsersList() {
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  const { setFormData } = usetaskFormContext();

  return (
    <ul className="max-h-[308px] overflow-y-scroll custom-scrollbar">
      {users?.map((user) => (
        <span
          className="cursor-pointer"
          key={user.id}
          onClick={() =>
            setFormData((prevState: Task) => ({
              ...prevState,
              assignees: [
                ...(prevState.assignees ?? []),
                {
                  signUpFullName: user.signUpFullName,
                  signUpEmail: user.signUpEmail,
                },
              ],
            }))
          }
        >
          <div className=" flex items-center gap-2 py-2 px-1 rounded hover:bg-gray-100 ">
            <span className="flex items-center justify-center rounded-full w-9 h-9  bg-violet-600 text-white text-xs">
              {getInitials(user.signUpFullName)}
            </span>
            {user.signUpFullName}
          </div>
        </span>
      ))}
    </ul>
  );
}

export default UsersList;
