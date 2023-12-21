import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import img from '../../assets/splash1.png'
import img2 from '../../assets/splash2.png'
import 'swiper/css'
import 'swiper/css/pagination'
import { useNavigate } from 'react-router-dom'

const Splashscreen = () => {
  const navigate = useNavigate()
  const swiperData = [
    {
      image: img,
      title: 'RULE #1',
      text: 'Welcome to AQF, where stories inspire and support!'
    },
    {
      image: img2,
      title: 'RULE #2',
      text: 'Welcome to AQF, where stories inspire and support!'
    },
    {
      image: img2,
      title: 'RULE #3',
      text: 'Welcome to AQF, where stories inspire and support!'
    }
  ]
  return (
    <Swiper
      modules={[Pagination]}
      pagination={true}
      spaceBetween={50}
      slidesPerView={1}
      onSliderMove={({ swipeDirection, activeIndex }) => {
        if (
          swipeDirection === 'next' &&
          activeIndex === swiperData.length - 1
        ) {
          navigate('/onboard')
        }
      }}
      className='my-swiper'
    >
      {swiperData.map((sw, i) => (
        <SwiperSlide key={i} className='swiper-content'>
          <h1>AQF RULES</h1>
          <div className='swiper-image'>
            <img src={sw.image} alt='' />
          </div>
          <h2>{sw.title}</h2>
          <p>{sw.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Splashscreen
