import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './mysaga';

export default function Counter() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter Component</h1>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'DEC', payload: 1 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: 'INC', payload: 1 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: 'USERS', payload: [] })}>
        Get Users
      </button>
    </div>
  );
}
