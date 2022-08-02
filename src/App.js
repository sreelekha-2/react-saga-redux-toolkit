import React from 'react';
import './style.css';
import Counter from './saga/Counter';
import Users from './saga/Users';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Counter />
      <Users />
    </div>
  );
}
