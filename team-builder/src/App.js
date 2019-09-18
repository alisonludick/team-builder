import React, { useState } from 'react';
import './App.css';
import Form from './Form.js'; 

const initialTeamList = [
  { name: 'gabe', email: '42', role: 'backend engineer' },
  { name: 'femi', email: '23', role: 'frontend engineer' },
  { name: 'alison', email: '30', role: 'ui designer' },
];

const initialTeamForm = {
  name: '',
  email: '',
  role: '', 
};

export default function Container() {
  

  return (
    <div className='container-hello-world'>
      <Form />
      {
        initialTeamList.map(friend => (
          <h5 key={friend.id}>
            {friend.name} is a {friend.role}.
          </h5>
        ))
      }
    </div>
  );
}
