import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import CustomAvatar from "../../../components/CustomAvatar";
import SingleStory from "./SingleStory";
import { AuthContext } from "../../auth/authContext";

const filterBtns = ["Personal", "Saved"];

const Stories = () => {
  const [currentFilter, setCurrentFilter] = useState("personal");
  const { user } = useContext(AuthContext);

  const handleFilter = (e) => {
    const filter = e.target.innerText.toLowerCase();
    setCurrentFilter(filter);
  };

  const parseDate = (dateString) => {
    const today = new Date(); // Current date

    if (dateString === "today") {
      return today;
    } else if (dateString === "yesterday") {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      return yesterday;
    } else if (dateString?.includes("days ago")) {
      const daysAgo = parseInt(dateString, 10); // Extract the number of days
      const daysAgoDate = new Date(today);
      daysAgoDate.setDate(today.getDate() - daysAgo);
      return daysAgoDate;
    }

    return new Date(0);
  };

  return (
    <section className='stories'>
      <CustomAvatar />
      <h2 className='greeting'>Good Evening {user.name}</h2>
      <NavLink to='/dashboard/profile' className='edit-profile'>
        Edit Profile
      </NavLink>

      <div className='filter-btns'>
        {filterBtns.map((btn) => (
          <button
            className={
              currentFilter === btn.toLocaleLowerCase() ? "active" : ""
            }
            onClick={handleFilter}
            key={btn}
          >
            {btn}
          </button>
        ))}
      </div>

      <div style={{ margin: "17.5px 0", width: "100%", overflowY: "scroll" }}>
        {currentFilter === "personal"
          ? user.personalStories
              ?.sort((a, b) => parseDate(b.date) - parseDate(a.date))
              ?.map((story) => <SingleStory key={story.id} story={story} />)
          : user.savedStories
              ?.sort((a, b) => a.date - b.date)
              ?.map((story) => <SingleStory key={story.id} story={story} />)}
      </div>
    </section>
  );
};

export default Stories;
