import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { AuthContext } from "../authContext";

import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { handleRegister } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      setFormData((prevState) => ({
        ...prevState,
        password: "",
        confirmPassword: "",
      }));
      return;
    } else {
      handleRegister(formData);
      navigate("/dashboard");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className='signup'>
      <div className='title'>
        <h2>Create an Account</h2>
        <p>Sign up now to get started with an account.</p>
      </div>
      <form className='hero' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='username'>
            Full Name <span>*</span>
          </label>
          <input
            type='text'
            required
            name='username'
            id='username'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor=''>
            Email Address <span>*</span>
          </label>
          <input
            type='email'
            name='email'
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-control '>
          <label htmlFor='password'>Password</label>
          <div className='password'>
            <input
              type={showPassword ? "text" : "password"}
              required
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
            <span className='icon' onClick={handleTogglePassword}>
              {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
            </span>
          </div>
        </div>
        <div className='form-control '>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <div className='password'>
            <input
              type={showPassword ? "text" : "password"}
              required
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span className='icon' onClick={handleTogglePassword}>
              {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
            </span>
          </div>
        </div>

        <div className='terms'>
          <input type='checkbox' />{" "}
          <p style={{ fontSize: "10px" }}>
            I have read and agree to the{" "}
            <a style={{ textDecoration: "underline" }} href='/#'>
              Terms of Service
            </a>
          </p>
        </div>
        <button className='btn-signup'>Sign Up</button>
        <p style={{ textAlign: "center" }}>
          Already a member? <NavLink to='/signin'>Log In</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Signup;
