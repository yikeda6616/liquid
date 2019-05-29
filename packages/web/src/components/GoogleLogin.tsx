import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response: any) => {
  console.log(response);
};

ReactDOM.render(
  <GoogleLogin
    clientId="920424716394-smj5f8kk7mnke8dfkdiuspeo8qlgdfq5.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton'),
);
