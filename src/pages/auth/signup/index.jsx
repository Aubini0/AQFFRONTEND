import { Link } from 'react-router-dom'
import { useState } from 'react'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'

const Signup = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='signup'>
      <div className='title'>
        <h2>Create an Account</h2>
        <p>Sign up now to get started with an account.</p>
      </div>
      <form className='hero'>
        <div className='form-control'>
          <label htmlFor=''>
            Full Name <span>*</span>
          </label>
          <input type='text' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>
            Email Address <span>*</span>
          </label>
          <input type='text' />
        </div>
        <div className='form-control '>
          <label htmlFor=''>Password</label>
          <div className='password'>
            <input type={show ? 'text' : 'password'} required />
            <span className='icon' onClick={() => setShow(!show)}>
              {show ? <RiEyeOffLine /> : <RiEyeLine />}
            </span>
          </div>
        </div>
        <div className='form-control '>
          <label htmlFor=''>Confirm Password</label>
          <div className='password'>
            <input type={show ? 'text' : 'password'} required />
            <span className='icon' onClick={() => setShow(!show)}>
              {show ? <RiEyeOffLine /> : <RiEyeLine />}
            </span>
          </div>
        </div>
      </form>
      <div className='terms'>
        <input type='checkbox' />{' '}
        <p style={{ fontSize: '10px' }}>
          I have read and agree to the{' '}
          <a style={{ textDecoration: 'underline' }} href='.'>
            Terms of Service
          </a>
        </p>
      </div>
      {/* <Link to={"#"}> */}
      <button className='btn-signup'>Sign Up</button>
      {/* </Link> */}

      <p>
        Already a member? <Link to={'#'}>Log In</Link>
      </p>
    </div>
  )
}

export default Signup
