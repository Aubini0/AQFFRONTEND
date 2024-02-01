import React, { useEffect, useState } from 'react'
import img from '../../assets/thone.jpeg'
const Notification = () => {
  const [allNotification, setAllNotification] = useState([
    {
      id: 1,
      image: img,
      name: 'Hannah Flores',
      category: 'reaction',
      action: 'reacted to your post',
      message: '👌👌',
      time: '10:00am',
    },
    {
      id: 2,
      image: img,
      name: 'Hannah Flores',
      category: 'reaction',
      action: 'reacted to your post',
      message: '🔥🔥',
      time: '10:00am',
    },
    {
      id: 3,
      image: img,
      name: 'Hannah Flores',
      category: 'reaction',
      action: 'reacted to your post',
      message: '🔥🔥',
      time: '10:00am',
    },

    {
      id: 4,
      image: img,
      name: 'Hannah Flores',
      category: 'advice',
      action: 'gave advice to your question',
      message: img,
      time: '2 days ago',
    },

    {
      id: 5,
      image: img,
      name: 'Hannah Flores',
      category: 'advice',
      action: 'gave advice to your question',
      message: img,
      time: '2 days ago',
    },
    {
      id: 6,
      image: img,
      name: 'Anonymous',
      action: 'shared perspective to your question',
      category: 'perspective',
      message: img,
      time: '10:00am',
    },
    {
      id: 7,
      image: img,
      name: 'Anonymous',
      category: 'perspective',
      action: 'shared perspective to your question',
      message: img,
      time: '3 days ago',
    },
    {
      id: 8,
      image: img,
      name: 'Anonymous',
      category: 'perspective',
      action: 'shared perspective to your question',
      message: img,
      time: '10:00am',
    },
    {
      id: 9,
      image: img,
      name: 'Hannah Flores',
      category: 'reaction',
      action: 'reacted to your post',
      message: '🔥🔥',
      time: '10:00am',
    },
    {
      id: 10,
      image: img,
      name: 'Hannah Flores',
      category: 'reaction',
      action: 'reacted to your post',
      message: '🔥🔥',
      time: '10:00am',
    },
    {
      id: 11,
      image: img,
      name: 'Hannah Flores',
      category: 'reaction',
      action: 'reacted to your post',
      message: '🔥🔥',
      time: '10:00am',
    },
    {
      id: 12,
      image: img,
      name: 'Hannah Flores',
      category: 'reaction',
      action: 'reacted to your post',
      message: '🔥🔥',
      time: '10:00am',
    },
    {
      id: 13,
      image: img,
      name: 'Hannah Flores',
      category: 'reaction',
      action: 'reacted to your post',
      message: '🔥🔥',
      time: '10:00am',
    },
    {
      id: 14,
      image: img,
      name: 'Hannah Flores',
      category: 'reaction',
      action: 'reacted to your post',
      message: '🔥🔥',
      time: '10:00am',
    },
  ])
  const [notificationData, setNotificationData] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')

  const notificationCategories = allNotification.map((notif) => notif.category)
  const notificationSet = new Set(notificationCategories)
  const btnCategories = ['all', ...notificationSet]
  useEffect(() => {
    setNotificationData(allNotification)
  }, [])
  const handleNotificationFilter = (categ) => {
    setActiveCategory(categ)
    if (categ === 'all') {
      setNotificationData(allNotification)
    } else {
      const newNotification = allNotification.filter(
        (notification) => notification.category === categ
      )
      setNotificationData(newNotification)
    }
  }

  return (
    <div className="dashboard-notification">
      <div className="dashboard-btn">
        {btnCategories.map((categ) => {
          return (
            <button
              key={categ}
              className={activeCategory === categ ? 'active' : 'btn'}
              onClick={() => handleNotificationFilter(categ)}
            >
              {categ}
            </button>
          )
        })}
      </div>
      <div className="notification-container">
        {notificationData.map((notification) => {
          const { image, id, name, time, category, message, action } =
            notification
          return (
            <div className="notification" key={id}>
              <div className="notification-content">
                <img
                  src={image}
                  alt="notification"
                  className="notification-img"
                />
                <div className="notification-text">
                  <h4>{name}</h4>
                  <p>{action}</p>
                  <span className="notification-time">{time}</span>
                </div>
              </div>
              <div className="notification-type">
                {category === 'reaction' ? (
                  <p className="category-paragraph">{message}</p>
                ) : (
                  <img src={message} className={category} />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Notification
