import { Link } from 'react-router-dom'

const OnBoardingNext = () => {
  return (
    <div className='on-boarding-next'>
      <div>
        <h1>AQF</h1>
        <h1>A Question For</h1>
      </div>
      <div className='hero'>
        <h1>
          Own your <br /> challenge, <br />
          unlock your <br /> story.
        </h1>
      </div>
      <button className='btn-signup'>
        <Link to={'/signup'} className='btn-signup'>
          Sign Up
        </Link>
      </button>
      <div className='bottom'>
        <p>Already a member?</p>
        <button className='btn-signin'>
          <Link to={'/signin'} className='btn-signin'>
            Sign In
          </Link>
        </button>
      </div>
    </div>
  )
}

export default OnBoardingNext
