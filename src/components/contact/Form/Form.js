import {useState} from 'react';
import React from 'react';
import Input from './Input';
import Users from './Users';
import './Form.css';

export default function Form() {
    const [users, setUsers]=useState([]);
    function addUser(user){
        const newUsers=[...users]
        newUsers.push(user)
        setUsers(newUsers);
    }
  return ( <div className='App'>
      <Input addUser={addUser}/>
         
  </div>)
}
