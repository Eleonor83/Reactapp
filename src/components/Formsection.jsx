import React from 'react'

function Formsection() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    setNameError('');
    setEmailError('');

    if (!name.trim()) {
        setNameError('Name is required');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      return;
    }



    console.log('Submitted:', { name, email, message });
  
    setName('');
    setEmail('');
    setMessage('');
};
  
    return (
    <section className="form_section">
    <div className="container mt-4">
       <div className="section-title">
          <h2>Leave us a message for any information.</h2>
       </div>
       <form onSubmit={handleSubmit} method="post">
          <div className="mb-3"> 
             <input type="text" id="name" name="name" title="Namn" placeholder="Name*" tabindex="1" className="p-2" value={name} onChange={(e) => setName(e.target.value)}/>
             {nameError && <div className="error-message">{nameError}</div>}
          </div>
          <div className="mb-3"> 
             <input type="email" id="email" name="email" title="Email" placeholder="Email*" tabindex="2" className="p-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
             {emailError && <div className="error-message">{emailError}</div>}
          </div>
          <div className="mb-3"> 
             <textarea name="area" id="area" cols="30" rows="10" placeholder="Your Message*" value={message}onChange={(e) => setMessage(e.target.value)}></textarea>                     
          </div>
          <button className="btn btn-yellow" type="submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
       </form>
       
    </div>
 </section>
  )
}

export default Formsection