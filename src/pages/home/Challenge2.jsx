import { useNavigate } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import { useState } from 'react'
const Challenge2 = () => {
  const navigate = useNavigate()
  const [feels, setFeels] = useState([
    {
      text: '😊',
      checked: false
    },
    {
      text: '🥺',
      checked: false
    },
    {
      text: '😢',
      checked: false
    },
    {
      text: '😟',
      checked: false
    },
    {
      text: '😣',
      checked: false
    },
    {
      text: '😡',
      checked: false
    },
    {
      text: '😭',
      checked: false
    },
    {
      text: '🫠',
      checked: false
    },
    {
      text: '🤕',
      checked: false
    },
    {
      text: '🤮',
      checked: false
    },
    {
      text: '🤡',
      checked: false
    },
    {
      text: '🥰',
      checked: false
    },
    {
      text: '😒',
      checked: false
    },
    {
      text: '🤔',
      checked: false
    },
    {
      text: '🙄',
      checked: false
    },
    {
      text: '😶',
      checked: false
    }
  ])
  const Feeler = ({ data, index }) => {
    return (
      <div
        onClick={() => handleItemClick(index)}
        className={data?.checked ? 'green' : 'normal'}
      >
        <p>{data.text}</p>
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
    <div className='challenge2'>
      <div className='header'>
        <div className='top'>
          <FaChevronLeft />
          <div className='step'>2/3</div>
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

export default Challenge2
