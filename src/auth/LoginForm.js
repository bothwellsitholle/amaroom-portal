import React, { useState } from 'react'
import './styles.scss'

const Input = ({ id, type, label, disabled, onChange }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
    onChange={(e) => onChange(e.target.value)}
  />
)

const LoginForm = ({ mode, setIsLoggedIn, setErr }) => {
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [createPassword, setCreatePassword] = useState('')
  const [repeatpassword, setRepeatpassword] = useState('')
  const [loading,] = useState(false)

  // const login = { username: 'admin', password: '123test' }

  const loginHandler = () => {
    console.log('username:  ', username, ' password: ', password, 'local email', localStorage.getItem('email'), ' loginpassword: ', localStorage.getItem('loginpassword') )
    if (username === 'admin' && password === '123test') {
      localStorage.setItem('token', username)
      setUsername('')
      setPassword('')
      localStorage.setItem('email', username)
      localStorage.setItem('fullname', 'Sbusiso Nkala') 
      setErr(false)
      setIsLoggedIn(true)
    } else if(localStorage.getItem('email') === username && localStorage.getItem('loginpassword') === password ){
      localStorage.setItem('token', username)
      setUsername('')
      setPassword('')
      setErr(false)
      setIsLoggedIn(true)
    } else {
      setErr(true, 'Username or password is incorrect!')
    }
  }

  const signupHandler = () => {
    console.log('email:  ', email, ' password: ', createPassword, ' password: ', repeatpassword, ' fullname: ', fullname )
    if (repeatpassword  && createPassword && email && fullname && repeatpassword ===  createPassword) {
      localStorage.setItem('token', email)
      localStorage.setItem('email', email)
      localStorage.setItem('fullname', fullname)
      localStorage.setItem('loginpassword', createPassword)
      setUsername('')
      setPassword('')
      setErr(false)
      setIsLoggedIn(true)
    } else {
      setErr(true, 'Passwords do not match')
    }
  }
  return (
    <>
      <div className="form-block__input-wrapper">
        <div className="form-group form-group--login">
          <Input
            type="text"
            id="username"
            label="user name"
            disabled={mode === 'signup'}
            value={username}
            onChange={setUsername}
          />
          <Input
            type="password"
            id="password"
            label="password"
            disabled={mode === 'signup'}
            value={password}
            onChange={setPassword}
          />
        </div>
        <div className="form-group form-group--signup">
          <Input
            type="text"
            id="fullname"
            label="full name"
            disabled={mode === 'login'}
            value={fullname}
            onChange={setFullname}
          />
          <Input
            type="email"
            id="email"
            label="email"
            disabled={mode === 'login'}
            value={email}
            onChange={setEmail}
          />
          <Input
            type="password"
            id="createpassword"
            label="password"
            disabled={mode === 'login'}
            value={createPassword}
            onChange={setCreatePassword}

          />
          <Input
            type="password"
            id="repeatpassword"
            label="repeat password"
            disabled={mode === 'login'}
            value={repeatpassword}
            onChange={setRepeatpassword}
          />
          
        </div>
      </div>
      <br />
      <button className="button button--primary full-width" type="submit" onClick={() => {mode === 'login' ? loginHandler() : signupHandler()}}>
        {mode === 'login' && !loading && 'Sign In'}
        {mode === 'signup' && !loading && 'Sign Up'}
        {loading && 'loading...'}
      </button>
      </>
  )
}

export default LoginForm
