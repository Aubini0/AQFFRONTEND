import { useNavigate } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import { useState } from 'react'
const Challenge = () => {
  const navigate = useNavigate()
  const [feels, setFeels] = useState([
    {
      text: 'Mental Health & wellbeing',
      checked: false
    },
    {
      text: 'Resilience and Coping',
      checked: false
    },
    {
      text: 'Self Discovery',
      checked: false
    },
    {
      text: 'Vices',
      checked: false
    },
    {
      text: 'Unhealthy Habits',
      checked: false
    },
    {
      text: 'Intimacy',
      checked: false
    },
    {
      text: 'Connection',
      checked: false
    },
    {
      text: 'Friendships',
      checked: false
    },
    {
      text: 'Dating',
      checked: false
    },
    {
      text: 'Romance',
      checked: false
    },
    {
      text: 'Work-Life Balance',
      checked: false
    },
    {
      text: 'Job Searching',
      checked: false
    }
  ])
  const Feeler = ({ data, index }) => {
    return (
      <div
        onClick={() => handleItemClick(index)}
        className={data?.checked ? 'green' : 'normal'}
      >
        <p> {data?.text}</p>
      </div>
    )
  }
  const handleItemClick = (index) => {
    const updatedItems = [...feels]
    updatedItems[index] = {
      ...updatedItems[index],
      checked: !updatedItems[index].checked
    }
    setFeels(updatedItems)
  }
  return (
    <div className='challenge'>
      <div className='header'>
        <div className='top'>
          <FaChevronLeft />
          <div className='step'>1/3</div>
          <p>Skip</p>
        </div>
        <h3>How do you feel about this challenge?</h3>
      </div>
      <div className='feel-container'>
        {feels?.map((f, i) => (
          <Feeler data={f} index={i} />
        ))}
      </div>
      <h1>Jon</h1>

      <button onClick={() => navigate('/challenge2')} className='btn-next'>
        Continue
      </button>
    </div>
  )
}

export default Challenge
