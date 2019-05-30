import React from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = async (response: any) => {
  console.log(response);
  await axios.post('http://localhost:3030/api/login', response);
};

const SignIn: React.FC = () => {
  return (
    <GoogleLogin
      responseType="code"
      clientId="920424716394-smj5f8kk7mnke8dfkdiuspeo8qlgdfq5.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default SignIn;
