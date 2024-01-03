import { useState } from 'react'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className='container'>
      <div className='signin' id='signin'>
        <div className='heading'>
          <h1>AQF</h1>
          <h2>A Question For</h2>
        </div>
        <form className='signin-form'>
          <div className='signin-email'>
            <label htmlFor='email' className='signin-email-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Nikki@gmail.com'
              className='signin-email-input'
            />
          </div>
          <div className='signin-password'>
            <label htmlFor='password' className='signin-password-label'>
              Password
            </label>
            <div className='signin-password-input-container'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='signin-password'
                className='signin-password-input'
                placeholder='*********'
              />
              <span className='eye-icon' onClick={handleTogglePassword}>
                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
              </span>
            </div>
          </div>
          <div className='signin-btn'>
            <button>Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
