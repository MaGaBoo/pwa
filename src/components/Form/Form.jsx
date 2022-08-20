import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  
  const [formData, updateFormData] = useState('');

  const handleChange = (event) => {
    updateFormData(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    
  }
  return (
    <div className="main_container container">
    <h3>My contact form</h3>
      <form className="form" action="submit">
        <div className="form_container">
          <div className="form_input">
            <label name="title">Title</label>
            <input type="text" name="title" onChange={handleChange}></input>
          </div>

          <div className="form_input">
            <label name="message">Message</label>
            <textarea onChange={handleChange}></textarea>
          </div>

          <button type="submit" onClick={handleSubmit} className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};


export default Form;
