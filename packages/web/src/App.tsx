import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';

import './App.css';

const responseGoogle = async (response: any) => {
  console.log(response);
  await axios.post('http://localhost:3030/api/login', response);
};

const App: React.FC = () => {
  return (
    <div className="App">
      <GoogleLogin
        responseType="code"
        clientId="920424716394-smj5f8kk7mnke8dfkdiuspeo8qlgdfq5.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default App;
