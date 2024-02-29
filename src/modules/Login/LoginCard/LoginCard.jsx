import React from 'react'
import logo from '../../../assets/svg/nav/logo.svg'
import '../../../assets/styles/Login/logincard.css'
// import google from '../../../assets/svg/login/google.svg'

export default function LoginCard(props){
  return(
    <div className='login-card'>
      <h1>{props.title}</h1>
      <p>{props.topText}</p>
      <img src={logo} alt="logo" id='logo'/>
      <p>{props.bottomText}</p>
      <button>
        {/* <img src={google} alt="google" id='google-img'/> */}
        <p>Continuá con Google</p>
      </button>
    </div>
  )
}