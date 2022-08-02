import React from 'react';
import './style.css';
import Counter from './saga/Counter';
import Users from './saga/Users';
export default function App() {
  return (
    <div>
      <Counter />
      <Users />
    </div>
  );
}
