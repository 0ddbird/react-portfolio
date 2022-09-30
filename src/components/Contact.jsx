import React, { useState } from 'react'
import { postMessage } from '../api/apiCalls'
import Modal from './Modal'

const Contact = () => {
  const textAreaMaxLength = 500
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(false)
  const [remainingChars, setRemainingChars] = useState(textAreaMaxLength)
  const [isMessageError, setIsMessageError] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()
    if (message.length < 10) {
      return
    }
    const postResponse = await postMessage(email, message)
    if (postResponse.status === 200) {
      setIsRequestSuccessful(true)
      setEmail('')
      setMessage('')
      setRemainingChars(textAreaMaxLength)
      setIsMessageError(false)
    } else {
      setIsRequestSuccessful(false)
    }
    setIsModalOpen(true)
  }

  function handleMessageChange (e) {
    const message = e.target.value
    setMessage(message)
    setRemainingChars(textAreaMaxLength - message.length)
    if (message.length < 10) setIsMessageError(true)
    else setIsMessageError(false)
  }
  return (
    <section id='contact' className='main-section'>
      <h1 className='section-heading'>Contact</h1>
      <h2 className='section-subheading'>let&apos;s get in touch!</h2>
      <div className='contact-wrapper'>
        <form id='contact-form' onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor='form-email' id='form-email-label'>Email</label>
          <input type='email' id='form-email' value={email} required onChange={(e) => setEmail(e.target.value)}></input>
          <label htmlFor='form-message' id='form-message-label'>Message</label>
          <span className='message-remaining-chars'>Remaining characters : <span className='message-remaining-chars-value'>{remainingChars}</span></span>
          <textarea id='form-message' rows='10' cols='30' value={message} maxLength={textAreaMaxLength} onChange={(e) => handleMessageChange(e)}></textarea>
          <p className={isMessageError ? 'message-feedback-error' : 'message-feedback'}>Sorry, your message is too short!</p>
          <div className='form-button-wrapper'>
            <button id='form-submit-button' type="submit">Send</button>
          </div>
        </form>
        {isModalOpen && <Modal setIsOpen={setIsModalOpen} requestSuccess={isRequestSuccessful} message={message}/>}
      </div>
    </section>
  )
}

export default Contact
