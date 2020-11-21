import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
        domain="english-apps.us.auth0.com"
        clientId="aHGX8oWUwcKnSf1vHjVNWfvkrEfhovcT"
        redirectUri={window.location.origin}
        audience="https://english-apps.us.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
    >
        <App/>
    </Auth0Provider>,
    document.getElementById("root")
);
