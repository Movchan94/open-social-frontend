import React, { useRef } from 'react';
import s from './login.module.scss';
import { Link } from 'react-router-dom'
const Login = () => {

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(emailRef.current.value)
      console.log(passwordRef.current.value)
  }
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  
  return (
    <main className={s.loginMain}>
      <form className={s.loginForm} onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email:
          <input ref={emailRef} id="email" type='email' required/>
        </label>
        <label htmlFor='password'>
          Password:
          <input ref={passwordRef} id="email" type='password' required/>
        </label>
        <button>Login</button>
        <p>If you don't have account please <Link to="/signup">signup</Link></p>
      </form>
    </main>
  );
};

export default Login;
