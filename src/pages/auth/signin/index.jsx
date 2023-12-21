import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Signin = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="signin">
      <div>
        <h1>AQF</h1>
        <h1>A Question For</h1>
      </div>

      <form className="hero">
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" required />
        </div>
        <div className="form-control ">
          <label htmlFor="">Password</label>
          <div className="password">
            <input type={show ? "text" : "password"} required />
            <span className="icon" onClick={() => setShow(!show)}>
              {show ? <RiEyeOffLine /> : <RiEyeLine />}
            </span>
          </div>
        </div>
        <div className="btn">
          <NavLink to={"/home"}>
            <button className="btn-signin">Continue</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Signin;
