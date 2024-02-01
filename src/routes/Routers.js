import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../pages/auth/authContext";

// routes
import OnBoarding from "../pages/onboarding";
import Signup from "../pages/auth/signup";
import OnBoardingNext from "../pages/onboarding/OnBoardingNext";
import Signin from "../pages/auth/signin";
import Splashscreen from "../pages/splashscreen";
import Home from "../pages/home";
import Challenge from "../pages/home/Challenge";
import Challenge2 from "../pages/home/Challenge2";
import Dashboard from "../pages/dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Stories from "../pages/dashboard/stories/Stories";
import Notification from "../pages/dashboard/Notification";
import Community from "../pages/dashboard/community/Community";
import CommunityDetail from "../pages/dashboard/community/CommunityDetail";
import Profile from "../pages/dashboard/profile/Profile";

const Routers = () => {
  const { isAuthenticated } = useContext(AuthContext);
  
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
        <Route
          path='/dashboard'
          element={isAuthenticated ? <Dashboard /> : <Navigate to='/signin' />}
        >
          <Route index element={<DashboardHome />} />
          <Route path='community' element={<Community />} />
          <Route path='community-detail' element={<CommunityDetail />} />
          <Route path='notification' element={<Notification />} />
          <Route path='stories' element={<Stories />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
