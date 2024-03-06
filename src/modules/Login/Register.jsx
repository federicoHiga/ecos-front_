import React from 'react'
import LoginCard from './LoginCard/LoginCard'
import '../../assets/styles/Login/login.css'
import Nav from '../nav/Nav'

export default function Register(){
  return (
    <div id='register'>
      <Nav/>
      <div>
        <LoginCard 
        title="Registrate"
        topText="Sumate a ECOSistema"
        bottomText="Registrate con tu cuenta de Gmail"/>
      </div>
    </div>

  )
}