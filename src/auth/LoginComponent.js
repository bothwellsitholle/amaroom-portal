import React, { useState } from 'react';
import './styles.scss';
import LoginForm from './LoginForm';
import { ReactComponent as LogoWhite } from '../assets/images/logos/materialprowhite.svg';


const LoginComponent = ({ mode, onSubmit, setIsLoggedIn }) => {
  const [state_mode, setStateMode] = useState(mode);
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState(false);

  const toggleMode = () => {
    let newMode = state_mode === 'login' ? 'signup' : 'login';
    setStateMode(newMode);
    setErr(false)
  };
  return (
    <div>
      <div
        style={{
          marginTop: 80,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LogoWhite />
        <div
          className={`form-block-wrapper form-block-wrapper--is-${state_mode }`}
        ></div>
        <section className={`form-block form-block--is-${state_mode }`}>
          <header className='form-block__header'>
            <h1>{state_mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
            <div className='form-block__toggle-block'>
              <span>
                {state_mode === 'login' ? "Don't" : 'Already'} have an account? Click
                here 
                &#8594;
              </span>
              <input id='form-toggler' type='checkbox' onClick={() => {toggleMode()}} />
              <label htmlFor='form-toggler'></label>
            </div>
          </header>
          {err && <>
          <div className="form-block__toggle-block">
            <span style={{color: 'red'}}>{errMessage}</span>
          </div>
          <br/>
          </>}
          <LoginForm
            mode={state_mode}
            onSubmit={onSubmit}
            setIsLoggedIn={setIsLoggedIn}
            setErr={(a, b) => {
              setErr(a)
              setErrMessage(b)
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default LoginComponent;
