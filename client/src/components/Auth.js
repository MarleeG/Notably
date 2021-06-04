import React, { useEffect, useState, Fragment } from "react";
import { Form } from "react-bootstrap";
import Input from "../UIElements/Input";

import "./Auth.css";
const Auth = (props) => {
  const SIGN_IN = "Sign in";
  const SIGN_UP = "Sign up";
  const AUTH_METHODS_OPTIONS = [SIGN_IN, SIGN_UP];
  const AUTH_METHOD_STYLES = {
    selected: {
      background: "blue",
      border: "2px solid red",
      borderBottom: "none",
      width: "50%",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
    },
    default: {
      background: "#fff",
      width: "50%",
      borderBottom: "2px solid red",
    },
  };
  const [currentAuthMethod, setCurrentAuthMethod] = useState(SIGN_IN);


  const signInFields = () => {
    return <Fragment>
      <Input type="text" placeholder="enter your username" label="Sign In"/>
      <Input type="password" placeholder="enter your password"/>

    </Fragment>
  }


  const signUpFields = () => {
    return <Fragment>
      <Input type="text" placeholder="create a username" label="Sign Up"/>
      <Input type="password" placeholder="create a password"/>
      <Input type="password" placeholder="re-type password"/>
    </Fragment>
  }

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
          <Form>

            {currentAuthMethod === SIGN_IN ? signInFields() : signUpFields()}
          </Form>
        </div>

        <div className="auth-conatiner__sign-up-fields"></div>
      </div>
    </div>
  );
};

export default Auth;