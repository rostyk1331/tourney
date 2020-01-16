import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Amplify from 'aws-amplify';
import config from './config';

Amplify.configure({
    Auth: {
        mandatorySignId: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID,
        oauth: {
            domain: config.cognito.DOMAIN,
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'token'
        }
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
