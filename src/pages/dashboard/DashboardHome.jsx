import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className='dashboard-home'>
      <div>
        <h2>
          Hi, <br /> {user.name}
        </h2>
        <p>
          You can edit your details <Link to='/dashboard/profile'>here</Link>
        </p>
      </div>
      <button>What's going on</button>
    </section>
  );
};

export default DashboardHome;
