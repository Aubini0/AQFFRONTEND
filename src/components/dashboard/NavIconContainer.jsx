import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavIconContainer = ({ icon, title, path }) => {
  const pathname = useLocation().pathname
  const navigate = useNavigate()
  return (
    <div
      className={['icon-container', path === pathname ? 'active-nav' : ''].join(
        ' '
      )}
      onClick={() => navigate(path)}
    >
      <span>{icon}</span>
      <span className='title'>{title}</span>
    </div>
  )
}

export default NavIconContainer
