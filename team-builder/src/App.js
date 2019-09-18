import React, { useState } from 'react';
import './App.css';
import Form from './Form.js'; 

const initialTeamList = [
  { name: 'gabe', email: 'gabe@lambda.com', role: 'backend engineer' },
  { name: 'femi', email: 'femi@lambda.com', role: 'frontend engineer' },
  { name: 'alison', email: 'alison@lambda.com', role: 'ui designer' },
];

const initialTeamForm = {
  name: '',
  email: '',
  role: '', 
};

export default function App(props) {
  const [teamList, setTeamList] = useState(initialTeamList); 
  const [teamForm, setTeamForm] = useState(initialTeamForm); 

  const onNameChange = e => {
    // we have the new value for the name input inside e.target.value
    setTeamForm({
      name: e.target.value,
      email: teamForm.email, 
      role: teamForm.role
    });
  };

  const onEmailChange = e => {
    // we have the new value for the age input inside e.target.value
    setTeamForm({
      name: teamForm.name,
      email: e.target.value, 
      role: teamForm.role
    });
  };

  const onRoleChange = e => {
    // we have the new value for the age input inside e.target.value
    setTeamForm({
      name: teamForm.name,
      email: teamForm.email, 
      role: e.target.value
    });
  };

  const onFormSubmit = e => {
    // we DO need the event object
    e.preventDefault();
    const newTeamMember = {
      name: teamForm.name,
      email: teamForm.email,
      role: teamForm.role
    };
    const newTeamList = teamList.concat(newTeamMember);
    setTeamList(newTeamList);
    setTeamForm(initialTeamForm);
  };

  return (
    <div className='App'>
      <h1>Team List</h1>
      <Form 
      // handlers that can change app state
      onNameChange={onNameChange}
      onEmailChange={onEmailChange}
      onRoleChange={onRoleChange}
      onFormSubmit={onFormSubmit}
      // data we need to hydrate the form inputs
      teamForm={teamForm}/>
      {
        teamList.map(friend => (
          <h5 key={friend.id}>
            {friend.name} is a {friend.role} and can be contacted at {friend.email}.
          </h5>
        ))
      }
    </div>
  );
}
