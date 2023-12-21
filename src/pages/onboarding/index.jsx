import { Link } from 'react-router-dom'
import signupImg from '../../assets/image 2.png'
const OnBoarding = () => {
  return (
    <div className='onbording'>
      <div>
        <h1>AQF</h1>
        <h1>A Question For</h1>
      </div>
      <img src={signupImg} alt='signup' />
      <Link className='btn-get-started' to={'/onboardnext'}>
        Get Started
      </Link>
    </div>
  )
}

export default OnBoarding
