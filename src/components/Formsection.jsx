import React, { useState } from 'react';

const Formsection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let hasError = false;
  
      setNameError('');
      setEmailError('');
  
      if (!name.trim() || name.trim().length < 2) {
        setNameError(name.trim() ? 'Name must be at least 2 characters long' : 'Name is required');
        hasError = true;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email)) {
        setEmailError(email.trim() ? 'Insert a valid email' : 'Email is required');
        hasError = true;
      }
  
      if (hasError) {
        return;
      }
  
      const apiUrl = 'https://win23-assignment.azurewebsites.net/api/contactform';
  
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });
  
        if (response.status === 200) {
            setSubmitMessage('Form submitted, thank you!');
            setName('');
            setEmail('');
            setMessage('');
        } else {
          console.error('Error submitting data:', response.statusText);
          setSubmitMessage('Error submitting form. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error.message);
        setSubmitMessage('Error submitting form. Please try again.');
      }
    };

  return (
    <section className="form_section">
      <div className="container mt-4">
        <div className="section-title">
          <h2>Leave us a message for any information.</h2>
        </div>
        <form onSubmit={handleSubmit} method="post" noValidate>
          <div className="mb-3">
            <input
              type="text" id="name" name="name" title="Namn" placeholder="Name*" tabIndex="1"className="p-2"value={name} onChange={(e) => setName(e.target.value)}
            />
            {nameError && <div className="error-message">{nameError}</div>}
          </div>
          <div className="mb-3">
            <input
              type="email" id="email" name="email" title="Email" placeholder="Email*" tabIndex="2" className="p-2" value={email} onChange={(e) => setEmail(e.target.value)}
            /> {emailError && <div className="error-message">{emailError}</div>}
          </div>
          <div className="mb-3">
            <textarea name="area" id="area" cols="30" rows="10" placeholder="Your Message*" value={message} onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          {submitMessage && <div className="submit-message">{submitMessage}</div>}
          <button className="btn btn-yellow" type="submit"> Send Message <i className="fa-regular fa-arrow-up-right"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Formsection;
