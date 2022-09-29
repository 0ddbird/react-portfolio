import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ setIsOpen, requestSuccess, message }) => {
  const mailTo = `mailto: contact@giacomo-llinares.com?subject=Contact&body=${message}`
  return (
    <div className='modal-background'>
      <aside className='modal'>
        {
          requestSuccess
            ? <>
              <h1 className='modal-heading'>Thank you!</h1>
              <p className='modal-body'>Your message has been sent!<br/>Looking forward to talking with you.</p>
              </>
            : <>
              <h1 className='modal-heading'>Oops!</h1>
                <p className='modal-body'>Something went wrong when sending the message.
                <br /> Would you mind  <a className='modal-mailto' href={mailTo}>sending it to my email</a>?</p>
              </>
        }
        <button className='modal-close-btn' onClick={() => setIsOpen(false)}>Close</button>
      </aside>
    </div>

  )
}

Modal.propTypes = {
  setIsOpen: PropTypes.func,
  requestSuccess: PropTypes.bool,
  message: PropTypes.string
}

export default Modal
