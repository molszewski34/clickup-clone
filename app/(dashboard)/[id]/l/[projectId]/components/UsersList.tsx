'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/app/server-actions/user/getUser';
import { getInitials } from '../utils/getInitials';

function UsersList() {
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>
          {getInitials(user.signUpFullName)} ({user.signUpEmail})
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
