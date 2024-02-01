import React, { useEffect, useState } from 'react'
import img from '../../../assets/thone.jpeg'
import { useNavigate } from 'react-router-dom'

const filterBtns = ['Current', 'Past']
const tempData = [
  {
    id: 1,
    image: img,
    type: 'current',
    title: 'Current'
  },
  { id: 2, image: img, type: 'current', title: 'Current' },
  { id: 3, image: img, type: 'current', title: 'Current' },
  { id: 4, image: img, type: 'current', title: 'Current' },
  { id: 5, image: img, type: 'current', title: 'Current' },
  { id: 6, image: img, type: 'current', title: 'current' },
  { id: 7, image: img, type: 'past', title: 'past' },
  { id: 8, image: img, type: 'past', title: 'past' },
  { id: 9, image: img, type: 'past', title: 'past' },
  { id: 10, image: img, type: 'past', title: 'past' },
  { id: 11, image: img, type: 'past', title: 'past' },
  { id: 12, image: img, type: 'past', title: 'past' }
]

const Community = () => {
  const [currentFilter, setCurrentFilter] = useState('current')
  const [communityData, setCommunityData] = useState([])
  const [filterData, setFilterData] = useState([])
  const navigate = useNavigate()

  const handleFilter = (e) => {
    const filter = e.target.innerText.toLowerCase()
    setCurrentFilter(filter)
  }

  useEffect(() => {
    //TODO: replace with data from api
    setCommunityData(tempData)
  }, [])

  useEffect(() => {
    setFilterData(() =>
      communityData?.filter((data) => data.type === currentFilter.toLowerCase())
    )
  }, [communityData, currentFilter])

  return (
    <div className='community-container'>
      <div className='community-btn'>
        {filterBtns.map((btn) => (
          <button
            className={
              currentFilter === btn.toLocaleLowerCase() ? 'active' : ''
            }
            onClick={handleFilter}
            key={btn}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className='community-grid'>
        {filterData?.map((data) => {
          const { id, title, image } = data
          return (
            <div
              key={id}
              className='community-grid-item'
              onClick={() => navigate('/dashboard/community-detail')}
            >
              <img src={image} alt={`img${id}`} className='community-img' />

              <div className='footer'>
                <h3>{title}</h3>
                <div className='community-text-paragraph'>
                  <p>Self Discovery</p>
                  <p>Self Discovery</p>
                  <p>Self Discovery</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Community
