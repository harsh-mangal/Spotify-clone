import React from 'react'
import './Login.css';
import { loginUrl } from '../spotify';
const Login = () => {
  return  (
    <div className='login'>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/01/Spotify_Logo_RGB_White-1.png" alt="" />
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login