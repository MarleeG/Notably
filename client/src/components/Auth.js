import React, { useEffect, useState } from "react";

import "./Auth.css";
const Auth = (props) => {
  const SIGN_IN = "Sign in";
  const SIGN_UP = "Sign up";
  const AUTH_METHODS_OPTIONS = [SIGN_IN, SIGN_UP];
  const AUTH_METHOD_STYLES = {
    selected: {
      background: "blue",
      border: '2px solid red',
      borderBottom: 'none',
      width: '50%',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',


    },
    default: {
      background: "#fff",
      width: '50%',
      borderBottom: '2px solid red'
    },
  };

  const [currentAuthMethod, setCurrentAuthMethod] = useState(SIGN_IN);

  useEffect(() => {}, []);
  return (
    <div className="auth-container center">
      <div className="auth-container__auth-methods">
        {AUTH_METHODS_OPTIONS.map((method, i) => {
          return (
            <span
              key={i}
              className="text-center"
              style={
                currentAuthMethod === method
                  ? AUTH_METHOD_STYLES.selected
                  : AUTH_METHOD_STYLES.default
              }
              onClick={() => {
                method === SIGN_IN
                  ? setCurrentAuthMethod(SIGN_IN)
                  : setCurrentAuthMethod(SIGN_UP);
              }}
            >
              {method}
            </span>
          );
        })}
      </div>

      <div className="auth-container__fields">
        <div className="auth-conatiner__sign-in-fields">
          Sign in fields here
        </div>

        <div className="auth-conatiner__sign-up-fields">
          Sign up fields here
        </div>
      </div>
    </div>
  );
};

export default Auth;
