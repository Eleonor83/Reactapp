import React from 'react'

function Formsection() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    console.log('Submitted:', { name, email, message });
  
    setName('');
    setEmail('');
    setMessage('');
};
  
    return (
    <section class="form_section">
    <div class="container mt-4">
       <div class="section-title">
          <h2>Leave us a message for any information.</h2>
       </div>
       <form method="post">
          <div class="mb-3"> 
             <input type="text" id="name" name="name" title="Namn" placeholder="Name*" tabindex="1" class="p-2"/>
          </div>
          <div class="mb-3"> 
             <input type="email" id="email" name="email" title="Email" placeholder="Email*" tabindex="2" class="p-2"/>
          </div>
          <div class="mb-3"> 
             <textarea name="area" id="area" cols="30" rows="10" placeholder="Your Message*"></textarea>                     
          </div>
       </form>
       <button class="btn btn-yellow" type="submit">Send Message <i class="fa-regular fa-arrow-up-right"></i></button>
    </div>
 </section>
  )
}

export default Formsection