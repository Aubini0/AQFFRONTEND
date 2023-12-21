import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OnBoarding from '../pages/onboarding'
import Signup from '../pages/auth/signup'
import OnBoardingNext from '../pages/onboarding/OnBoardingNext'
import Signin from '../pages/auth/signin'
import Splashscreen from '../pages/splashscreen'
import Home from '../pages/home'
import Challenge from '../pages/home/Challenge'
import Challenge2 from '../pages/home/Challenge2'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splashscreen />} />
        <Route path='/onboard' element={<OnBoarding />} />
        <Route path='/onboardnext' element={<OnBoardingNext />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/challenge' element={<Challenge />} />
        <Route path='/challenge2' element={<Challenge2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
