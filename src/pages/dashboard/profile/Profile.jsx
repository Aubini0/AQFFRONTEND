import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";

import CustomAvatar from "../../../components/CustomAvatar";
import EditForm from "./EditForm";

import Tags from "./Tags";

const Profile = () => {
  const navigate = useNavigate();
  
  return (
    <section className='profile'>
      <header className='profile-header'>
        <FaArrowLeft
          onClick={() => navigate(-1)}
          className='mr-4'
          title='Go back'
        />
        <h2>Edit Profile</h2>
      </header>
      <div className='edit-container'>
        <div className='avatar'>
          <CustomAvatar />
          <div className='edit-btn' title='Edit'>
            <AiOutlineEdit />
          </div>
        </div>
        <EditForm />
        <div className='tags-container'>
          <h3>edit tags</h3>
          <Tags heading='Interest/Topics' />
          <Tags heading='Challenges Overcome' />
        </div>
      </div>
    </section>
  );
};

export default Profile;
