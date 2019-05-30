import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Admin from '../Admin';

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
      <Router>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.ADMIN} component={Admin} />
      </Router>
    </div>
  );
};

export default App;
