import React, { useState } from 'react'
import img from '../../../assets/thone.jpeg'
import { MdMoreHoriz, MdOutlineAddReaction } from 'react-icons/md'
import CommunitySetting from './CommunitySetting'

const CommunityDetail = () => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  return (
    <>
      <CommunitySetting
        open={open}
        onCloseModal={onCloseModal}
        onOpenModal={onOpenModal}
      />
      <div className='community-detail'>
        <div className='cover'>
          <img src={img} alt={'details'} />
          <p className='time'>0::01</p>
          <div className='top'>
            <div className='avatar'>
              <img src={img} alt='avatar' />
            </div>
            <p>Hannah</p>
            <MdMoreHoriz className='more' onClick={onOpenModal} />
          </div>
        </div>
        <div className='details'>
          <h1 className='title'>Title</h1>
          <h4 className='by'>By:Hannah</h4>
          <h5 className='sub-title'>SUB-TITLE</h5>
          <div className='community-genre'>
            <p className='round first'>Self Discovery</p>
            <p className='round second'>Self Discovery</p>
            <p className='round third'>Self Discovery</p>
          </div>
          <p className='story'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur quaerat harum recusandae, quis perferendis reiciendis
            explicabo a quidem doloribus tempore sed exercitationem similique
            alias dolorum beatae, veniam veritatis eos ipsum.
          </p>
          <div className='react'>
            <p>react to this story:</p>
            <div className='reaction'>
              <div>🔥 1</div>
              <div>🔥 4</div>
              <div>🔥 2</div>
              <div>🔥 2</div>
              <div>🔥 2</div>
              <MdOutlineAddReaction className='icon' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityDetail
