import React,{useState} from 'react';

import Portal from './portal'
import {UserCard} from './usercard.js'
import './userscreen.css'

const  generateCards = () => {
  const arr = [];
  for (let i = 0 ; i < 10 ; ++i) {
   arr.push(<UserCard id={i}/>)
  }
  return arr;
}

// pass the flag value using context 
// two flag status 

export const UserScreen = (props) => {
  const[modalFlag , setModal]= useState(localStorage.getItem("modalFlag"))
  const handleCreateUser = () => {
  localStorage.setItem("modalFlag","true")
  setModal(localStorage.getItem("modalFlag"))
  }
  return (
    <>
    <div className="screen-container">   {generateCards()}
    </div>
     <button onClick={handleCreateUser}> Create User </button>
     <Portal show={modalFlag}/>
    </>
  )
}