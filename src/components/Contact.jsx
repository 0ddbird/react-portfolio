import React, { useState } from 'react'

const Contact = () => {
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  function handleSubmit (e) {
    e.preventDefault()
    console.log('submit', email, message)
  }

  function handleEmailChange (e) {
    setEmail(e.target.value)
  }

  function handleMessageChange (e) {
    if (e.target.value.length > 2) {
      setMessage(e.target.value)
    }
  }
  return (
    <section id='contact' className='main-section'>
      <h1 className='section-heading'>Contact</h1>
      <span className='section-subheading'>let&apos;s get in touch!</span>
      <div className='contact-wrapper'>
        <form id='contact-form' onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor='form-email' id='form-email-label'>Email</label>
          <input type='email' id='form-email' required onChange={(e) => handleEmailChange(e)}></input>
          <label htmlFor='form-message' id='form-message-label'>Message</label>
          <textarea id='form-message' rows='10' onChange={(e) => handleMessageChange(e)}></textarea>
          <div className='form-button-wrapper'>
            <button id='form-submit-button' type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
