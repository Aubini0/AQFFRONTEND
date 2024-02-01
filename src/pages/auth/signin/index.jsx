import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

import { AuthContext } from "../authContext";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useContext(AuthContext);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") return;
    handleLogin(formData);
    navigate("/dashboard");
  };

  return (
    <div className='container'>
      <div className='signin' id='signin'>
        <div className='heading'>
          <h1>AQF</h1>
          <h2>A Question For</h2>
        </div>
        <form className='signin-form' onSubmit={handleSubmit}>
          <div className='signin-email'>
            <label htmlFor='email' className='signin-email-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              required
              placeholder='user@example.com'
              className='signin-email-input'
              onChange={handleChange}
            />
          </div>
          <div className='signin-password'>
            <label htmlFor='password' className='signin-password-label'>
              Password
            </label>
            <div className='signin-password-input-container'>
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                name='password'
                required
                value={formData.password}
                onChange={handleChange}
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
          <p>
            Don't have an account? <Link to='/signup'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
