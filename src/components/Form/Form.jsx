import React, { useState } from "react";
import axios from 'axios';
import "./Form.css";

const Form = () => {
  
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = () => {
   axios.post('http://localhost:8000/subscription', {
    title,
    message
   })
   .then(response => console.log(response))
   .catch(error => console.log(error));
   
}

  return (
    <div className="main_container container">
    <h3>My contact form</h3>
      <form className="form" method="POST" action="submit">
        <div className="form_container">
          <div className="form_input">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}></input>
          </div>

          <div className="form_input">
            <label for="message">Message</label>
            <textarea id="message" name="message" onChange={e => setTitle(e.target.value)}></textarea>
          </div>

          <button type="submit" value={message} onClick={handleSubmit} className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};


export default Form;
