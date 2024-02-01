import React from "react";

const SingleStory = ({ story }) => {
  return (
    <div className='single-story' key={story.id}>
      <div className='img-container'>
        <img src={story.imageUrl} alt='story-img' />
      </div>
      <div className='single-story-details'>
        <div className='header'>
          <p className='title'>{story.title}</p>
          <p className='date'>{story.date}</p>
        </div>
        <div className='info'>
          <p>{story.time}</p>
          <div style={{ display: "flex" }}>
            {story.keywords?.map((k, i) => (
              <span className='keywords' key={i}>
                {k}
              </span>
            ))}
          </div>
          <p style={{ width: "fit-content" }}>{story.text}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleStory;
