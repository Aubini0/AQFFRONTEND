import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <h1 className='name'>Hi Jon</h1>
      <p>What's going on?</p>
      <div className='choice'>
        <button onClick={() => navigate('/challenge')} className='c-one'>
          I'm struggling right now
        </button>
        <button onClick={() => navigate('/challenge')} className='c-two'>
          I've overcome something
        </button>
      </div>
    </div>
  )
}

export default Home
