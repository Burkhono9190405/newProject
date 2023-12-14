import React from 'react'
import '../styles/textarea.css'
function TextArea() {
  return (
    <div className="TextArea">
     <div className="TextAreaRadio">
        <input type="radio" name="" id="" />
        <p>Ship to a different address?</p>
     </div>
     <div className="TextAreaRadio2">
        <input type="radio" name="" id="" />
          <p>rder notes (optional) </p>
     </div>
     <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  )
}

export default TextArea