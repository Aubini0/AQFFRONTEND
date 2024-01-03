import React from 'react'
import { GoHomeFill } from 'react-icons/go'
import { FaUsers } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { GiOpenBook } from 'react-icons/gi'
import NavIconContainer from './NavIconContainer'

const NavBar = () => {
  const iconSize = 30
  const navs = [
    {
      title: 'home',
      icon: <GoHomeFill size={iconSize} />,
      path: '/dashboard'
    },
    {
      title: 'community',
      icon: <FaUsers size={iconSize} />,
      path: '/dashboard/community'
    },
    {
      title: 'notifications',
      icon: <IoIosNotifications size={iconSize} />,
      path: '/dashboard/notification'
    },
    {
      title: 'stories',
      icon: <GiOpenBook size={iconSize} />,
      path: '/dashboard/stories'
    }
  ]
  return (
    <div className='navbar'>
      {navs.map((n) => (
        <NavIconContainer
          key={n.title}
          icon={n.icon}
          title={n.title}
          path={n.path}
        />
      ))}
    </div>
  )
}

export default NavBar
