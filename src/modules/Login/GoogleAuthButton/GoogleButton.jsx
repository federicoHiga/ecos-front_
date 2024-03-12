import React from "react";
import { useGoogleLogin } from '@react-oauth/google';
import google from '../../../assets/svg/google_icon.svg'


export default function GoogleButton() {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: () => {console.log('Fallo del Login')},
        flow: 'auth-code',
    });
      
    return(
          <button onClick={() => login()}>
            <img src={google} alt="google" id='google-img'/>
            <p>Continuá con Google</p>
          </button>
    )
}

