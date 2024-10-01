import React from 'react'
import Checkboxes from './Checkboxes'
import Radio from './Radio'


function Form() {
  return (
    <form className="form"> 
    <h2>Tell us what you think about your rubber duck!</h2>
    <div class="form__group radio">
      <h3>How do you rate your rubber duck colour? </h3>
    <Radio></Radio>
    </div>
    <div class="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
    <Checkboxes></Checkboxes>

    </div>
    <label
      >What else have you got to say about your rubber duck?
      <textarea
        name="review"
        cols="30"
        rows="10"
      ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
        type="text"
        name="username" 
        value= ""/></label>
        <label>
        Leave us your email pretty please??<input
        type="email"
        name="email"
        value="" /></label
    ><input class="form__submit" type="submit" value="Submit Survey!"  />
  </form>
  
  )
  }

export default Form