import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import img from '../../../assets/thone.jpeg'
const CommunitySetting = ({ open, onCloseModal }) => {
  const [active, setActive] = useState(true)
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      closeOnOverlayClick={false}
      classNames={{
        root: 'community-setting',
        overlay: 'setting-overlay',
        modal: 'modal-content'
      }}
      showCloseIcon={false}
    >
      <div className='bar' onClick={onCloseModal}></div>
      <div className='thumbnail'>
        <h2>Hannah</h2>
        <img src={img} alt='' />
        <div className='detail'>
          <img src={img} alt='' />
          <p className='state'>missing home</p>
          <div className='genre'>
            <span>Mental Health & wellbeing</span>
            <span>Self Discovery</span>
            <span>Resilience and Coping</span>
          </div>
          <p>current</p>
          <p>1/1/23</p>
        </div>
      </div>
      <div className='buttons'>
        <button>EDIT</button>
        <button>DELETE</button>
        <button>DOWNLOAD</button>
      </div>
      <div className='switch'>
        <span
          onClick={() => setActive(true)}
          className={active ? 'active-switch' : ''}
        >
          EDIT
        </span>
        <span
          onClick={() => setActive(false)}
          className={!active ? 'active-switch' : ''}
        >
          DELETE
        </span>
      </div>

      <div className='close'>
        <button onClick={onCloseModal}>CLOSE</button>
      </div>
    </Modal>
  )
}

export default CommunitySetting
