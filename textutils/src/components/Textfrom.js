import React, { useState } from 'react';

export default function Textfrom(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
}

  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
}
  const handleclearClick = () => {
    console.log("text was clear");
    let newText = '';
    setText(newText)
}

      const handleOnChange = (event) => {
          console.log("On change");
          setText(event.target.value);
      }

      const [text, setText] = useState('Enter Text here2');
  return (
    <>
      <div>
    <h1>{props.heading}</h1>
      <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>contert to Upercase</button>
    <button className="btn btn-primary m-2" onClick={handleLoClick}>convert to Lowercase</button>
    <button className="btn btn-primary m-2" onClick={handleclearClick}>Clear text </button>
    </div>
    <div className='cotainer my-3'>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} worrds and {text.length} charectar</p>
    <p>{0.008*text.split(" ").length} Minuits to read</p>
    <h2>Preview</h2>
    <p>{text}</p>

    </div>
    </>
    
  )
}
