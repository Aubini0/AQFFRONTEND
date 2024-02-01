import React, { useContext, useEffect, useState } from "react";

import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

import { AuthContext } from "../../auth/authContext";

const EditForm = () => {
  const { user, setUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <form className='edit-form'>
      <div>
        <label htmlFor='name'>name</label>
        <input
          type='text'
          id='name'
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='email'>email</label>
        <input
          type='email'
          id='email'
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='password'>password</label>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            value={user.password}
            id='password'
            onChange={handleChange}
          />
          <span className='eye-icon' onClick={handleTogglePassword}>
            {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
          </span>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
