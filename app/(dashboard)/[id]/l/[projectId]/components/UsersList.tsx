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
    <ul>
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
          {getInitials(user.signUpFullName)} ({user.signUpEmail})
        </span>
      ))}
    </ul>
  );
}

export default UsersList;
