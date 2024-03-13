import React from "react";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import google from '../../../assets/svg/google_icon.svg'
import { useNavigate } from 'react-router-dom'


export default function GoogleButton() {
  const navigate = useNavigate()

    const googleSuccess = async (res) => {
      const scope = res?.scope
      const code = res?.code
      try {
        console.log(res)
        console.log(scope)
        console.log(code)
        await axios.post('http://localhost:8080/login/oauth2/code/google', { code, scope }); // ruta del backend 
        navigate('/');
      } catch (error) {
        console.log(error)
      }
    }

    const googleFailure = (error) => {
      console.log(error)
      console.log('Error al iniciar sesión. Intente de nuevo más tarde.')
    }


     const login = useGoogleLogin({
       onSuccess: googleSuccess,
       onError: googleFailure,
       flow: 'auth-code',
   });
      
    return(
          <button onClick={() => login()}>
            <img src={google} alt="google" id='google-img'/>
            <p>Continuá con Google</p>
          </button>
    )
}

