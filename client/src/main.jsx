import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

//main.jsx = main entry point for this app
//what file or peice of code will be executed in order
//for it to boot up the app
//"what do you need to do to activate react and reload on your page"
//
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://techtonicalendapaw/api",
        scope: "openid profile email",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

{
  /* <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN}
      clientId={import.meta.env.VITE_CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin + "/adoptablepets",
        scope: "openid profile email",
      }}
    >
      <App />
    </Auth0Provider> */
}
