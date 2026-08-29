import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { logIn, signUp } from '../../firebase/firebase'

const Login = () => {
  const [signState, setSignState] = useState('Sign In')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userAuth = async (event) => {
    event.preventDefault()
    if (signState === 'Sign In') {
      await logIn(email, password)
    } else {
      await signUp(name, email, password)
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt='logo' />
      <div className='login-form'>
        <h1>{signState}</h1>

        <form>
          {signState === 'Sign Up'
            ? <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Your Name' />
            : <></>}

          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email' />

          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' />

          <button onClick={userAuth} type='submit'>{signState}</button>

          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' />
              <label htmlFor=''>Remember me</label>
            </div>

            <p>Need Help?</p>
          </div>
        </form>

        <div className='form-switch'>
          {signState === 'Sign In'
            ? <p>New to Netflix? <span onClick={() => setSignState('Sign Up')}>Sign up Now</span></p>
            : <p>Already have an Account? <span onClick={() => setSignState('Sign In')}>Sign in Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login