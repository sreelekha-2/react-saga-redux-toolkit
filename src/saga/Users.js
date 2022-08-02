import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Users() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>Username : {user.username}</h3>
            <p>Email : {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
