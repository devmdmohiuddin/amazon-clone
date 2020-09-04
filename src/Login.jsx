import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from './firebase';

import './Login.css';

function Login() {
  const history = useHistory()
  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then( auth => {
      history.push("/")
    })
      .catch(e => alert(e.message))
  };

  const register = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then( auth => {
        history.push("/")
      })
      .catch(e => alert(e.message))
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input onChange={event => setEamil(event.target.value)} value={email} type="email" />
          <h5>Password</h5>
          <input onChange={event => setPassword(event.target.value)} value={password} type="password" />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our cookies Notice and our interest-based Adds
          Notice
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
