import React from 'react'

const Modal = ({children, modalActive, setModalActive}) => {
  const active = (modalActive) ? ' active' : ''
  return (
    <div className={"modal" + active} onClick={() => setModalActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
